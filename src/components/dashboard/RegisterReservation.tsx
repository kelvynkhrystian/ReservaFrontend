import { CalendarPlus } from "lucide-react";

export default function RegisterReservation() {
  return (
    <button
      className="
        w-full
        sm:w-auto

        flex
        items-center
        justify-center

        gap-2

        rounded-xl

        bg-orange-500

        px-5
        py-3

        font-semibold
        text-white

        transition
        hover:bg-orange-600
      "
    >
      <CalendarPlus size={18} />
      Registrar Reserva
    </button>
  );
}
