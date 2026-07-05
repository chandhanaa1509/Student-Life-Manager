import { useEffect, useState } from "react";
import { getNotes } from "../../api/noteApi";

interface Props {
  refresh: number;
}

export default function NoteList({ refresh }: Props) {
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    loadNotes();
  }, [refresh]);

  const loadNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (notes.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
        No notes available.
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {notes.map((note) => (
        <div
          key={note.id}
          className="rounded-2xl bg-white p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold">
            {note.title}
          </h3>

          <p className="mt-3 text-slate-600 whitespace-pre-wrap">
            {note.content}
          </p>
        </div>
      ))}
    </div>
  );
}