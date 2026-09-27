function Help() {
    const questions = [
        {
            question: "How do I create an account?",
            answer:
                "Choose Create an Account and provide your basic information. You will later be able to complete your professional profile.",
        },
        {
            question: "Can I both offer and request services?",
            answer:
                "Yes. The platform is designed so that a person can use the platform to find professional help and also offer their own skills.",
        },
        {
            question: "How do professionals earn money?",
            answer:
                "Professionals can create services and agree on the price and requirements with clients before completing the work.",
        },
        {
            question: "Can I sign in with Google?",
            answer:
                "Yes. Google sign-in will be available alongside normal email and password authentication.",
        },
    ];

    return (
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

            <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    Help Center
                </p>

                <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
                    How can we help?
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-slate-400">
                    Find answers to common questions about using the platform.
                </p>
            </div>

            <div className="mt-12 space-y-4">

                {questions.map((item) => (
                    <div
                        key={item.question}
                        className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                    >
                        <h2 className="font-semibold text-white">
                            {item.question}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            {item.answer}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Help;