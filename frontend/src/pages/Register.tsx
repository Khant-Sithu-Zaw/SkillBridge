import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

type AccountType = "USER" | "PRO";

function Register() {
    const [accountType, setAccountType] = useState<AccountType>("USER");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data = {
            accountType,
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword"),

            // Pro user fields
            headline: formData.get("headline"),
            mainSkill: formData.get("mainSkill"),
            yearsOfExperience: formData.get("yearsOfExperience"),
            bio: formData.get("bio"),
            location: formData.get("location"),
            phone: formData.get("phone"),
            portfolioUrl: formData.get("portfolioUrl"),
        };

        console.log("Registration submitted:", data);
    };

    return (
        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-10 sm:py-12">

            <div className="w-full max-w-md">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold sm:text-4xl">
                        Create your account
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                        Join SkillBridge and connect with people through
                        professional skills and services.
                    </p>
                </div>

                {/* Account Type Selection */}
                <div className="mb-5 grid grid-cols-2 gap-3">

                    <button
                        type="button"
                        onClick={() => setAccountType("USER")}
                        className={`rounded-xl border p-4 text-left transition ${accountType === "USER"
                                ? "border-blue-500 bg-blue-500/10"
                                : "border-slate-800 bg-slate-900 hover:border-slate-700"
                            }`}
                    >
                        <div className="text-sm font-semibold text-white">
                            Normal User
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-400">
                            Find people and request professional services.
                        </p>
                    </button>

                    <button
                        type="button"
                        onClick={() => setAccountType("PRO")}
                        className={`rounded-xl border p-4 text-left transition ${accountType === "PRO"
                                ? "border-blue-500 bg-blue-500/10"
                                : "border-slate-800 bg-slate-900 hover:border-slate-700"
                            }`}
                    >
                        <div className="text-sm font-semibold text-white">
                            Pro User
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-400">
                            Offer your skills and earn money.
                        </p>
                    </button>

                </div>

                {/* Registration Card */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* Basic Information */}

                        <Input
                            id="name"
                            name="name"
                            label="Full name"
                            type="text"
                            autoComplete="name"
                            placeholder="Your full name"
                        />

                        <Input
                            id="email"
                            name="email"
                            label="Email address"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                        />

                        <Input
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="new-password"
                            placeholder="Create a password"
                        />

                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm password"
                            type="password"
                            autoComplete="new-password"
                            placeholder="Confirm your password"
                        />

                        {/* Pro User Information */}

                        {accountType === "PRO" && (
                            <div className="space-y-5 border-t border-slate-800 pt-5">

                                <div>
                                    <h2 className="text-base font-semibold text-white">
                                        Professional information
                                    </h2>

                                    <p className="mt-1 text-xs leading-5 text-slate-400">
                                        Tell people about your professional skills
                                        and experience.
                                    </p>
                                </div>

                                <Input
                                    id="headline"
                                    name="headline"
                                    label="Professional headline"
                                    type="text"
                                    placeholder="e.g. Frontend Developer"
                                />

                                <Input
                                    id="mainSkill"
                                    name="mainSkill"
                                    label="Main skill"
                                    type="text"
                                    placeholder="e.g. React, Java, Graphic Design"
                                />

                                <Input
                                    id="yearsOfExperience"
                                    name="yearsOfExperience"
                                    label="Years of experience"
                                    type="number"
                                    min="0"
                                    placeholder="e.g. 3"
                                />

                                <Input
                                    id="location"
                                    name="location"
                                    label="Location"
                                    type="text"
                                    placeholder="e.g. Yangon, Myanmar"
                                />

                                <Input
                                    id="phone"
                                    name="phone"
                                    label="Phone number"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="Your phone number"
                                />

                                <Input
                                    id="portfolioUrl"
                                    name="portfolioUrl"
                                    label="Portfolio / Website"
                                    type="url"
                                    placeholder="https://example.com"
                                />

                                <div>
                                    <label
                                        htmlFor="bio"
                                        className="mb-2 block text-sm font-medium text-slate-300"
                                    >
                                        Professional bio
                                    </label>

                                    <textarea
                                        id="bio"
                                        name="bio"
                                        rows={4}
                                        placeholder="Tell clients about your experience and what you can help them with."
                                        className="
                                            w-full
                                            resize-none
                                            rounded-lg
                                            border
                                            border-slate-700
                                            bg-slate-800
                                            px-4
                                            py-3
                                            text-sm
                                            text-white
                                            placeholder-slate-500
                                            outline-none
                                            transition
                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-500/20
                                        "
                                    />
                                </div>

                            </div>
                        )}

                        {/* Terms */}

                        <div className="flex items-start gap-2">

                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500/30"
                            />

                            <label
                                htmlFor="terms"
                                className="text-xs leading-5 text-slate-400"
                            >
                                I agree to the Terms of Service and Privacy Policy.
                            </label>

                        </div>

                        {/* Submit */}

                        <Button
                            type="submit"
                            fullWidth
                        >
                            {accountType === "PRO"
                                ? "Create Pro Account"
                                : "Create Account"}
                        </Button>

                    </form>

                    {/* Login */}

                    <div className="mt-6 text-center">

                        <p className="text-sm text-slate-400">
                            Already have an account?{" "}

                            <Link
                                to="/"
                                className="font-semibold text-blue-400 hover:text-blue-300"
                            >
                                Sign in
                            </Link>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;