import { useRooms } from "../../hooks/useRooms";

import RoomCard from "./RoomCard";

export default function RoomTimeline() {
  const { rooms, reservations, loading } = useRooms();

  if (loading) {
    return <div className="rounded-3xl bg-white p-8">Carregando salas...</div>;
  }

  return (
    <div className="space-y-5">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} reservations={reservations} />
      ))}
    </div>
  );
}
