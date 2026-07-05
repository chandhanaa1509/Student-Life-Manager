import { useState } from "react";

import PageHeader from "../../components/common/PageHeader";
import NoteForm from "../../components/notes/NoteForm";
import NoteList from "../../components/notes/NoteList";

export default function NotesPage() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="p-10">
      <PageHeader
        title="Notes"
        subtitle="Save your study notes."
      />

      <NoteForm
        onNoteAdded={() => setRefresh((prev) => prev + 1)}
      />

      <NoteList refresh={refresh} />
    </div>
  );
}