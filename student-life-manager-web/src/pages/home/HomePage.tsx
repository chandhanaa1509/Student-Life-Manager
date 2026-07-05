import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}

      <nav className="flex items-center justify-between px-8 py-6">

        <h1 className="text-2xl font-bold text-indigo-600">
          ◈ CampusFlow
        </h1>

        <div className="flex gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg text-slate-700 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>

        </div>

      </nav>

      {/* Hero */}

      <section className="flex flex-col items-center justify-center px-6 text-center mt-24">

        <h2 className="text-6xl font-extrabold text-slate-800">

          Welcome to

          <span className="text-indigo-600"> CampusFlow</span>

        </h2>

        <p className="mt-5 text-2xl font-semibold text-slate-700">

          Organize. Track. Achieve.

        </p>

        <p className="mt-8 max-w-2xl text-lg text-slate-600">

          Manage assignments, internships,
          notes, resources and deadlines
          all in one beautiful workspace.

        </p>

        <div className="mt-10 flex gap-4">

          <Link
            to="/register"
            className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100 transition"
          >
            Login
          </Link>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto mt-28 max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold text-slate-800">

          Everything You Need

        </h2>

        <p className="mt-4 text-center text-slate-600">

          CampusFlow helps students stay organized,
          productive and focused.

        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            ["📚", "Assignments", "Track assignments and never miss submissions."],
            ["💼", "Internships", "Manage internship opportunities and applications."],
            ["📝", "Notes", "Keep all your important notes in one place."],
            ["📖", "Resources", "Store useful study materials for quick access."],
            ["⏰", "Deadlines", "Stay ahead with reminders and due dates."],
            ["👤", "Profile", "Manage your account and personal information."]
          ].map(([icon, title, description]) => (

            <div
              key={title}
              className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-4xl">{icon}</div>

              <h3 className="mt-5 text-2xl font-bold text-slate-800">

                {title}

              </h3>

              <p className="mt-4 text-slate-600">

                {description}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Tech Stack */}

      <section className="mt-32 bg-white py-20">

        <h2 className="text-center text-4xl font-bold text-slate-800">

          Built With

        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          {[
            "React",
            "TypeScript",
            "Spring Boot",
            "MongoDB",
            "JWT",
            "Tailwind CSS"
          ].map((tech) => (

            <div
              key={tech}
              className="rounded-full bg-indigo-100 px-6 py-3 font-semibold text-indigo-700"
            >
              {tech}
            </div>

          ))}

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-slate-200 py-8 text-center">

        <h3 className="text-2xl font-bold text-indigo-600">

          ◈ CampusFlow

        </h3>

        <p className="mt-3 text-slate-500">

          Organize. Track. Achieve.

        </p>

        <p className="mt-6 text-sm text-slate-400">

          Made with ❤️ by A. Chandhana

        </p>

      </footer>

    </div>
  );
}