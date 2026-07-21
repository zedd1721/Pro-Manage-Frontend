import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import loginPageImage from "@/assets/Login_page.png";

const PRIMARY = "#17A2B8";
const CIRCLE = "#317F8B";
const BORDER = "#d4d4d8";
const TEXT = "#343434";
const MUTED = "#8b8b8b";

function EyeIcon({ isVisible }) {
  const Icon = isVisible ? EyeOff : Eye;

  return (
    <Icon className="size-4 stroke-[1.75] sm:size-4.5" aria-hidden="true" />
  );
}

function AstronautIllustration() {
  return (
    <div className="relative mx-auto w-[48%] sm:w-[36%] lg:w-[42%] xl:w-[38%]">
      <div
        className="absolute left-1/2 top-[35%] aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ backgroundColor: CIRCLE }}
      />
      <img
        src={loginPageImage}
        alt=""
        className="relative z-10 mx-auto block h-auto w-[72%] object-contain drop-shadow-[0_18px_22px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function FieldIcon({ icon }) {
  const Icon =
    {
      user: UserRound,
      lock: LockKeyhole,
      mail: Mail,
    }[icon] ?? Mail;

  return (
    <Icon className="size-4 stroke-[1.75] sm:size-4.5" aria-hidden="true" />
  );
}

function AuthField({
  id,
  placeholder,
  type,
  icon,
  hasEye,
  value,
  error,
  onChange,
  isPasswordVisible,
  onTogglePassword,
}) {
  const inputType = hasEye && isPasswordVisible ? "text" : type;

  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center gap-2.5 rounded-2xl border bg-white px-3 py-3 text-(--auth-muted) shadow-[0_0_0_1px_rgba(0,0,0,0.015)] sm:gap-3 sm:px-3.5 sm:py-3.5"
        style={{
          borderColor: error ? "#ef4444" : "var(--auth-border)",
        }}
      >
        <span className="shrink-0" aria-hidden="true">
          <FieldIcon icon={icon} />
        </span>
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          aria-label={placeholder}
          value={value}
          onChange={(event) => onChange(id, event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-[0.9rem] font-light text-(--auth-text) outline-none placeholder:text-(--auth-muted) sm:text-[0.95rem]"
        />
        {hasEye ? (
          <button
            type="button"
            onClick={() => onTogglePassword(id)}
            className="shrink-0 cursor-pointer rounded-full p-1 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            aria-pressed={isPasswordVisible}
          >
            <EyeIcon isVisible={isPasswordVisible} />
          </button>
        ) : null}
      </label>

      {error ? (
        <p className="mt-1.5 px-1 text-[0.83rem] font-medium text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function AuthScreen({
  title,
  fields,
  submitText,
  switchPrompt,
  switchText,
  switchTo,
  onSubmit,
  isSubmitting = false,
  serverError,
}) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(fields.map((field) => [field.id, ""])),
  );
  const [errors, setErrors] = useState({});
  const [visiblePasswords, setVisiblePasswords] = useState({});

  function handleChange(id, nextValue) {
    setValues((currentValues) => ({
      ...currentValues,
      [id]: nextValue,
    }));

    setErrors((currentErrors) => {
      if (!currentErrors[id]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[id];
      return nextErrors;
    });
  }

  function handleTogglePassword(id) {
    setVisiblePasswords((currentVisiblePasswords) => ({
      ...currentVisiblePasswords,
      [id]: !currentVisiblePasswords[id],
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};

    fields.forEach((field) => {
      const rawValue = values[field.id] ?? "";
      const trimmedValue = rawValue.trim();

      if (!trimmedValue) {
        nextErrors[field.id] = `${field.placeholder} is required.`;
        return;
      }

      if (field.type === "email") {
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue);

        if (!isEmailValid) {
          nextErrors[field.id] = "Please enter a valid email address.";
        }
      }
    });

    if (
      values["register-password"] &&
      values["register-confirm-password"] &&
      values["register-password"] !== values["register-confirm-password"]
    ) {
      nextErrors["register-confirm-password"] = "Passwords do not match.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    onSubmit?.(values);
  }

  return (
    <section
      className="kanban-scroll fixed inset-0 z-10 overflow-y-auto bg-white lg:overflow-hidden"
      style={{
        fontFamily: '"Avenir Next", "Trebuchet MS", "Segoe UI", sans-serif',
        "--auth-primary": PRIMARY,
        "--auth-circle": CIRCLE,
        "--auth-border": BORDER,
        "--auth-text": TEXT,
        "--auth-muted": MUTED,
      }}
    >
      <div
        className="grid min-h-svh"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
        }}
      >
        <aside className="flex min-h-[34svh] items-center justify-center overflow-hidden bg-(--auth-primary) px-[4vw] py-[3svh] text-center text-white">
          <div className="flex w-full flex-col items-center justify-center gap-[1.1svh]">
            <AstronautIllustration />
            <h2 className="whitespace-nowrap text-[clamp(1.15rem,2vw,2rem)] font-light tracking-[-0.04em]">
              Welcome aboard my friend
            </h2>
            <p className="whitespace-nowrap text-[clamp(0.78rem,0.9vw,0.98rem)] font-light text-white/90">
              just a couple of clicks and we start
            </p>
          </div>
        </aside>

        <main className="flex items-center justify-center bg-white px-[4vw] py-[3svh]">
          <div className="w-full max-w-108">
            <h1 className="text-center text-[clamp(1.55rem,3vw,2.35rem)] font-semibold tracking-[-0.04em] text-(--auth-text)">
              {title}
            </h1>

            <form
              className="mt-[2.2svh] space-y-[1.1svh]"
              onSubmit={handleSubmit}
            >
              {fields.map((field) => (
                <AuthField
                  key={field.id}
                  {...field}
                  value={values[field.id] ?? ""}
                  error={errors[field.id]}
                  onChange={handleChange}
                  isPasswordVisible={Boolean(visiblePasswords[field.id])}
                  onTogglePassword={handleTogglePassword}
                />
              ))}

              {serverError ? (
                <p className="rounded-xl bg-red-50 px-3 py-2 text-[0.85rem] font-medium text-red-600">
                  {serverError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-[1.4svh] w-full rounded-full bg-(--auth-primary) px-4 py-3 text-[0.92rem] font-medium text-white transition hover:brightness-[1.03] sm:py-3.5 sm:text-[0.98rem]"
              >
                {submitText}
              </button>
            </form>

            <p className="mt-[1.9svh] text-center text-[0.9rem] font-light text-(--auth-muted) sm:text-[0.98rem]">
              {switchPrompt}
            </p>

            <Link
              to={switchTo}
              className="mt-[1.4svh] flex w-full items-center justify-center rounded-full border border-(--auth-primary) px-4 py-3 text-[0.92rem] font-medium text-(--auth-primary) transition hover:bg-(--auth-primary)/5 sm:py-3.5 sm:text-[0.98rem]"
            >
              {switchText}
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
}

export default AuthScreen;
