import PageHeader from "../../components/common/PageHeader";
import EmptyState from "../../components/common/EmptyState";

export default function InternshipsPage() {
  return (
    <div className="p-10">
      <PageHeader
        title="Internships"
        subtitle="Track internship opportunities."
      />

      <EmptyState
        title="No Internships Yet"
        description="Add your first internship."
      />
    </div>
  );
}