interface Props {

    title: string;

    value: string | number;

}

export default function StatCard({

    title,

    value

}: Props) {

    return (

        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">

            <h2 className="text-lg font-semibold text-slate-500">

                {title}

            </h2>

            <p className="mt-4 text-4xl font-bold text-indigo-600">

                {value}

            </p>

        </div>

    );

}