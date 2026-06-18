import { Outlet, createRoute } from "@tanstack/react-router";
import { fullPageLayoutRoute } from "@/app/router/fullPageLayoutRoute";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import WelcomePage from "@/features/auth/pages/WelcomePage";

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

const welcomeRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/welcome",
  component: WelcomePage,
});

export const authRoutes = authLayoutRoute.addChildren([
  loginRoute,
  registerRoute,
  welcomeRoute,
]);
