import { useEffect, useState } from "react";
import {
    FiBook,
    FiBriefcase,
    FiCalendar,
    FiFileText,
    FiFolder,
    FiUser,
    FiTrendingUp,
    FiClock,
    FiCheckCircle,
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

            <div className="mt-10 grid gap-8 lg:grid-cols-2">

                <div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur">

                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-800">

                        <FiTrendingUp />

                        Productivity Overview

                    </h2>

                    <div className="space-y-6">

                        <div>

                            <div className="mb-2 flex justify-between text-sm">

                                <span>Assignments</span>

                                <span>{stats.assignments}</span>

                            </div>

                            <div className="h-3 rounded-full bg-slate-200">

                                <div
                                    className="h-3 rounded-full bg-indigo-600"
                                    style={{
                                        width: `${Math.min(stats.assignments * 10, 100)}%`,
                                    }}
                                />

                            </div>

                        </div>

                        <div>

                            <div className="mb-2 flex justify-between text-sm">

                                <span>Notes</span>

                                <span>{stats.notes}</span>

                            </div>

                            <div className="h-3 rounded-full bg-slate-200">

                                <div
                                    className="h-3 rounded-full bg-violet-500"
                                    style={{
                                        width: `${Math.min(stats.notes * 10, 100)}%`,
                                    }}
                                />

                            </div>

                        </div>

                        <div>

                            <div className="mb-2 flex justify-between text-sm">

                                <span>Resources</span>

                                <span>{stats.resources}</span>

                            </div>

                            <div className="h-3 rounded-full bg-slate-200">

                                <div
                                    className="h-3 rounded-full bg-pink-500"
                                    style={{
                                        width: `${Math.min(stats.resources * 10, 100)}%`,
                                    }}
                                />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur">

                    <h2 className="mb-6 text-2xl font-bold text-slate-800">

                        Quick Summary

                    </h2>

                    <div className="space-y-5">

                        <div className="flex items-center gap-4 rounded-2xl bg-indigo-50 p-4">

                            <FiClock
                                className="text-indigo-600"
                                size={24}
                            />

                            <div>

                                <p className="font-semibold">

                                    Upcoming Deadlines

                                </p>

                                <p className="text-sm text-slate-500">

                                    {stats.deadlines} deadline(s)

                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-4 rounded-2xl bg-green-50 p-4">

                            <FiCheckCircle
                                className="text-green-600"
                                size={24}
                            />

                            <div>

                                <p className="font-semibold">

                                    Internship Applications

                                </p>

                                <p className="text-sm text-slate-500">

                                    {stats.internships} application(s)

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}