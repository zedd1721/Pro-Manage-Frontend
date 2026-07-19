import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { joinProject } from "@/features/auth/api/invite";

export const useJoinProject = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: joinProject,

    onSuccess: () => {
      navigate({ to: "/dashboard" });
    },
  });
};