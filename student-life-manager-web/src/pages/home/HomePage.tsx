import { Link } from "react-router-dom";
import homepageBg from "../../assets/images/homepage-bg.png";

export default function HomePage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${homepageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}

      <div className="absolute inset-0 bg-white/35"></div>

      {/* Page Content */}

      <div className="relative z-10">

        {/* Navbar */}

        <nav className="flex items-center justify-between px-8 py-6">

          <h1 className="text-2xl font-bold text-indigo-600">
            ◈ CampusFlow
          </h1>

          <div className="flex gap-4">

            <Link
              to="/login"
              className="rounded-lg px-5 py-2 text-slate-700 transition hover:text-indigo-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
            >
              Get Started
            </Link>

          </div>

        </nav>

        {/* Hero */}

        <section className="mt-24 flex flex-col items-center justify-center px-6 text-center">

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
              className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-slate-300 bg-white/60 px-8 py-4 font-semibold backdrop-blur-sm transition hover:bg-white/80"
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
                className="rounded-2xl bg-white/80 p-8 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
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

        <section className="mt-32 bg-white/70 py-20 backdrop-blur-sm">

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

        <footer className="border-t border-slate-200 bg-white/50 py-8 text-center backdrop-blur-sm">

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

    </div>
  );
}