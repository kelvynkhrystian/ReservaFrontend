import { CalendarDays } from "lucide-react";

interface ReservationFiltersProps {
  view: "today" | "week";
  onChange: (view: "today" | "week") => void;
}

export default function ReservationFilters({
  view,
  onChange,
}: ReservationFiltersProps) {
  return (
    <div className="flex w-full items-center gap-2 sm:w-auto">
      <button
        type="button"
        onClick={() => onChange("today")}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition sm:flex-none ${
          view === "today"
            ? "bg-orange-500 text-white"
            : "bg-white text-slate-700 shadow-sm hover:bg-slate-100"
        }`}
      >
        <CalendarDays size={18} />
        Hoje
      </button>

      <button
        type="button"
        onClick={() => onChange("week")}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition sm:flex-none ${
          view === "week"
            ? "bg-orange-500 text-white"
            : "bg-white text-slate-700 shadow-sm hover:bg-slate-100"
        }`}
      >
        <CalendarDays size={18} />
        Semana
      </button>
    </div>
  );
}
