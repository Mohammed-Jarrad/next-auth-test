"use client";
import { axiosInstance } from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const LogoutButton = ({ user }: { user: { username: string; role: string } | null }) => {
    const logoutQuery = useMutation({
        mutationFn: async () => {
            const { data } = await axiosInstance.post("/api/logout");
            return data;
        },
        onSuccess() {
            window.location.reload();
        },
    });

    if (!user) return null;

    return (
        <button onClick={() => logoutQuery.mutate()} className="btn w-fit">
            Log out
        </button>
    );
};

export default LogoutButton;
