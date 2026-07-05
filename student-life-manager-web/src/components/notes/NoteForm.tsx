import { useState } from "react";
import { addNote } from "../../api/noteApi";
import Button from "../common/Button";
import Input from "../common/Input";

interface Props {
  onNoteAdded: () => void;
}

export default function NoteForm({ onNoteAdded }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addNote({
        title,
        content,
      });

      setTitle("");
      setContent("");

      onNoteAdded();

      alert("Note added successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add note.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-2xl bg-white p-8 shadow-sm space-y-4"
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
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
          placeholder="Write your note..."
        />
      </div>

      <Button type="submit">
        Add Note
      </Button>
    </form>
  );
}