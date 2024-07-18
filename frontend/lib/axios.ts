import axios from "axios";
import { handleError } from "./utils";

const authAxios = axios.create({
    baseURL: "http://localhost:4040",
    withCredentials: true,
});

const axiosInstance = axios.create({
    baseURL: "http://localhost:4040",
    withCredentials: true,
});

authAxios.interceptors.response.use(
    function fullfilled(response) {
        console.log("first axios response", response);
        return response;
    },
    function onResponseError(error) {
        handleError(error);
        return Promise.reject(error);
    }
);

export { authAxios };
