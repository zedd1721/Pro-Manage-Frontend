import { ENDPOINTS } from "@/utils/endpoints"
import { fetchClient } from "@/utils/fetchClient"


export const createProject = (payload) => {
    return fetchClient.post(ENDPOINTS.createProject, {
        body:payload,
    });
};

export const joinProject = (payload) => {
    return fetchClient.post(ENDPOINTS.joinProject, {
        body: payload,
    });
};
