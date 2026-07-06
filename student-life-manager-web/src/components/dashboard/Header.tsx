export default function Header() {

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    return (

        <div className="mb-10 flex items-center justify-between">

            <div>

                <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">

                    Good Evening 👋

                </h1>

                <p className="mt-3 text-lg text-slate-500">

                    Welcome back to CampusFlow.

                    Stay productive and organized.

                </p>

            </div>

            <div className="rounded-3xl border border-white/40 bg-white/70 px-8 py-5 shadow-lg backdrop-blur">

                <p className="text-sm uppercase tracking-wider text-slate-400">

                    Today

                </p>

                <p className="mt-1 text-lg font-bold text-slate-800">

                    {formattedDate}

                </p>

            </div>

        </div>

    );

}