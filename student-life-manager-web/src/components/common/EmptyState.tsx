interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">

      <h2 className="text-2xl font-semibold text-slate-700">
        {title}
      </h2>

      <p className="mt-3 text-slate-500">
        {description}
      </p>

    </div>
  );
}