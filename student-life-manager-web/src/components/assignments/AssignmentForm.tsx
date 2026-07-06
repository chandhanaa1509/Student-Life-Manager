import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../common/Button";
import Input from "../common/Input";

import { addAssignment } from "../../api/assignmentApi";

interface Props {
  onAssignmentAdded: () => void;
}

export default function AssignmentForm({
  onAssignmentAdded,
}: Props) {

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

      await addAssignment(formData);

      setFormData({
        title: "",
        subject: "",
        dueDate: "",
        status: "Pending",
      });

      onAssignmentAdded();

      toast.success("Assignment added successfully!");

    } catch (error) {

      console.error(error);

      toast.error("Failed to add assignment.");

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="mb-10 rounded-3xl border border-white/40 bg-white/80 p-8 shadow-lg backdrop-blur space-y-5"
    >

      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Assignment title"
      />

      <Input
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
      />

      <Input
        label="Due Date"
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />

      <div>

        <label className="mb-2 block font-medium">

          Status

        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        >

          <option>Pending</option>

          <option>Completed</option>

        </select>

      </div>

      <Button type="submit">

        Add Assignment

      </Button>

    </form>

  );

}