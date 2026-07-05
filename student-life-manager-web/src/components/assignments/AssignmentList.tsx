import { useEffect, useState } from "react";
import { getAssignments } from "../../api/assignmentApi";

interface Props {
  refresh: number;
}

export default function AssignmentList({ refresh }: Props) {

  const [assignments, setAssignments] = useState<any[]>([]);

  useEffect(() => {
    loadAssignments();
  }, [refresh]);

  const loadAssignments = async () => {
    try {
      const data = await getAssignments();
      setAssignments(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (assignments.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="text-slate-500">
          No assignments available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">

      <table className="min-w-full">

        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Title</th>
            <th className="px-6 py-4 text-left">Subject</th>
            <th className="px-6 py-4 text-left">Due Date</th>
            <th className="px-6 py-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>

          {assignments.map((assignment) => (

            <tr
              key={assignment.id}
              className="border-t"
            >
              <td className="px-6 py-4">{assignment.title}</td>
              <td className="px-6 py-4">{assignment.subject}</td>
              <td className="px-6 py-4">{assignment.dueDate}</td>
              <td className="px-6 py-4">{assignment.status}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}