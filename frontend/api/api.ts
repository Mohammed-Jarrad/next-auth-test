import { ResGetCategories, TCategory } from "@/types/types";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://ecommerce-node4-five.vercel.app",
    headers: {
        "Token-Auth": "token",
    },
});

// axiosInstance.interceptors.response.use(function fullfill(response) {
//     return response;
// });

export async function getCategories() {
    return await axiosInstance
        .get<ResGetCategories>("/categories")
        .then((res) => res.data.categories);
}

export async function logout() {
    return await axios.get("/api/removeToken").then(({ data: { message } }) => message);
}
