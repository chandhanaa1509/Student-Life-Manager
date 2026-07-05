import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <aside className="w-64 min-h-screen bg-white shadow-md p-6 flex flex-col">

      <div>

        <h1 className="text-3xl font-bold text-indigo-600">

          ◈ CampusFlow

        </h1>

        <nav className="mt-10 space-y-3">

          <Link
            to="/dashboard"
            className="block rounded-xl px-4 py-3 hover:bg-indigo-100"
          >
            🏠 Dashboard
          </Link>

          <Link
            to="/assignments"
            className="block rounded-xl px-4 py-3 hover:bg-indigo-100"
          >
            📚 Assignments
          </Link>

          <Link
            to="/notes"
            className="block rounded-xl px-4 py-3 hover:bg-indigo-100"
          >
            📝 Notes
          </Link>

          <Link
            to="/resources"
            className="block rounded-xl px-4 py-3 hover:bg-indigo-100"
          >
            📖 Resources
          </Link>

          <Link
            to="/deadlines"
            className="block rounded-xl px-4 py-3 hover:bg-indigo-100"
          >
            ⏰ Deadlines
          </Link>

          <Link
            to="/internships"
            className="block rounded-xl px-4 py-3 hover:bg-indigo-100"
          >
            💼 Internships
          </Link>

          <Link
            to="/profile"
            className="block rounded-xl px-4 py-3 hover:bg-indigo-100"
          >
            👤 Profile
          </Link>

        </nav>

      </div>

      <button
        onClick={logout}
        className="mt-auto rounded-xl bg-red-500 px-4 py-3 text-white hover:bg-red-600 transition"
      >
        Logout
      </button>

    </aside>

  );

}