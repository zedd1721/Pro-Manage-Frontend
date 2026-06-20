import { createRoute } from "@tanstack/react-router";
import { appLayoutRoute } from "@/app/router/appLayoutRoute";
import AnalyticsPage from "@/features/analytics/pages/AnalyticsPage";

export const analyticsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/analytics",
  component: AnalyticsPage,
});
