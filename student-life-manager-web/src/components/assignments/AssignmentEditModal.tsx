// src/components/assignments/AssignmentEditModal.tsx

import { useState } from "react";
import toast from "react-hot-toast";

import { updateAssignment } from "../../api/assignmentApi";

interface Props {
  assignment: any;
  onClose: () => void;
  onUpdated: () => void;
}

export default function AssignmentEditModal({
  assignment,
  onClose,
  onUpdated,
}: Props) {

  const [formData, setFormData] = useState({
    title: assignment.title,
    subject: assignment.subject,
    dueDate: assignment.dueDate,
    status: assignment.status,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      await updateAssignment(
        assignment.id,
        formData
      );

      toast.success(
        "Assignment updated successfully."
      );

      onUpdated();

      onClose();

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to update assignment."
      );

    }

  };

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">

        <h2 className="mb-6 text-2xl font-bold text-slate-800">

          Edit Assignment

        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          >

            <option>Pending</option>

            <option>Completed</option>

          </select>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl bg-slate-200 px-6 py-3 font-semibold transition hover:bg-slate-300"
            >

              Cancel

            </button>

            <button
              type="submit"
              className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white transition hover:shadow-xl"
            >

              Save Changes

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}