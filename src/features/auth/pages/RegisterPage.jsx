import { Link } from "@tanstack/react-router";

function RegisterPage() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        Full Page Route
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-900">Register</h1>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        This uses the same full-page layout as login, which is where auth pages
        should usually live.
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
          />
        </div>

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

        <button
          type="button"
          className="w-full rounded-2xl bg-slate-900 px-4 py-3 font-medium text-white"
        >
          Create account
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-500">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-slate-900 underline">
          Sign in
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
