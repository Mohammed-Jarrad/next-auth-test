import { AxiosError } from "axios";
import { toast } from "sonner";

export function handleError(error: AxiosError | Error) {
    if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
    } else if (error instanceof Error) {
        toast.error(error.message);
    } else {
        toast.error("Unknown error");
    }
}
