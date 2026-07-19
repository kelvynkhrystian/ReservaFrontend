import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import Swal from "sweetalert2";
import { AxiosError } from "axios";
import { useAuth } from "../../../hooks/useAuth";
import { updateEmail, updatePassword } from "../../../services/user";

export default function AccountSettings() {
  const { user } = useAuth();

  const [newEmail, setNewEmail] = useState("");
  const [emailPassword, setEmailPassword] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleUpdateEmail() {
    if (!newEmail) {
      return Swal.fire({
        icon: "warning",
        title: "Informe o novo email.",
        confirmButtonColor: "#f97316",
      });
    }

    try {
      await updateEmail({
        newEmail,
        password: emailPassword,
      });

      Swal.fire({
        icon: "success",
        title: "Email atualizado!",
        confirmButtonColor: "#f97316",
      });

      setNewEmail("");
      setEmailPassword("");
    } catch (error: unknown) {
      const err = error as AxiosError<{ error: string }>;

      Swal.fire({
        icon: "error",
        title: "Erro",
        text: err.response?.data?.error ?? "Não foi possível atualizar.",
        confirmButtonColor: "#f97316",
      });
    }
  }

  async function handleUpdatePassword() {
    if (newPassword !== confirmPassword) {
      return Swal.fire({
        icon: "warning",
        title: "As senhas não coincidem.",
        confirmButtonColor: "#f97316",
      });
    }

    try {
      await updatePassword({
        currentPassword,
        newPassword,
      });

      Swal.fire({
        icon: "success",
        title: "Senha atualizada!",
        confirmButtonColor: "#f97316",
      });

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: unknown) {
      const err = error as AxiosError<{ error: string }>;

      Swal.fire({
        icon: "error",
        title: "Erro",
        text: err.response?.data?.error ?? "Não foi possível atualizar.",
        confirmButtonColor: "#f97316",
      });
    }
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">Credenciais</h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* EMAIL */}

        <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
          <h3 className="mb-6 text-xl font-bold text-orange-500">
            Alterar Email
          </h3>

          <div className="space-y-5">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                <Mail size={16} />
                Email atual
              </label>

              <input
                disabled
                value={user?.email ?? ""}
                className="w-full rounded-xl border border-slate-200 bg-slate-100 p-3 text-slate-500"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                <Mail size={16} />
                Novo email
              </label>

              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="novo@email.com"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                <Lock size={16} />
                Senha atual
              </label>

              <input
                type="password"
                value={emailPassword}
                onChange={(e) => setEmailPassword(e.target.value)}
                placeholder="********"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
              />
            </div>

            <button
              onClick={handleUpdateEmail}
              className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Atualizar Email
            </button>
          </div>
        </div>

        {/* SENHA */}

        <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
          <h3 className="mb-6 text-xl font-bold text-orange-500">
            Alterar Senha
          </h3>

          <div className="space-y-5">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                <Lock size={16} />
                Senha atual
              </label>

              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="********"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                <Lock size={16} />
                Nova senha
              </label>

              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="********"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                <Lock size={16} />
                Confirmar nova senha
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="********"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
              />
            </div>

            <button
              onClick={handleUpdatePassword}
              className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Atualizar Senha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
