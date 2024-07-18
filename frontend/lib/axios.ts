import axios from "axios";
import { handleError } from "./utils";

const authAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

authAxios.interceptors.response.use(
    function fullfilled(response) {
        return response;
    },
    function rejected(error) {
        handleError(error);
        return Promise.reject(error);
    }
);

export { authAxios, axiosInstance };
