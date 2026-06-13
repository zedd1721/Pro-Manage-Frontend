import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/app/router";

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
