import type { Room } from "../../services/rooms";
import type { Reservation } from "../../services/reservations";

import RoomSchedule from "./RoomSchedule";

interface RoomCardProps {
  room: Room;
  reservations: Reservation[];
  view: "today" | "week";
}

export default function RoomCard({ room, reservations, view }: RoomCardProps) {
  const roomReservations = reservations.filter(
    (reservation) => reservation.roomId === room.id,
  );

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">{room.name}</h2>

          <p className="text-sm text-slate-500">{room.capacity} pessoas</p>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          Disponível
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-500">
        Reservas: {roomReservations.length}
      </p>

      <RoomSchedule roomId={room.id} reservations={reservations} view={view} />
    </div>
  );
}
