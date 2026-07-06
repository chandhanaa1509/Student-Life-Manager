import { useState } from "react";

import AppLayout from "../../components/layout/AppLayout";
import PageHeader from "../../components/common/PageHeader";
import ResourceForm from "../../components/resources/ResourceForm";
import ResourceList from "../../components/resources/ResourceList";

export default function ResourcesPage() {

    const [refresh, setRefresh] = useState(0);

    return (

        <AppLayout>

            <PageHeader
                title="Resources"
                subtitle="Manage useful study resources."
            />

            <ResourceForm
                onResourceAdded={() =>
                    setRefresh((prev) => prev + 1)
                }
            />

            <ResourceList
                refresh={refresh}
            />

        </AppLayout>

    );

}