import { Clock3, Image, Type } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { getSystemConfig, updateSystemConfig } from "../../../services/system";

export default function SystemSettings() {
  const [loading, setLoading] = useState(true);

  const [systemName, setSystemName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [reservationInterval, setReservationInterval] = useState(10);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const config = await getSystemConfig();

        setSystemName(config.systemName);
        setSlogan(config.slogan);
        setReservationInterval(config.reservationInterval);
        setLogo(config.logo);
      } catch {
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: "Não foi possível carregar as configurações.",
        });
      } finally {
        setLoading(false);
      }
    };

    void fetchConfig();
  }, []);

  async function handleSave() {
    try {
      await updateSystemConfig({
        systemName,
        slogan,
        reservationInterval,
        logo,
      });

      Swal.fire({
        icon: "success",
        title: "Sucesso",
        text: "Configurações atualizadas.",
        confirmButtonColor: "#f97316",
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Não foi possível salvar.",
      });
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-sm">Carregando...</div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm space-y-5">
      <h2 className="text-xl font-bold">Sistema</h2>

      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
          <Type size={16} />
          Nome do sistema
        </label>

        <input
          value={systemName}
          onChange={(e) => setSystemName(e.target.value)}
          className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
          <Type size={16} />
          Slogan
        </label>

        <input
          value={slogan}
          onChange={(e) => setSlogan(e.target.value)}
          className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
          <Clock3 size={16} />
          Tempo entre reservas
        </label>

        <input
          type="number"
          value={reservationInterval}
          onChange={(e) => setReservationInterval(Number(e.target.value))}
          className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
          <Image size={16} />
          URL da Logo
        </label>

        <input
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
        />
      </div>

      <button
        onClick={handleSave}
        className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
      >
        Salvar alterações
      </button>
    </div>
  );
}
