import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Login submitted");
    };

    return (
        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-10 sm:py-12 ">

            <div className="w-full max-w-md ">

                <h1 className="mb-8 text-xl text-center font-bold tracking-tight sm:text-2xl">
                    Connect with professionals, share your skills,
                    and get the help you need.
                </h1>


                {/* Card */}
                <div className=" rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl shadow-black/30 sm:p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <Input
                            id="email"
                            name="email"
                            label="Email address"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                        />

                        <div>



                            <Input
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                id="remember"
                                name="remember"
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500/30"
                            />


                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm text-slate-400"
                            >
                                Remember me
                            </label>



                        </div>

                        <Button
                            type="submit"
                            fullWidth
                        >
                            Sign In
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-slate-400">
                            Don't have an account?{" "}

                            <Link
                                to="/register"
                                className="font-semibold text-blue-400 hover:text-blue-300"
                            >
                                Create an account
                            </Link>

                        </p>
                        <Link
                            to="/forgot-password"
                            className="font-semibold text-white-200 hover:text-gray-400 mt-2 text-sm"
                        >
                            Forgot password?
                        </Link>
                    </div>

                </div>

                <p className="mt-6 text-center text-xs leading-5 text-slate-600">
                    By continuing, you agree to our Terms of Service
                    and Privacy Policy.
                </p>

            </div>
        </div>
    );
}

export default Login;