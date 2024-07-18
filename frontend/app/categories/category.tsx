import { TCategory } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    category: TCategory;
};

const Category = ({ category }: Props) => {
    return (
        <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/20">
            <h1>{category.name}</h1>
            <Image
                priority
                src={category.image.secure_url}
                alt={category.name}
                width={200}
                height={200}
            />

            <Link
                href={`/categories/${category._id}`}
                className="border border-white/20 px-4 py-2 rounded-lg text-white bg-amber-500 w-full hover:bg-amber-600 transition-colors flex justify-center gap-2"
            >
                View
            </Link>
        </div>
    );
};

export default Category;
