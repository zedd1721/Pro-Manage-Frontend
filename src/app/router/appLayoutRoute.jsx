import { Outlet, createRoute } from "@tanstack/react-router";
import SideBar from "@/components/SideBar";
import { rootRoute } from "@/app/router/rootRoute";

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 md:grid md:grid-cols-[260px_1fr]">
      <aside className="border-b border-slate-200 bg-white md:border-b-0 md:border-r">
        <SideBar />
      </aside>

      <main className="min-w-0 p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}

export const appLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "app-layout",
  component: AppLayout,
});
