import api from "./api";

export interface SystemConfig {
  id: string;
  systemName: string;
  slogan: string;
  logo: string;
  reservationInterval: number;
  createdAt: string;
  updatedAt: string;
}

export async function getSystemConfig() {
  const { data } = await api.get<SystemConfig>("/config");

  return data;
}

export async function updateSystemConfig(config: {
  systemName: string;
  slogan: string;
  logo: string;
  reservationInterval: number;
}) {
  const { data } = await api.put("/config", config);

  return data;
}
