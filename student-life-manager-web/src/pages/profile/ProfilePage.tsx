import PageHeader from "../../components/common/PageHeader";

export default function ProfilePage() {
  return (
    <div className="p-10">
      <PageHeader
        title="Profile"
        subtitle="Manage your personal information."
      />

      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-slate-600">
          Profile settings will be available here.
        </p>
      </div>
    </div>
  );
}