import { useRooms } from "../../hooks/useRooms";
import RoomCard from "./RoomCard";

interface RoomTimelineProps {
  view: "today" | "week";
}

export default function RoomTimeline({ view }: RoomTimelineProps) {
  const { rooms, reservations, loading } = useRooms();

  if (loading) {
    return <div className="rounded-3xl bg-white p-8">Carregando salas...</div>;
  }

  return (
    <div className="space-y-5">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
          reservations={reservations}
          view={view}
        />
      ))}
    </div>
  );
}
