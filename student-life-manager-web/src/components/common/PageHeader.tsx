interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <div className="mb-10">

      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">

        {title}

      </h1>

      <p className="mt-3 text-lg text-slate-500">

        {subtitle}

      </p>

    </div>
  );
}