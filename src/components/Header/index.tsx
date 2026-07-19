import { Bell, Menu } from "lucide-react";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";

interface HeaderProps {
  onOpenMenu: () => void;
}

export default function Header({ onOpenMenu }: HeaderProps) {
  const { user } = useAuth();

  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function handleNotifications() {
    Swal.fire({
      icon: "info",
      title: "Em breve",
      text: "O sistema de notificações estará disponível em uma próxima atualização.",
      confirmButtonColor: "#f97316",
      confirmButtonText: "Entendi",
    });
  }

  return (
    <header className="rounded-3xl bg-white px-6 py-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Olá, {user?.name}
          </h1>

          <p className="mt-1 text-sm capitalize text-slate-500">{today}</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Notificações */}
          <button
            onClick={handleNotifications}
            className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl bg-slate-100 transition hover:bg-slate-200"
          >
            <Bell size={18} />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* Avatar Desktop */}
          <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-lg font-bold text-white shadow lg:flex">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          {/* Menu Mobile */}
          <button
            onClick={onOpenMenu}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-orange-500 text-white shadow transition hover:bg-orange-600 lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
