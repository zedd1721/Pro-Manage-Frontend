import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { login } from "@/features/auth/api/auth";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,

    onSuccess: () => {
      navigate({ to: "/welcome" });
    },
  });
};