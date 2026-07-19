import { useCallback, useEffect, useState } from "react";

import { getRooms } from "../services/rooms";
import { getReservations } from "../services/reservations";

import type { Room } from "../services/rooms";
import type { Reservation } from "../services/reservations";

export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      setLoading(true);

      const [roomsData, reservationsData] = await Promise.all([
        getRooms(),
        getReservations(),
      ]);

      setRooms(roomsData);
      setReservations(reservationsData);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    rooms,
    reservations,
    loading,
    reloadRooms: load,
  };
}
