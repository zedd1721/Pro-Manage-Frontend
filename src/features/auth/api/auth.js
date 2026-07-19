import { fetchClient } from "@/utils/fetchClient";
import { ENDPOINTS } from "@/utils/endpoints";

export const register = (payload) => {
    return fetchClient.post(ENDPOINTS.register, {
        body:payload,
    });
};

export const login = (payload) => {
    return fetchClient.post(ENDPOINTS.login, {
        body:payload,
    });
};

export const logout = () => {
    return fetchClient.post(ENDPOINTS.logout);
};