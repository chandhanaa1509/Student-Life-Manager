import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

import { getInternships } from "../../api/internshipApi";

interface Props {
    refresh: number;
}

export default function InternshipList({
    refresh,
}: Props) {

    const [internships, setInternships] = useState<any[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        loadInternships();

    }, [refresh]);

    const loadInternships = async () => {

        try {

            const data = await getInternships();

            setInternships(data);

        } catch (err) {

            console.error(err);

            toast.error("Failed to load internships.");

        }

    };

    const filteredInternships = internships.filter(
        (internship) =>
            internship.company
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            internship.role
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            internship.status
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    if (internships.length === 0) {

        return (

            <div className="rounded-3xl border border-white/40 bg-white/80 p-12 text-center shadow-xl backdrop-blur">

                <h2 className="text-2xl font-bold">

                    No Internships Yet

                </h2>

                <p className="mt-3 text-slate-500">

                    Add your first internship application.

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
                    placeholder="Search internships..."
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />

            </div>

            <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-xl backdrop-blur">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-5 text-left">

                                Company

                            </th>

                            <th className="p-5 text-left">

                                Role

                            </th>

                            <th className="p-5 text-left">

                                Status

                            </th>

                            <th className="p-5 text-left">

                                Deadline

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredInternships.map(
                            (internship) => (

                                <tr
                                    key={internship.id}
                                    className="border-t transition hover:bg-slate-50"
                                >

                                    <td className="p-5 font-semibold">

                                        {internship.company}

                                    </td>

                                    <td className="p-5">

                                        {internship.role}

                                    </td>

                                    <td className="p-5">

                                        <span
                                            className={`rounded-full px-4 py-1 text-sm font-semibold ${
                                                internship.status === "Selected"
                                                    ? "bg-green-100 text-green-700"
                                                    : internship.status === "Interview"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}
                                        >

                                            {internship.status}

                                        </span>

                                    </td>

                                    <td className="p-5">

                                        {internship.applicationDeadline}

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