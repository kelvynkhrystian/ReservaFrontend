import api from "./api";

export interface Room {
  id: string;
  name: string;
  capacity: number;
  description: string | null;
  createdAt: string;
}

export async function getRooms() {
  const { data } = await api.get<Room[]>("/rooms");
  return data;
}

export async function createRoom(data: {
  name: string;
  description: string;
  capacity: number;
}) {
  const response = await api.post("/rooms", data);
  return response.data;
}

export async function deleteRoom(id: string) {
  const response = await api.delete(`/rooms/${id}`);
  return response.data;
}
