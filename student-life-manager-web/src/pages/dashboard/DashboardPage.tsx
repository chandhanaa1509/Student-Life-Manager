import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import StatCard from "../../components/dashboard/StatCard";

export default function DashboardPage() {

    return (

        <div className="flex min-h-screen bg-slate-100">

            <Sidebar />

            <main className="flex-1 p-10">

                <Header />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    <StatCard title="Assignments" value={0} />

                    <StatCard title="Internships" value={0} />

                    <StatCard title="Deadlines" value={0} />

                    <StatCard title="Notes" value={0} />

                    <StatCard title="Resources" value={0} />

                    <StatCard title="Profile" value="Manage" />

                </div>

            </main>

        </div>

    );

}