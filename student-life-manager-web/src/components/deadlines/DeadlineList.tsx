import { useEffect, useState } from "react";
import { getDeadlines } from "../../api/deadlineApi";

interface Props {
    refresh: number;
}

export default function DeadlineList({
    refresh,
}: Props) {

    const [deadlines, setDeadlines] = useState<any[]>([]);

    useEffect(() => {

        loadDeadlines();

    }, [refresh]);

    const loadDeadlines = async () => {

        try {

            const data = await getDeadlines();

            setDeadlines(data);

        } catch (err) {

            console.error(err);

        }

    };

    if (deadlines.length === 0) {

        return (

            <div className="rounded-2xl bg-white p-8 shadow-sm text-center">

                No deadlines available.

            </div>

        );

    }

    return (

        <div className="rounded-2xl bg-white shadow-sm overflow-hidden">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="p-4 text-left">
                            Title
                        </th>

                        <th className="p-4 text-left">
                            Due Date
                        </th>

                        <th className="p-4 text-left">
                            Priority
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {deadlines.map((deadline) => (

                        <tr
                            key={deadline.id}
                            className="border-t"
                        >

                            <td className="p-4">

                                {deadline.title}

                            </td>

                            <td className="p-4">

                                {deadline.dueDate}

                            </td>

                            <td className="p-4">

                                {deadline.priority}

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}