/* eslint-disable react-refresh/only-export-components */
import { Outlet, createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/app/router/rootRoute";

function FullPageLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}

export const fullPageLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "full-page-layout",
  component: FullPageLayout,
});
