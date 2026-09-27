const steps = [
    {
        number: "01",
        title: "Create your account",
        description:
            "Create a profile and tell the community about your professional skills and experience.",
    },
    {
        number: "02",
        title: "Find or offer a service",
        description:
            "Search for professionals who can help you, or create your own services and offer your expertise.",
    },
    {
        number: "03",
        title: "Connect and discuss",
        description:
            "Communicate with the other person and agree on the work, requirements, price, and schedule.",
    },
    {
        number: "04",
        title: "Complete the work",
        description:
            "Work together to complete the requested service or professional task.",
    },
    {
        number: "05",
        title: "Review the experience",
        description:
            "After completing the work, both sides can build their reputation through reviews.",
    },
];

function HowItWorks() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    How It Works
                </p>

                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                    From skills to opportunities
                </h1>

                <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
                    Whether you need professional help or want to offer
                    your expertise, the process is simple.
                </p>
            </div>

            <div className="mt-16 space-y-6">

                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="flex gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:gap-8 sm:p-8"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-sm font-bold text-blue-400 sm:h-14 sm:w-14">
                            {step.number}
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold sm:text-xl">
                                {step.title}
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default HowItWorks;