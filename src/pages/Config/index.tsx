import { useState } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import SystemSettings from "../../components/config/SystemSettings";
import AccountSettings from "../../components/config/AccountSettings";
import RoomSettings from "../../components/config/RoomSettings";

export default function Config() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tab, setTab] = useState<"system" | "account" | "rooms">("system");

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="min-h-screen bg-slate-100 lg:ml-[300px]">
        <div className="space-y-6 p-5 lg:p-8">
          <Header onOpenMenu={() => setSidebarOpen(true)} />

          <div className="rounded-3xl bg-white p-4 shadow-sm">
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setTab("system")}
                className={`rounded-2xl py-3 font-semibold transition ${
                  tab === "system"
                    ? "bg-orange-500 text-white"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                Sistema
              </button>

              <button
                onClick={() => setTab("account")}
                className={`rounded-2xl py-3 font-semibold transition ${
                  tab === "account"
                    ? "bg-orange-500 text-white"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                Conta
              </button>

              <button
                onClick={() => setTab("rooms")}
                className={`rounded-2xl py-3 font-semibold transition ${
                  tab === "rooms"
                    ? "bg-orange-500 text-white"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                Salas
              </button>
            </div>
          </div>

          {tab === "system" && <SystemSettings />}
          {tab === "account" && <AccountSettings />}
          {tab === "rooms" && <RoomSettings />}
        </div>
      </main>
    </>
  );
}
