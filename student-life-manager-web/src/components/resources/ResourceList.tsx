import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiExternalLink, FiSearch } from "react-icons/fi";

import { getResources } from "../../api/resourceApi";

interface Props {
  refresh: number;
}

export default function ResourceList({
  refresh,
}: Props) {

  const [resources, setResources] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    loadResources();

  }, [refresh]);

  const loadResources = async () => {

    try {

      const data = await getResources();

      setResources(data);

    } catch (err) {

      console.error(err);

      toast.error("Failed to load resources.");

    }

  };

  const filteredResources = resources.filter(
    (resource) =>
      resource.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      resource.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  if (resources.length === 0) {

    return (

      <div className="rounded-3xl border border-white/40 bg-white/80 p-12 text-center shadow-xl backdrop-blur">

        <h2 className="text-2xl font-bold">

          No Resources Yet

        </h2>

        <p className="mt-3 text-slate-500">

          Add your first learning resource.

        </p>

      </div>

    );

  }

  return (

    <>

      <div className="relative mb-6">

        <FiSearch
          className="absolute left-4 top-4 text-slate-400"
          size={20}
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search resources..."
          className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />

      </div>

      <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-xl backdrop-blur">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-5 text-left">

                Title

              </th>

              <th className="p-5 text-left">

                Category

              </th>

              <th className="p-5 text-center">

                Link

              </th>

            </tr>

          </thead>

          <tbody>

            {filteredResources.map((resource) => (

              <tr
                key={resource.id}
                className="border-t transition hover:bg-slate-50"
              >

                <td className="p-5 font-semibold">

                  {resource.title}

                </td>

                <td className="p-5">

                  {resource.category}

                </td>

                <td className="p-5 text-center">

                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-100 px-4 py-2 font-medium text-indigo-700 transition hover:bg-indigo-600 hover:text-white"
                  >

                    <FiExternalLink />

                    Open

                  </a>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>

  );

}