import { getCookieValue, getToken } from "./actions";
import LogoutButton from "./LogoutButton";

export default async function Home() {
    const token = await getToken();
    const userInfo = await getCookieValue("name");

    return (
        <div className="center relative">
            <div className="p-12 w-fit rounded-[40px] bg-white/5 backdrop-blur-sm flex items-center flex-col gap-5">
                <h1 className="text-amber-500 font-bold text-[1.5rem]">Hello, World!</h1>
                <p>{token}</p>
                <div>
                    <p>UserName: <span className="text-amber-500">{userInfo.username}</span></p>
                    <p>User role: <span className="text-amber-500">{userInfo.role}</span></p>
                </div>
                <LogoutButton />
            </div>
        </div>
    );
}
