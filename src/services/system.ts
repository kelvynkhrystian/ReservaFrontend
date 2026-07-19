// services/system.ts

import { api } from "./api";

export async function getSystemConfig() {
  const { data } = await api.get("/system-config");

  return data;
}
