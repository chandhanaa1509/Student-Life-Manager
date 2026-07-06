import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

import { getNotes } from "../../api/noteApi";

interface Props {
  refresh: number;
}

export default function NoteList({
  refresh,
}: Props) {

  const [notes, setNotes] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    loadNotes();

  }, [refresh]);

  const loadNotes = async () => {

    try {

      const data = await getNotes();

      setNotes(data);

    } catch (err) {

      console.error(err);

      toast.error("Failed to load notes.");

    }

  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      note.content
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  if (notes.length === 0) {

    return (

      <div className="rounded-3xl border border-white/40 bg-white/80 p-12 text-center shadow-xl backdrop-blur">

        <h2 className="text-2xl font-bold">

          No Notes Yet

        </h2>

        <p className="mt-3 text-slate-500">

          Add your first study note.

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
          placeholder="Search notes..."
          className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />

      </div>

      <div className="grid gap-6">

        {filteredNotes.map((note) => (

          <div
            key={note.id}
            className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
          >

            <h3 className="text-xl font-bold text-slate-800">

              {note.title}

            </h3>

            <p className="mt-4 whitespace-pre-wrap text-slate-600">

              {note.content}

            </p>

          </div>

        ))}

      </div>

    </>

  );

}