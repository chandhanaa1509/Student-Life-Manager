import type { ReactNode } from "react";
import Sidebar from "../dashboard/Sidebar";

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#FFF9F6]">

            {/* Background Blobs */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />

            <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />

            <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

            <div className="relative flex min-h-screen">

                <Sidebar />

                <main className="flex-1 overflow-y-auto">

                    <div className="mx-auto min-h-screen max-w-7xl p-10">

                        {children}

                    </div>

                </main>

            </div>

        </div>
    );
}