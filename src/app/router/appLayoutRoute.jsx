/* eslint-disable react-refresh/only-export-components */
import { Outlet, createRoute, redirect } from "@tanstack/react-router";
import SideBar from "@/components/SideBar";
import { rootRoute } from "@/app/router/rootRoute";
import { getMe } from "@/features/auth/api/auth";

function AppLayout() {
  return (
    <div className="h-screen overflow-hidden bg-slate-100 text-slate-900 md:grid md:grid-cols-[200px_1fr]">
      <aside className="h-screen border-b border-gray-100 bg-white md:border-b-0 md:border-r">
        <SideBar />
      </aside>

      <main className="min-h-0 min-w-0 overflow-hidden p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}

export const appLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "app-layout",

  beforeLoad: async () => {
    try {
      await getMe();
    } catch {
      throw redirect({
        to: "/login",
      });
    }
  },

  component: AppLayout,
});
