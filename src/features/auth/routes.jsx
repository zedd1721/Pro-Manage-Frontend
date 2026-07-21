import { Outlet, createRoute, redirect } from "@tanstack/react-router";
import { fullPageLayoutRoute } from "@/app/router/fullPageLayoutRoute";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import WelcomePage from "@/features/auth/pages/WelcomePage";
import { getMe } from "@/features/auth/api/auth";

const redirectLoggedInUser = async () => {
  try {
    await getMe();

    throw redirect({
      to: "/dashboard",
    });
  } catch (error) {
    if (error?.isRedirect) {
      throw error;
    }
  }
};

const authLayoutRoute = createRoute({
  getParentRoute: () => fullPageLayoutRoute,
  id: "auth-layout",
  component: Outlet,
});

const loginRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/login",
  beforeLoad: redirectLoggedInUser,
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/register",
  beforeLoad: redirectLoggedInUser,
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
