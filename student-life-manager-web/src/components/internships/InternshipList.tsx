import { useEffect, useState } from "react";
import { getInternships } from "../../api/internshipApi";

interface Props {
    refresh: number;
}

export default function InternshipList({
    refresh,
}: Props) {

    const [internships, setInternships] = useState<any[]>([]);

    useEffect(() => {

        loadInternships();

    }, [refresh]);

    const loadInternships = async () => {

        try {

            const data = await getInternships();

            setInternships(data);

        } catch (err) {

            console.error(err);

        }

    };

    if (internships.length === 0) {

        return (

            <div className="rounded-2xl bg-white p-8 shadow-sm text-center">

                No internships available.

            </div>

        );

    }

    return (

        <div className="rounded-2xl bg-white shadow-sm overflow-hidden">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="p-4 text-left">Company</th>

                        <th className="p-4 text-left">Role</th>

                        <th className="p-4 text-left">Status</th>

                        <th className="p-4 text-left">Deadline</th>

                    </tr>

                </thead>

                <tbody>

                    {internships.map((internship) => (

                        <tr
                            key={internship.id}
                            className="border-t"
                        >

                            <td className="p-4">
                                {internship.company}
                            </td>

                            <td className="p-4">
                                {internship.role}
                            </td>

                            <td className="p-4">
                                {internship.status}
                            </td>

                            <td className="p-4">
                                {internship.applicationDeadline}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}