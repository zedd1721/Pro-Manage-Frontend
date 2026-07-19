import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { logout } from "@/features/auth/api/auth";

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      navigate({ to: "/login" });
    },
  });
};