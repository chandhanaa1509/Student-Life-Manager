import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FiSearch,
  FiTrash2,
  FiEdit2,
} from "react-icons/fi";

import {
  getAssignments,
  deleteAssignment,
} from "../../api/assignmentApi";

import AssignmentEditModal from "./AssignmentEditModal";

interface Props {
  refresh: number;
}

export default function AssignmentList({
  refresh,
}: Props) {

  const [assignments, setAssignments] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const [selectedAssignment, setSelectedAssignment] =
    useState<any>(null);

  useEffect(() => {

    loadAssignments();

  }, [refresh]);

  const loadAssignments = async () => {

    try {

      const data = await getAssignments();

      setAssignments(data);

    } catch (error) {

      console.error(error);

      toast.error("Failed to load assignments.");

    }

  };

  const handleDelete = async (id: string) => {

    if (!window.confirm("Delete this assignment?"))
      return;

    try {

      await deleteAssignment(id);

      toast.success("Assignment deleted.");

      loadAssignments();

    } catch (error) {

      console.error(error);

      toast.error("Delete failed.");

    }

  };

  const filteredAssignments =
    assignments.filter(
      (assignment) =>
        assignment.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        assignment.subject
          .toLowerCase()
          .includes(search.toLowerCase())
    );

  if (assignments.length === 0) {

    return (

      <div className="rounded-3xl border border-white/40 bg-white/80 p-12 text-center shadow-lg backdrop-blur">

        <h2 className="text-2xl font-bold">

          No Assignments Yet

        </h2>

        <p className="mt-3 text-slate-500">

          Add your first assignment.

        </p>

      </div>

    );

  }

  return (

    <>

      {selectedAssignment && (

        <AssignmentEditModal
          assignment={selectedAssignment}
          onClose={() =>
            setSelectedAssignment(null)
          }
          onUpdated={loadAssignments}
        />

      )}

      <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur">

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
            placeholder="Search assignments..."
            className="w-full rounded-2xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead>

              <tr className="border-b text-left text-slate-500">

                <th className="px-5 py-4">

                  Title

                </th>

                <th className="px-5 py-4">

                  Subject

                </th>

                <th className="px-5 py-4">

                  Due Date

                </th>

                <th className="px-5 py-4">

                  Status

                </th>

                <th className="px-5 py-4 text-center">

                  Actions

                </th>

              </tr>

            </thead>

            <tbody>

              {filteredAssignments.map(
                (assignment) => (

                  <tr
                    key={assignment.id}
                    className="border-b transition hover:bg-slate-50"
                  >

                    <td className="px-5 py-4 font-semibold">

                      {assignment.title}

                    </td>

                    <td className="px-5 py-4">

                      {assignment.subject}

                    </td>

                    <td className="px-5 py-4">

                      {assignment.dueDate}

                    </td>

                    <td className="px-5 py-4">

                      <span
                        className={`rounded-full px-4 py-1 text-sm font-semibold ${
                          assignment.status ===
                          "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >

                        {assignment.status}

                      </span>

                    </td>

                    <td className="px-5 py-4">

                      <div className="flex justify-center gap-3">

                        <button
                          onClick={() =>
                            setSelectedAssignment(
                              assignment
                            )
                          }
                          className="rounded-xl bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-500 hover:text-white"
                        >

                          <FiEdit2 />

                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              assignment.id
                            )
                          }
                          className="rounded-xl bg-red-100 p-3 text-red-600 transition hover:bg-red-500 hover:text-white"
                        >

                          <FiTrash2 />

                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </>

  );

}