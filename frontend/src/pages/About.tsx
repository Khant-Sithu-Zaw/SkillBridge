function About() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    About SkillBridge
                </p>

                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                    Skills can create opportunities.
                </h1>

                <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
                    SkillBridge is a platform designed to connect people
                    who need professional help with people who have the
                    skills and experience to provide it.
                </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                    <h2 className="text-xl font-semibold">
                        Find Expertise
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                        Find professionals based on their skills,
                        experience, services, and availability.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                    <h2 className="text-xl font-semibold">
                        Offer Your Skills
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                        Turn your professional knowledge and experience
                        into services that can help other people.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                    <h2 className="text-xl font-semibold">
                        Build Your Reputation
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                        Complete projects, receive reviews, and build
                        a professional reputation over time.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default About;