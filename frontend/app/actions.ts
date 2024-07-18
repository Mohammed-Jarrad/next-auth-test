"use server";
import { authAxios } from "@/lib/axios";
import { cookies } from "next/headers";

export async function getCookieValue(key: string) {
    const cookieValue = cookies().get(key)?.value || "";
    return JSON.parse(cookieValue);
}

export async function getToken() {
    return cookies().get("token")?.value || null;
}

export async function setToken(token: string) {
    return cookies().set("token", token, { maxAge: 60 * 60 * 24 * 30, httpOnly: true });
}

export async function saveUserInfoInNextCache() {
    try {
        const { data } = await authAxios.get("/api/user-info");
        // save the userinfo in next cache
        return data.userInfo;
    } catch (error) {
        console.log(error);
    }
}
