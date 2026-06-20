/* eslint-disable react-refresh/only-export-components */
import { Outlet, createRootRoute } from "@tanstack/react-router";

function RootLayout() {
  return <Outlet />;
}

export const rootRoute = createRootRoute({
  component: RootLayout,
});
