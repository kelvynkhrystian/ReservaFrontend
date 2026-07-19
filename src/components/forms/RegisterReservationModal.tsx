import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

import { createReservation } from "../../services/reservations";
import { useRooms } from "../../hooks/useRooms";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function RegisterReservationModal({ open, onClose }: Props) {
  const { rooms } = useRooms();

  const [roomId, setRoomId] = useState("");
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("08:00");
  const [endHour, setEndHour] = useState("09:00");
  const [participants, setParticipants] = useState(1);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!roomId) {
      alert("Selecione uma sala.");
      return;
    }

    if (!date) {
      alert("Selecione uma data.");
      return;
    }

    if (endHour <= startHour) {
      alert("O horário final deve ser maior que o inicial.");
      return;
    }

    try {
      setLoading(true);

      const startAt = new Date(`${date}T${startHour}:00`).toISOString();
      const endAt = new Date(`${date}T${endHour}:00`).toISOString();

      const payload = {
        roomId,
        numberOfParticipants: participants,
        startAt,
        endAt,
      };

      console.log("===== ENVIANDO RESERVA =====");
      console.table(payload);

      console.log("===== FRONTEND =====");
      console.log("Data:", date);
      console.log("Hora início:", startHour);
      console.log("Hora fim:", endHour);
      console.log("Payload:", payload);

      await createReservation(payload);

      alert("Reserva cadastrada com sucesso!");

      onClose();

      window.location.reload();
    } catch (err) {
      console.error(err);

      if (axios.isAxiosError(err)) {
        alert(
          err.response?.data?.error ??
            err.response?.data?.message ??
            "Erro ao cadastrar reserva.",
        );

        console.log("Resposta:", err.response?.data);
      } else {
        alert("Erro inesperado.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-xl"
      >
        <div className="flex w-full items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600">
          <h2 className="text-center text-2xl font-bold">Registrar Reserva</h2>

          <button
            type="button"
            onClick={onClose}
            className="flex w-full items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
          >
            <X size={22} />
          </button>
        </div>
        <div className="space-y-5">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium">Sala</label>

              <select
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="w-full rounded-xl border p-3"
              >
                <option value="">Selecione...</option>

                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Nº Pessoas
              </label>

              <input
                type="number"
                min={1}
                value={participants}
                onChange={(e) => setParticipants(Number(e.target.value))}
                className="w-full rounded-xl border p-3"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Data</label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Hora início
              </label>

              <input
                type="time"
                value={startHour}
                onChange={(e) => setStartHour(e.target.value)}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Hora fim</label>

              <input
                type="time"
                value={endHour}
                onChange={(e) => setEndHour(e.target.value)}
                className="w-full rounded-xl border p-3"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border py-3 font-medium"
          >
            Cancelar
          </button>

          <button
            type="submit"
            disabled={loading}
            className="flex-1 rounded-xl bg-orange-500 py-3 font-medium text-white hover:bg-orange-600 disabled:opacity-60"
          >
            {loading ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </form>
    </div>
  );
}
