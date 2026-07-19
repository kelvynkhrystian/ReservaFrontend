import { CalendarDays } from "lucide-react";
import { useState } from "react";

export default function ReservationFilters() {
  const [view, setView] = useState<"today" | "week">("today");

  return (
    <div className="flex w-full items-center gap-2 sm:w-auto">
      <button
        onClick={() => setView("today")}
        className={`flex-1
          sm:flex-none

          flex
          items-center
          justify-center
          gap-2

          rounded-xl

          px-5
          py-3

          font-semibold

          transition ${
            view === "today"
              ? "bg-orange-500 text-white"
              : "bg-white shadow-sm hover:bg-slate-100"
          }`}
      >
        <CalendarDays size={18} />
        Hoje
      </button>

      <button
        onClick={() => setView("week")}
        className={`flex-1
          sm:flex-none

          flex
          items-center
          justify-center
          gap-2

          rounded-xl

          px-5
          py-3

          font-semibold

          transition ${
            view === "week"
              ? "bg-orange-500 text-white"
              : "bg-white shadow-sm hover:bg-slate-100"
          }`}
      >
        Semana
      </button>
    </div>
  );
}
