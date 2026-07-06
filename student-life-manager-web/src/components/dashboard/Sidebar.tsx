import {
    FiBook,
    FiBriefcase,
    FiCalendar,
    FiFileText,
    FiGrid,
    FiLogOut,
    FiUser,
    FiFolder
} from "react-icons/fi";

import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {

    const navigate = useNavigate();

    const location = useLocation();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    const menuItems = [

        {
            name: "Dashboard",
            icon: <FiGrid size={20} />,
            path: "/dashboard",
        },

        {
            name: "Assignments",
            icon: <FiBook size={20} />,
            path: "/assignments",
        },

        {
            name: "Notes",
            icon: <FiFileText size={20} />,
            path: "/notes",
        },

        {
            name: "Resources",
            icon: <FiFolder size={20} />,
            path: "/resources",
        },

        {
            name: "Deadlines",
            icon: <FiCalendar size={20} />,
            path: "/deadlines",
        },

        {
            name: "Internships",
            icon: <FiBriefcase size={20} />,
            path: "/internships",
        },

        {
            name: "Profile",
            icon: <FiUser size={20} />,
            path: "/profile",
        },

    ];

    return (

        <aside className="w-72 min-h-screen border-r border-slate-200 bg-white flex flex-col">

            <div className="px-8 py-8">

                <h1 className="text-3xl font-extrabold tracking-tight text-indigo-600">

                    CampusFlow

                </h1>

                <p className="mt-2 text-sm text-slate-500">

                    Organize. Learn. Achieve.

                </p>

            </div>

            <nav className="flex-1 px-5 space-y-2">

                {menuItems.map((item) => {

                    const active =
                        location.pathname === item.path;

                    return (

                        <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300

                            ${
                                active
                                    ? "bg-indigo-600 text-white shadow-md"
                                    : "text-slate-600 hover:bg-slate-100"
                            }`}
                        >

                            {item.icon}

                            <span className="font-medium">

                                {item.name}

                            </span>

                        </Link>

                    );

                })}

            </nav>

            <div className="p-5">

                <button

                    onClick={logout}

                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-rose-500 py-4 font-semibold text-white transition-all duration-300 hover:bg-rose-600"

                >

                    <FiLogOut />

                    Logout

                </button>

            </div>

        </aside>

    );

}