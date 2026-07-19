import { useState } from "react";

import Header from "../../components/Header";
import RoomTimeline from "../../components/RoomTimeline";
import Sidebar from "../../components/Sidebar";

import RegisterReservation from "../../components/dashboard/RegisterReservation";
import ReservationFilters from "../../components/dashboard/ReservationFilters";
import ReservationLegend from "../../components/dashboard/ReservationLegend";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="min-h-screen bg-slate-100 lg:ml-[300px]">
        <div className="space-y-6 p-5 lg:p-8">
          <Header onOpenMenu={() => setSidebarOpen(true)} />

          {/* PRIMEIRA LINHA */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <RegisterReservation />
            <ReservationFilters />
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <ReservationLegend />
          </div>

          {/* SALAS */}
          <RoomTimeline />
        </div>
      </main>
    </>
  );
}
