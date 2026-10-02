import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function Login(togglePopup: { togglePopup: () => void }) {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Login submitted");
    };

    return (
        <div className="flex flex-col items-center mt-10 justify-center px-4 py-10 sm:py-12">

            <div className="w-full max-w-4xl flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/30">

                {/* Card */}
                <div className="flex w-full flex-row items-stretch rounded-2xl">

                  <div className="flex w-1/2 flex-col justify-center">
                    <div className="relative aspect-square  bg-white/5 p-6">
                        <h1 className="py-5 text-3xl text-start font-bold tracking-tight text-white">
                            Welcome to SkillBridge
                        </h1>
                        <h1 className="w-3/4 pt-5 text-xl text-start font-bold tracking-tight text-white sm:text-2xl">
                            Connect with professionals, share your skills,
                            and get the help you need.
                        </h1>

                        {/* Small circle: centered on the curve at 40° */}
                        {/*<div className="pointer-events-none absolute left-[82.5%] top-[73.2%] h-30 w-30 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 shadow-2xl shadow-indigo-950" />*/}

                        {/* Large circle: centered where the curve meets the bottom edge */}
                        {/*<div className="pointer-events-none absolute left-[25%] top-[85%] overflow-hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 shadow-2xl shadow-indigo-950" />
                    </div>*/}
                        </div>
                        </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5  px-6 py-10  w-1/2"
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
                                className="font-semibold text-slate-300 hover:text-white mt-2 text-sm"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </form>



                </div>



            </div>
            <p className="mt-6 text-center text-xs leading-5 text-slate-600">
                By continuing, you agree to our Terms of Service
                and Privacy Policy.
            </p>

        </div>


    );
}

export default Login;