function ProjectsPage() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        Sidebar Route
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-900">Projects</h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
        This is another child of the app layout. Only the main panel changes,
        while the sidebar stays in place.
      </p>
    </section>
  );
}

export default ProjectsPage;
