"use client";
import { logout } from "@/api/api";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={async () => await logout().then(() => router.push("/"))}
            className="btn w-fit"
        >
            Log out
        </button>
    );
};

export default LogoutButton;
