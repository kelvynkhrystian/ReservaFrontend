import { CalendarPlus } from "lucide-react";
import { useState } from "react";

import RegisterReservationModal from "../forms/RegisterReservationModal";

export default function RegisterReservation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-white"
      >
        <CalendarPlus size={18} />
        Registrar Reserva
      </button>

      <RegisterReservationModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
