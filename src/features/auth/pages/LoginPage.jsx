import { Link } from "@tanstack/react-router";

function LoginPage() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        Full Page Route
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-900">Login</h1>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        This page lives under the full-page layout, so it does not render the
        sidebar.
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
          />
        </div>

        <button
          type="button"
          className="w-full rounded-2xl bg-slate-900 px-4 py-3 font-medium text-white"
        >
          Sign in
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-500">
        Need an account?{" "}
        <Link to="/register" className="font-medium text-slate-900 underline">
          Register
        </Link>
      </p>
    </section>
  );
}

export default LoginPage;
