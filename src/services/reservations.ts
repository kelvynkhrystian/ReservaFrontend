import api from "./api";

export interface Reservation {
  id: string;
  userId: string;
  roomId: string;
  numberOfParticipants: number;
  startAt: string;
  endAt: string;
  createdAt: string;
  updatedAt: string;
}

export async function getReservations() {
  const { data } = await api.get<Reservation[]>("/reservations");

  return data;
}

export interface CreateReservationDTO {
  roomId: string;
  numberOfParticipants: number;
  startAt: string;
  endAt: string;
}

export async function createReservation(data: CreateReservationDTO) {
  const response = await api.post("/reservations", data);

  return response.data;
}
