import { useEffect, useState } from "react";
import { getResources } from "../../api/resourceApi";

interface Props {
  refresh: number;
}

export default function ResourceList({ refresh }: Props) {

  const [resources, setResources] = useState<any[]>([]);

  useEffect(() => {
    loadResources();
  }, [refresh]);

  const loadResources = async () => {

    try {

      const data = await getResources();

      setResources(data);

    } catch (err) {

      console.error(err);

    }

  };

  if (resources.length === 0) {

    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
        No resources available.
      </div>
    );

  }

  return (

    <div className="rounded-2xl bg-white shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">Title</th>

            <th className="p-4 text-left">Category</th>

            <th className="p-4 text-left">Link</th>

          </tr>

        </thead>

        <tbody>

          {resources.map((resource) => (

            <tr
              key={resource.id}
              className="border-t"
            >

              <td className="p-4">
                {resource.title}
              </td>

              <td className="p-4">
                {resource.category}
              </td>

              <td className="p-4">

                <a
                  href={resource.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 underline"
                >
                  Open
                </a>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}