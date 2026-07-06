import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    title: string;
    value: string | number;
    icon?: ReactNode;
    path?: string;
}

export default function StatCard({
    title,
    value,
    icon,
    path,
}: Props) {

    const navigate = useNavigate();

    return (

        <div
            onClick={() => path && navigate(path)}
            className={`group overflow-hidden rounded-3xl border border-white/50 bg-white/80 p-7 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                path ? "cursor-pointer" : ""
            }`}
        >

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">

                        {title}

                    </p>

                    <h2 className="mt-4 text-5xl font-extrabold text-indigo-600">

                        {value}

                    </h2>

                </div>

                <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 p-5 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">

                    {icon}

                </div>

            </div>

            <div className="mt-7 flex items-center justify-between">

                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-pink-400 via-violet-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />

                {path && (
                    <span className="text-sm font-semibold text-indigo-600 opacity-0 transition duration-300 group-hover:opacity-100">
                        Open →
                    </span>
                )}

            </div>

        </div>

    );

}