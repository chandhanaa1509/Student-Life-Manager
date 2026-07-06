import { useState } from "react";
import toast from "react-hot-toast";

import { addNote } from "../../api/noteApi";
import Button from "../common/Button";
import Input from "../common/Input";

interface Props {
  onNoteAdded: () => void;
}

export default function NoteForm({
  onNoteAdded,
}: Props) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      await addNote({
        title,
        content,
      });

      setTitle("");
      setContent("");

      onNoteAdded();

      toast.success("Note added successfully!");

    } catch (err) {

      console.error(err);

      toast.error("Failed to add note.");

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="mb-10 rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur space-y-5"
    >

      <Input
        label="Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter note title"
      />

      <div>

        <label className="mb-2 block font-medium">

          Content

        </label>

        <textarea
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          rows={5}
          placeholder="Write your note..."
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />

      </div>

      <Button type="submit">

        Add Note

      </Button>

    </form>

  );

}