"use client";

import React from "react";
import SubmitButton from "./SubmitButton";
import { axiosInstance } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import { LoginResponse } from "@/types/types";
import { handleError } from "@/lib/utils";

const LoginForm = () => {
    // async function action(formData: FormData) {
    //     "use server";
    //     const rawObject = {
    //         email: formData.get("email"),
    //         password: formData.get("password"),
    //     };
    //     try {
    //         const { data } = await axiosInstance.post("/signin", rawObject);
    //         return data;
    //     } catch (error) {
    //         throw new Error("Invalid email or password");
    //     }
    // }

    const loginMutation = useMutation({
        mutationFn: async (rawObject: any) => {
            const { data } = await axiosInstance.post<LoginResponse>("/auth/signin", rawObject);
            return data;
        },
        onSuccess: async ({ token }) => {
            try {
                const { status } = await axios.post("/api/setToken", { token });
                if (status === 200) {
                    toast.success("Login Successful");
                }
            } catch (error: any) {
                handleError(error);
            }
        },
        onError: (error: AxiosError | Error) => {
            handleError(error);
        },
    });

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const rawObject = {
            email: formData.get("email"),
            password: formData.get("password"),
        };
        loginMutation.mutate(rawObject);
    }

    return (
        <form
            className="space-y-6"
            // action={action}
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-4">
                <div className="space-y-2 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="input" />
                </div>
                <div className="space-y-2 flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="input" />
                </div>

                <SubmitButton />
            </div>
        </form>
    );
};

export default LoginForm;
