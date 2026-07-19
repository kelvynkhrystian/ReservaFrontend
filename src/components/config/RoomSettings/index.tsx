import { Plus, Trash2, Users } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import { useRooms } from "../../../hooks/useRooms";
import { createRoom, deleteRoom } from "../../../services/rooms";

export default function RoomSettings() {
  const { rooms, reloadRooms } = useRooms();

  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");

  async function handleCreate() {
    if (!name.trim()) {
      return Swal.fire({
        icon: "warning",
        title: "Informe o nome da sala",
        confirmButtonColor: "#f97316",
      });
    }

    try {
      await createRoom({
        name,
        capacity: Number(capacity),
        description: name,
      });

      setName("");
      setCapacity("");

      await reloadRooms();

      Swal.fire({
        icon: "success",
        title: "Sala criada com sucesso!",
        confirmButtonColor: "#f97316",
      });
    } catch (error: unknown) {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.error
        : "Não foi possível criar.";

      Swal.fire({
        icon: "error",
        title: "Erro",
        text: message,
        confirmButtonColor: "#f97316",
      });
    }
  }

  async function handleDelete(id: string) {
    const result = await Swal.fire({
      icon: "warning",
      title: "Excluir sala?",
      text: "Essa ação não poderá ser desfeita.",
      showCancelButton: true,
      confirmButtonText: "Excluir",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#ef4444",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteRoom(id);

      await reloadRooms();

      Swal.fire({
        icon: "success",
        title: "Sala removida!",
        confirmButtonColor: "#f97316",
      });
    } catch (error: unknown) {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.error
        : "Não foi possível excluir.";

      Swal.fire({
        icon: "error",
        title: "Erro",
        text: message,
        confirmButtonColor: "#f97316",
      });
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-bold">Nova Sala</h2>

        <div className="space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da sala"
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
          />

          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="Capacidade"
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
          />

          <button
            onClick={handleCreate}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600"
          >
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

              <button
                onClick={() => handleDelete(room.id)}
                className="rounded-xl bg-red-50 p-3 text-red-500 transition hover:bg-red-100"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
