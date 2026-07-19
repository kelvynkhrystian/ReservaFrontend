import type { Reservation } from "../../services/reservations";

interface Props {
  roomId: string;
  reservations: Reservation[];
  view: "today" | "week";
}

const HOURS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

const WEEK_DAYS = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);

  return {
    date,
    label: date.toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
    }),
  };
});

export default function RoomSchedule({ roomId, reservations, view }: Props) {
  const now = new Date();

  function getHourStatus(hour: string) {
    const [h] = hour.split(":").map(Number);

    const reservation = reservations.find((r) => {
      if (r.roomId !== roomId) return false;

      const start = new Date(r.startAt);

      console.log({
        room: roomId,
        reservationRoom: r.roomId,
        start: start.toString(),
        hour: start.getHours(),
        today: start.toDateString(),
      });

      return (
        start.toDateString() === now.toDateString() && start.getHours() === h
      );
    });

    if (!reservation) return "empty";

    const start = new Date(reservation.startAt);
    const end = new Date(reservation.endAt);

    if (now >= start && now <= end) {
      return "running";
    }

    if (now > end) {
      return "finished";
    }

    return "available";
  }

  function getDayStatus(day: Date) {
    const reservation = reservations.find((r) => {
      if (r.roomId !== roomId) return false;

      return new Date(r.startAt).toDateString() === day.toDateString();
    });

    if (!reservation) return "empty";

    const start = new Date(reservation.startAt);
    const end = new Date(reservation.endAt);

    if (now >= start && now <= end) return "running";

    if (now > end) return "finished";

    return "available";
  }

  const colors: Record<string, string> = {
    empty: "bg-slate-100 text-slate-400 border border-slate-200",

    available: "bg-green-100 text-green-700",

    running: "bg-orange-100 text-orange-700",

    finished: "bg-red-100 text-red-700",
  };

  const items =
    view === "today"
      ? HOURS.map((hour) => ({
          label: hour,
          status: getHourStatus(hour),
        }))
      : WEEK_DAYS.map((day) => ({
          label: day.label,
          status: getDayStatus(day.date),
        }));

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <div
          key={item.label}
          className={`rounded-lg px-3 py-2 text-xs font-medium ${colors[item.status]}`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}
