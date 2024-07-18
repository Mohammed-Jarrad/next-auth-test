"use client";

import { handleError } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: 5 * 60 * 1000, // 5 minutes
            refetchOnWindowFocus: false,
        },
        mutations: {
            retry: false,
            // onError: (error: any) => {
            //     handleError(error);
            // },
        },
    },
});

type Props = {
    children: React.ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Providers;
