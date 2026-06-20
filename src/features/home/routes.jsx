import { createRoute } from "@tanstack/react-router";
import { appLayoutRoute } from "@/app/router/appLayoutRoute";
import HomePage from "@/features/home/pages/HomePage";

export const homeRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/dashboard",
  component: HomePage,
});
