import AppLayout from "../../components/layout/AppLayout";
import Header from "../../components/dashboard/Header";
import StatCard from "../../components/dashboard/StatCard";

export default function DashboardPage() {

    return (

        <AppLayout>

            <Header />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                <StatCard title="Assignments" value={0} />

                <StatCard title="Internships" value={0} />

                <StatCard title="Deadlines" value={0} />

                <StatCard title="Notes" value={0} />

                <StatCard title="Resources" value={0} />

                <StatCard title="Profile" value="Manage" />

            </div>

        </AppLayout>

    );

}