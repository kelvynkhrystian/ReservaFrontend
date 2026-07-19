import api from "./api";

export async function updateEmail(data: {
  newEmail: string;
  password: string;
}) {
  const { data: response } = await api.put("/users/me/email", data);

  return response;
}

export async function updatePassword(data: {
  currentPassword: string;
  newPassword: string;
}) {
  const { data: response } = await api.put("/users/me/password", data);

  return response;
}