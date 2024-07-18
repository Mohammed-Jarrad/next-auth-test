"use client";
import { getCategories } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BeatLoader } from "react-spinners";
import Category from "./category";
import { useGetCategories } from "@/hooks/use-query";

const Categories = () => {
    const { data: categories, isPending, error } = useGetCategories();

    if (isPending) {
        return (
            <div className="w-full h-full center">
                <BeatLoader size={"2rem"} color="#f59e0b" />
            </div>
        );
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <div>
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <Category key={category._id} category={category} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
