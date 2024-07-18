import { getCategories } from "@/api/api";
import { axiosTestIntance } from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetCategories() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });
}
