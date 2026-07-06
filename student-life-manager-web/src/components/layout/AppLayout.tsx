import type { ReactNode } from "react";
import Sidebar from "../dashboard/Sidebar";

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({
    children,
}: AppLayoutProps) {

    return (

        <div className="min-h-screen flex bg-slate-100">

            <Sidebar />

            <main className="flex-1 p-10 overflow-y-auto">

                {children}

            </main>

        </div>

    );

}