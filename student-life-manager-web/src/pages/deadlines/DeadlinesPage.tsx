import PageHeader from "../../components/common/PageHeader";
import EmptyState from "../../components/common/EmptyState";

export default function DeadlinesPage() {
  return (
    <div className="p-10">
      <PageHeader
        title="Deadlines"
        subtitle="Keep track of important deadlines."
      />

      <EmptyState
        title="No Deadlines Yet"
        description="Add your first deadline."
      />
    </div>
  );
}