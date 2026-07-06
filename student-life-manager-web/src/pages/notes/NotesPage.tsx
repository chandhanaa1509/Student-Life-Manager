import { useState } from "react";

import AppLayout from "../../components/layout/AppLayout";
import PageHeader from "../../components/common/PageHeader";
import NoteForm from "../../components/notes/NoteForm";
import NoteList from "../../components/notes/NoteList";

export default function NotesPage() {

    const [refresh, setRefresh] = useState(0);

    return (

        <AppLayout>

            <PageHeader
                title="Notes"
                subtitle="Save your study notes."
            />

            <NoteForm
                onNoteAdded={() =>
                    setRefresh((prev) => prev + 1)
                }
            />

            <NoteList refresh={refresh} />

        </AppLayout>

    );

}