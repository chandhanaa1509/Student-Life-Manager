import { useState } from "react";

import PageHeader from "../../components/common/PageHeader";
import AssignmentForm from "../../components/assignments/AssignmentForm";
import AssignmentList from "../../components/assignments/AssignmentList";

export default function AssignmentsPage() {

  const [refresh, setRefresh] = useState(0);

  const handleAssignmentAdded = () => {

    setRefresh((prev) => prev + 1);

  };

  return (

    <div className="p-10">

      <PageHeader
        title="Assignments"
        subtitle="Manage all your assignments."
      />

      <AssignmentForm
        onAssignmentAdded={handleAssignmentAdded}
      />

      <AssignmentList
        refresh={refresh}
      />

    </div>

  );

}