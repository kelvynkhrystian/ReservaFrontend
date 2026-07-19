import { Lock, Mail, User } from "lucide-react";

export default function AccountSettings() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">Minha Conta</h2>

      <div className="space-y-5">
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
            <User size={16} />
            Nome
          </label>

          <input
            placeholder="Seu nome"
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
            <Mail size={16} />
            Email
          </label>

          <input
            type="email"
            placeholder="email@email.com"
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
            placeholder="********"
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
          />
        </div>

        <button className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
          Salvar alterações
        </button>
      </div>
    </div>
  );
}
