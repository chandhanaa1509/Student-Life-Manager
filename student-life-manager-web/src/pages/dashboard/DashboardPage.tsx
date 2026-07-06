import { useEffect, useState } from "react";

import {
    FiBook,
    FiBriefcase,
    FiCalendar,
    FiFileText,
    FiFolder,
    FiUser,
} from "react-icons/fi";

import AppLayout from "../../components/layout/AppLayout";
import Header from "../../components/dashboard/Header";
import StatCard from "../../components/dashboard/StatCard";

import { getDashboard } from "../../api/dashboardApi";

export default function DashboardPage() {

    const [stats, setStats] = useState({

        assignments: 0,
        internships: 0,
        deadlines: 0,
        notes: 0,
        resources: 0,

    });

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const data = await getDashboard();

            setStats(data);

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <AppLayout>

            <Header />

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                <StatCard
                    title="Assignments"
                    value={stats.assignments}
                    icon={<FiBook size={30} />}
                    path="/assignments"
                />

                <StatCard
                    title="Internships"
                    value={stats.internships}
                    icon={<FiBriefcase size={30} />}
                    path="/internships"
                />

                <StatCard
                    title="Deadlines"
                    value={stats.deadlines}
                    icon={<FiCalendar size={30} />}
                    path="/deadlines"
                />

                <StatCard
                    title="Notes"
                    value={stats.notes}
                    icon={<FiFileText size={30} />}
                    path="/notes"
                />

                <StatCard
                    title="Resources"
                    value={stats.resources}
                    icon={<FiFolder size={30} />}
                    path="/resources"
                />

                <StatCard
                    title="Profile"
                    value="Manage"
                    icon={<FiUser size={30} />}
                    path="/profile"
                />

            </div>

        </AppLayout>

    );

}