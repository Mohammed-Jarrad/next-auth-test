"use client";

import { saveUserInfoInNextCache } from "@/app/actions";
import { authAxios } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="py-2 h-[5rem] w-full px-2">
            <div className="container border border-white/20 shadow mx-auto h-full px-2 pr-6 flex items-center justify-between bg-neutral-900 rounded-full">
                {/* logo */}
                <div className="size-12 rounded-full bg-amber-500 text-white font-bold center">
                    MJ
                </div>
                {/* links */}
                <ul className="flex items-center gap-6 text-white font-semibold [&>li:hover]:text-amber-500 [&>li]:min-w-fit">
                    <HeaderLink href="/">Home</HeaderLink>
                    <HeaderLink href="/profile">Profile</HeaderLink>
                    {/* <li>
                        <Link href="/categories">Cateogries</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/signup">Register</Link>
                    </li> */}

                    <CreateTokenButton />
                </ul>
            </div>
        </header>
    );
};

export default Header;

function HeaderLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <li className={`${pathname === href ? "text-amber-500" : ""}`}>
            <Link href={href}>{children}</Link>
        </li>
    );
}

function CreateTokenButton() {
    const loginMutation = useMutation({
        mutationFn: async () => {
            const { data } = await authAxios.post("/api/login", {});
            return data;
        },
        async onSuccess() {
            saveUserInfoInNextCache()
        },
    });

    return (
        <button
            className="btn min-w-fit rounded-full"
            onClick={() => {
                loginMutation.mutate();
            }}
            disabled={loginMutation.isPending}
        >
            {loginMutation.isPending ? "Loading..." : "Create Token (login)"}
        </button>
    );
}
