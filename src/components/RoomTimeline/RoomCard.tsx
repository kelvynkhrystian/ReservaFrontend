import { useState } from "react";

import type { Room } from "../../services/rooms";
import type { Reservation } from "../../services/reservations";

import RoomModal from "./RoomModal";

interface RoomCardProps {
  room: Room;
  reservations: Reservation[];
}

export default function RoomCard({ room, reservations }: RoomCardProps) {
  const [open, setOpen] = useState(false);

  const roomReservations = reservations.filter(
    (reservation) => reservation.roomId === room.id,
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full cursor-pointer rounded-3xl bg-white p-6 text-left shadow-sm transition hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">{room.name}</h2>

            <p className="text-sm text-slate-500">{room.capacity} pessoas</p>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            Disponível
          </span>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Reservas: {roomReservations.length}
        </p>
      </button>

      <RoomModal
        open={open}
        roomName={room.name}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
