import { Link } from "@tanstack/react-router";

const navLinkClass =
  "rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900";

function SideBar() {
  return (
    <div className="flex h-full flex-col gap-6 p-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Pro Manage
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">Workspace</h1>
        <p className="mt-2 text-sm text-slate-500">
          Placeholder sidebar. You can replace this component with your own
          design later.
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        <Link
          to="/"
          className={navLinkClass}
          activeProps={{ className: `${navLinkClass} bg-slate-900 text-white` }}
        >
          Dashboard
        </Link>
        <Link
          to="/projects"
          className={navLinkClass}
          activeProps={{ className: `${navLinkClass} bg-slate-900 text-white` }}
        >
          Projects
        </Link>
        <Link
          to="/settings"
          className={navLinkClass}
          activeProps={{ className: `${navLinkClass} bg-slate-900 text-white` }}
        >
          Settings
        </Link>
        <Link
          to="/login"
          className={navLinkClass}
          activeProps={{ className: `${navLinkClass} bg-slate-900 text-white` }}
        >
          Login page
        </Link>
      </nav>
    </div>
  );
}

export default SideBar;
