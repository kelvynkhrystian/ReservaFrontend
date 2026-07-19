import { useEffect, useState } from "react";

import { getRooms } from "../services/rooms";
import { getReservations } from "../services/reservations";

import type { Room } from "../services/rooms";
import type { Reservation } from "../services/reservations";

export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const [roomsData, reservationsData] = await Promise.all([
        getRooms(),
        getReservations(),
      ]);

      setRooms(roomsData);
      setReservations(reservationsData);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return {
    rooms,
    reservations,
    loading,
  };
}
