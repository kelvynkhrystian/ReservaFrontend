import TimeSlot from "./TimeSlot";

interface RoomModalProps {
  open: boolean;
  roomName: string;
  onClose: () => void;
}

export default function RoomModal({ open, roomName, onClose }: RoomModalProps) {
  if (!open) return null;

  const hours = Array.from({ length: 10 }, (_, i) => i + 8);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{roomName}</h2>

            <p className="text-sm text-slate-500">
              Escolha um horário disponível
            </p>
          </div>

          <button onClick={onClose} className="cursor-pointer text-3xl">
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {hours.map((hour) => (
            <TimeSlot key={hour} hour={hour} occupied={false} />
          ))}
        </div>
      </div>
    </div>
  );
}
