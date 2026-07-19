import { useState } from "react";

import Header from "../../components/Header";
import RoomTimeline from "../../components/RoomTimeline";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="min-h-screen bg-slate-100 lg:ml-[300px]">
        <div className="space-y-6 p-5 lg:p-8">
          <Header onOpenMenu={() => setSidebarOpen(true)} />

          {/* Filtros virão aqui */}

          <RoomTimeline />
        </div>
      </main>
    </>
  );
}
