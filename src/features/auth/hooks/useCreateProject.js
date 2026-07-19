import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { createProject } from "../api/invite";

export const useCreateProject = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createProject,

    onSuccess: () => {
      navigate({ to: "/dashboard" });
    },
  });
};
