/* eslint-disable react-refresh/only-export-components */
import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "@/app/router/rootRoute";
import { appLayoutRoute } from "@/app/router/appLayoutRoute";
import { fullPageLayoutRoute } from "@/app/router/fullPageLayoutRoute";
import { authRoutes } from "@/features/auth";
import { dashboardRoute } from "@/features/dashboard";
import { landingRoute } from "@/features/landing";
import { projectsRoute } from "@/features/projects";
import { settingsRoute } from "@/features/settings";

function NotFoundPage() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 text-slate-600">
        The route exists in neither the full-page layout nor the sidebar app
        layout.
      </p>
    </div>
  );
}

const routeTree = rootRoute.addChildren([
  landingRoute,
  dashboardRoute,
  fullPageLayoutRoute.addChildren([
    authRoutes
  ]),
  appLayoutRoute.addChildren([
    projectsRoute, 
    settingsRoute
  ]),
]);

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
});
