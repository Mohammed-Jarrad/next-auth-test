"use client";
import React from "react";

const Error = ({ error }: { error: Error }) => {
    return (
        <div className=" center">
            <div className="space-y-4 text-center">
                <h1 className="text-red-500 text-3xl font-bold">
                    Error <span className="text-white">!</span>
                </h1>
                <p className="text-lg">{error.message}</p>
            </div>
        </div>
    );
};

export default Error;
