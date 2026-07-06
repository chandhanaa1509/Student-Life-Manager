import { useState } from "react";

import AppLayout from "../../components/layout/AppLayout";
import PageHeader from "../../components/common/PageHeader";
import DeadlineForm from "../../components/deadlines/DeadlineForm";
import DeadlineList from "../../components/deadlines/DeadlineList";

export default function DeadlinesPage() {

    const [refresh, setRefresh] = useState(0);

    return (

        <AppLayout>

            <PageHeader
                title="Deadlines"
                subtitle="Track important academic deadlines."
            />

            <DeadlineForm
                onDeadlineAdded={() =>
                    setRefresh((prev) => prev + 1)
                }
            />

            <DeadlineList
                refresh={refresh}
            />

        </AppLayout>

    );

}