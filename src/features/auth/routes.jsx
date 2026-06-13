import { Outlet, createRoute } from "@tanstack/react-router";
import { fullPageLayoutRoute } from "@/app/router/fullPageLayoutRoute";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";

const authLayoutRoute = createRoute({
  getParentRoute: () => fullPageLayoutRoute,
  id: "auth-layout",
  component: Outlet,
});

const loginRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/login",
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/register",
  component: RegisterPage,
});

export const authRoutes = authLayoutRoute.addChildren([
  loginRoute,
  registerRoute,
]);
