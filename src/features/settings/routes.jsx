import { createRoute } from "@tanstack/react-router";
import { appLayoutRoute } from "@/app/router/appLayoutRoute";
import SettingsPage from "@/features/settings/pages/SettingsPage";

export const settingsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/settings",
  component: SettingsPage,
});
