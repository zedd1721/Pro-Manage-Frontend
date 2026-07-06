import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/app/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 5 * 60 * 1000,
      gcTime: 10*60*1000,
      retry:2,
      refetchOnWindowFocus: false,
    },
    mutations:{
      retry:0,
    }
  }
})

const AppRouterProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />{" "}
    </QueryClientProvider>
  );
};

export default AppRouterProvider;
