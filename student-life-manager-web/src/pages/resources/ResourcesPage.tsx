import PageHeader from "../../components/common/PageHeader";
import EmptyState from "../../components/common/EmptyState";

export default function ResourcesPage() {
  return (
    <div className="p-10">
      <PageHeader
        title="Resources"
        subtitle="Save useful learning resources."
      />

      <EmptyState
        title="No Resources Yet"
        description="Save your first resource."
      />
    </div>
  );
}