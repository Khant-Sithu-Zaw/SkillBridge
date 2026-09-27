import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function ForgotPassword() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Password reset requested");
    };

    return (
        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-10">

            <div className="w-full max-w-md">

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold">
                        Forgot your password?
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                        Enter your email and we'll send you instructions
                        to reset your password.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-8">

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

                        <Button
                            type="submit"
                            fullWidth
                        >
                            Send Reset Link
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link
                            to="/"
                            className="text-sm font-medium text-blue-400 hover:text-blue-300"
                        >
                            ← Back to Sign In
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ForgotPassword;