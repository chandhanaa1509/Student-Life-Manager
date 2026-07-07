import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

import { getDeadlines } from "../../api/deadlineApi";

interface Props {
    refresh: number;
}

export default function DeadlineList({
    refresh,
}: Props) {

    const [deadlines, setDeadlines] = useState<any[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        loadDeadlines();

    }, [refresh]);

    const loadDeadlines = async () => {

        try {

            const data = await getDeadlines();

            setDeadlines(data);

        } catch (err) {

            console.error(err);

            toast.error("Failed to load deadlines.");

        }

    };

    const filteredDeadlines = deadlines.filter(
        (deadline) =>
            deadline.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            deadline.priority
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    if (deadlines.length === 0) {

        return (

            <div className="rounded-3xl border border-white/40 bg-white/80 p-12 text-center shadow-xl backdrop-blur">

                <h2 className="text-2xl font-bold">

                    No Deadlines Yet

                </h2>

                <p className="mt-3 text-slate-500">

                    Add your first deadline.

                </p>

            </div>

        );

    }

    return (

        <>

            <div className="relative mb-6">

                <FiSearch
                    className="absolute left-4 top-4 text-slate-400"
                    size={20}
                />

                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    placeholder="Search deadlines..."
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />

            </div>

            <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-xl backdrop-blur">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-5 text-left">

                                Title

                            </th>

                            <th className="p-5 text-left">

                                Due Date

                            </th>

                            <th className="p-5 text-left">

                                Priority

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredDeadlines.map(
                            (deadline) => (

                                <tr
                                    key={deadline.id}
                                    className="border-t transition hover:bg-slate-50"
                                >

                                    <td className="p-5 font-semibold">

                                        {deadline.title}

                                    </td>

                                    <td className="p-5">

                                        {deadline.dueDate}

                                    </td>

                                    <td className="p-5">

                                        <span
                                            className={`rounded-full px-4 py-1 text-sm font-semibold ${
                                                deadline.priority === "High"
                                                    ? "bg-red-100 text-red-700"
                                                    : deadline.priority === "Medium"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-green-100 text-green-700"
                                            }`}
                                        >

                                            {deadline.priority}

                                        </span>

                                    </td>

                                </tr>

                            )
                        )}

                    </tbody>

                </table>

            </div>

        </>

    );

}