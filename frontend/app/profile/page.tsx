"use client";
import { authAxios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BeatLoader } from "react-spinners";

const ProfilePage = () => {
    const getUserQuery = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const { data } = await authAxios.get("/api/user-info");
            return data;
        },
    });

    console.log(document.cookie)

    if (getUserQuery.isLoading) {
        return (
            <div className="center">
                <BeatLoader size={"2rem"} color="#f59e0b" />
            </div>
        );
    }

    return (
        <div>
            {getUserQuery.data && (
                <div>
                    <p>{getUserQuery.data.userInfo.email}</p>
                    <p>{getUserQuery.data.userInfo.name}</p>
                    <p>{getUserQuery.data.userInfo.role}</p>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
