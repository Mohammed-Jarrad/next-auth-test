import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
    return (
        <div className="center flex-col gap-4 text-2xl">
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link
                href="/"
                className="px-4 py-2 rounded-lg text-white bg-amber-700 hover:bg-amber-800 transition-colors"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
