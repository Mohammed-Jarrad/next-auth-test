import { getCookieValue, getToken } from "./actions";
import LogoutButton from "./LogoutButton";

export default async function Home() {
    const token = await getToken();
    const userInfo: { username: string; role: string } | null = await getCookieValue("user");

    return (
        <div className="center relative">
            <div className="p-12 w-fit rounded-[40px] bg-white/5 backdrop-blur-sm flex items-center flex-col gap-5">
                <h1 className="text-amber-500 font-bold text-[1.5rem]">Hello, World!</h1>
                <p>
                    token: <span className="text-amber-500">{token}</span>
                </p>
                <p>
                    UserName: <span className="text-amber-500">{userInfo?.username}</span>
                </p>
                <p>
                    User role: <span className="text-amber-500">{userInfo?.role}</span>
                </p>

                <LogoutButton user={userInfo} />
            </div>
        </div>
    );
}
