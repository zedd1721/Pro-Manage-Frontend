import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { register } from "../api/auth";

export const useRegister = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: register,

        onSuccess: () => {
            navigate({to: "/welcome"});
        }
    })
}