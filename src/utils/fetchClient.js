const DEFAULT_TIMEOUT_MS = 10_000;
const DEFAULT_RETRY_COUNT = 2;
const DEFAULT_RETRY_DELAY_MS = 500;

const RETRYABLE_STATUS_CODES = new Set([408, 429, 502, 503, 504]);
const IDEMPOTENT_METHODS = new Set(["GET", "PUT", "DELETE"]);

const delay = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

const buildUrl = (baseUrl, path, query) => {
  const url = new URL(path, baseUrl);

  if (!query) {
    return url.toString();
  }

  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== undefined && item !== null) {
          url.searchParams.append(key, String(item));
        }
      });
      continue;
    }

    url.searchParams.set(key, String(value));
  }

  return url.toString();
};

const isPlainObject = (value) => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

const mergeSignals = (signalA, signalB) => {
  if (!signalA) return signalB ?? undefined;
  if (!signalB) return signalA;

  const controller = new AbortController();

  const abort = () => controller.abort();

  if (signalA.aborted || signalB.aborted) {
    abort();
    return controller.signal;
  }

  signalA.addEventListener("abort", abort, { once: true });
  signalB.addEventListener("abort", abort, { once: true });

  return controller.signal;
};

const createError = (message, input) => {
  const error = new Error(message);
  error.status = input?.status ?? 0;
  error.code = input?.code ?? "UNKNOWN_ERROR";
  error.data = input?.data;
  error.isNetworkError = input?.isNetworkError ?? false;
  error.isTimeout = input?.isTimeout ?? false;
  return error;
};

const shouldRetryRequest = (method, status, attempt, retryCount, error) => {
  if (attempt >= retryCount) {
    return false;
  }

  if (error?.isTimeout || error?.isNetworkError) {
    return true;
  }

  if (!IDEMPOTENT_METHODS.has(method)) {
    return false;
  }

  return RETRYABLE_STATUS_CODES.has(status);
};

const parseResponse = async (response, parseAs) => {
  if (parseAs === "response") {
    return response;
  }

  if (parseAs === "blob") {
    return response.blob();
  }

  if (parseAs === "text") {
    return response.text();
  }

  if (response.status === 204) {
    return null;
  }

  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
};

export const createFetchClient = (config) => {
  let refreshPromise = null;

  const runRefreshTokenFlow = async () => {
    if (!config.refreshPath) {
      throw createError("Session expired", {
        status: 401,
        code: "AUTH_REFRESH_DISABLED",
      });
    }

    const refreshUrl = buildUrl(config.baseUrl, config.refreshPath);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      config.timeoutMs ?? DEFAULT_TIMEOUT_MS,
    );

    try {
      const response = await fetch(refreshUrl, {
        method: "POST",
        credentials: "include",
        signal: controller.signal,
      });

      if (!response.ok) {
        throw createError("Unable to refresh session", {
          status: response.status,
          code: "AUTH_REFRESH_FAILED",
          data: await parseResponse(response, "json"),
        });
      }
    } catch (error) {
      if (config.onAuthFailure) {
        await config.onAuthFailure();
      }

      if (error instanceof Error && error.name === "AbortError") {
        throw createError("Refresh request timed out", {
          code: "AUTH_REFRESH_TIMEOUT",
          isTimeout: true,
        });
      }

      if (error?.code) {
        throw error;
      }

      throw createError("Unable to refresh session", {
        code: "AUTH_REFRESH_FAILED",
        isNetworkError: true,
      });
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  const ensureRefreshed = async () => {
    if (!refreshPromise) {
      refreshPromise = runRefreshTokenFlow().finally(() => {
        refreshPromise = null;
      });
    }

    await refreshPromise;
  };

  const request = async (path, options = {}) => {
    const method = (options.method ?? "GET").toUpperCase();
    const parseAs = options.parseAs ?? "json";
    const retryCount = options.retryCount ?? config.retryCount ?? DEFAULT_RETRY_COUNT;
    const timeoutMs = options.timeoutMs ?? config.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    const url = buildUrl(config.baseUrl, path, options.query);
    const headers = new Headers(options.headers);

    let body = options.body;

    if (isPlainObject(options.body)) {
      headers.set("Content-Type", "application/json");
      body = JSON.stringify(options.body);
    }

    for (let attempt = 0; attempt <= retryCount; attempt += 1) {
      const timeoutController = new AbortController();
      const timeoutId = window.setTimeout(() => timeoutController.abort(), timeoutMs);
      const signal = mergeSignals(options.signal, timeoutController.signal);

      config.onRequestStart?.({ url, method });

      try {
        if (typeof navigator !== "undefined" && navigator.onLine === false) {
          throw createError("No internet connection", {
            code: "OFFLINE",
            isNetworkError: true,
          });
        }

        const response = await fetch(url, {
          ...options,
          method,
          body,
          headers,
          credentials: "include",
          signal,
        });

        if (response.status === 401 && !options.skipAuthRetry) {
          await ensureRefreshed();

          const retryResponse = await fetch(url, {
            ...options,
            method,
            body,
            headers,
            credentials: "include",
            signal: options.signal,
          });

          if (!retryResponse.ok) {
            const retryError = createError("Request failed after refresh", {
              status: retryResponse.status,
              code: "HTTP_ERROR",
              data: await parseResponse(retryResponse, "json"),
            });

            config.onRequestEnd?.({
              url,
              method,
              status: retryResponse.status,
              ok: false,
              error: retryError,
            });

            throw retryError;
          }

          const parsedRetryResponse = await parseResponse(retryResponse, parseAs);

          config.onRequestEnd?.({
            url,
            method,
            status: retryResponse.status,
            ok: true,
          });

          return parsedRetryResponse;
        }

        if (!response.ok) {
          const responseData = await parseResponse(response, "json");
          const error = createError("Request failed", {
            status: response.status,
            code: "HTTP_ERROR",
            data: responseData,
          });

          config.onRequestEnd?.({
            url,
            method,
            status: response.status,
            ok: false,
            error,
          });

          if (shouldRetryRequest(method, response.status, attempt, retryCount)) {
            const backoffMs =
              (config.retryDelayMs ?? DEFAULT_RETRY_DELAY_MS) * 2 ** attempt;
            await delay(backoffMs);
            continue;
          }

          throw error;
        }

        const parsedResponse = await parseResponse(response, parseAs);

        config.onRequestEnd?.({
          url,
          method,
          status: response.status,
          ok: true,
        });

        return parsedResponse;
      } catch (error) {
        const isAbortError = error instanceof Error && error.name === "AbortError";
        const fetchError = error?.code
          ? error
          : createError(
              isAbortError ? "Request timed out" : "Network request failed",
              {
                code: isAbortError ? "TIMEOUT" : "NETWORK_ERROR",
                isTimeout: isAbortError,
                isNetworkError: !isAbortError,
              },
            );

        config.onRequestEnd?.({
          url,
          method,
          status: fetchError.status,
          ok: false,
          error: fetchError,
        });

        if (shouldRetryRequest(method, fetchError.status, attempt, retryCount, fetchError)) {
          const backoffMs =
            (config.retryDelayMs ?? DEFAULT_RETRY_DELAY_MS) * 2 ** attempt;
          await delay(backoffMs);
          continue;
        }

        throw fetchError;
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    throw createError("Request failed after retries", {
      code: "RETRY_EXHAUSTED",
    });
  };

  return {
    request,
    get: (path, options) => request(path, { ...options, method: "GET" }),
    post: (path, options) => request(path, { ...options, method: "POST" }),
    put: (path, options) => request(path, { ...options, method: "PUT" }),
    patch: (path, options) => request(path, { ...options, method: "PATCH" }),
    delete: (path, options) => request(path, { ...options, method: "DELETE" }),
  };
};

export const fetchClient = createFetchClient({
  baseUrl: "http://localhost:8080",
  refreshPath: "/api/auth/refresh-token",
  timeoutMs: 10_000,
  retryCount: 2,
  retryDelayMs: 500,
});
