import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/app/router/rootRoute";
import LandingPage from "@/features/landing/pages/LandingPage";

export const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});
