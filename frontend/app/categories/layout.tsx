import React from "react";
import { getToken } from "../actions";
import { redirect } from "next/navigation";

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
    const token = getToken();

    if (!token) {
        redirect("/login");
    }

    return children;
};

export default CategoriesLayout;
