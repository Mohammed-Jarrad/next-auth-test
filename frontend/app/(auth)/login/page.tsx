import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <div className="center">
            {/* Form Wrapper */}
            <div className="p-[2rem] w-fit rounded-[2rem] bg-white/5 backdrop-blur-sm space-y-12">
                <div className="text-left space-y-4">
                    <h1 className="text-3xl font-bold text-amber-500">Login</h1>
                    <p>Login to your account, or create a new account.</p>
                </div>
                {/* Form Component */}
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
