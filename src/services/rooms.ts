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
