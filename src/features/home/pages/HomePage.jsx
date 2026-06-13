function HomePage() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Sidebar Route
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">
          Dashboard
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          This page is rendered inside the app layout, so the sidebar stays
          visible while only the main content changes.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Active projects</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900">12</p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Tasks due today</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900">7</p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Team updates</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900">18</p>
        </article>
      </div>
    </section>
  );
}

export default HomePage;
