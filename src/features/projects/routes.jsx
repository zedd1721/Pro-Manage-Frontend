import { createRoute } from "@tanstack/react-router";
import { appLayoutRoute } from "@/app/router/appLayoutRoute";
import ProjectsPage from "@/features/projects/pages/ProjectsPage";

export const projectsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/projects",
  component: ProjectsPage,
});
