import { createRoute } from "@tanstack/react-router";
import { appLayoutRoute } from "@/app/router/appLayoutRoute";
import TeamsPage from "@/features/teams/pages/TeamsPage";

export const teamsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/teams",
  component: TeamsPage,
});
