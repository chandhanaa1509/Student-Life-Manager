import { useState } from "react";

import AppLayout from "../../components/layout/AppLayout";
import PageHeader from "../../components/common/PageHeader";
import InternshipForm from "../../components/internships/InternshipForm";
import InternshipList from "../../components/internships/InternshipList";

export default function InternshipsPage() {

    const [refresh, setRefresh] = useState(0);

    return (

        <AppLayout>

            <PageHeader
                title="Internships"
                subtitle="Track your internship applications."
            />

            <InternshipForm
                onInternshipAdded={() =>
                    setRefresh((prev) => prev + 1)
                }
            />

            <InternshipList
                refresh={refresh}
            />

        </AppLayout>

    );

}