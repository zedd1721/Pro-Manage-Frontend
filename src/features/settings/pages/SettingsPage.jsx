function SettingsPage() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        Sidebar Route
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-900">Settings</h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
        Settings also sits inside the app layout. Later you can add auth guards,
        nested settings pages, or route loaders without changing the main
        structure.
      </p>
    </section>
  );
}

export default SettingsPage;
