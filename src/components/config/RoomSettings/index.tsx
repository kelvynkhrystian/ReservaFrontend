import { Plus, Trash2, Users } from "lucide-react";

import { useRooms } from "../../../hooks/useRooms";

export default function RoomSettings() {
  const { rooms } = useRooms();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-bold">Nova Sala</h2>

        <div className="space-y-4">
          <input
            placeholder="Nome da sala"
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
          />

          <input
            type="number"
            placeholder="Capacidade"
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
          />

          <textarea
            rows={3}
            placeholder="Descrição"
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
          />

          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">
            <Plus size={18} />
            Criar sala
          </button>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-bold">Salas cadastradas</h2>

        <div className="space-y-3">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
            >
              <div>
                <p className="font-semibold">{room.name}</p>

                <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                  <Users size={15} />
                  {room.capacity} pessoas
                </p>
              </div>

              <button className="rounded-xl bg-red-50 p-3 text-red-500 transition hover:bg-red-100">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
