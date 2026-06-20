import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/app/router/rootRoute";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardPage,
});
