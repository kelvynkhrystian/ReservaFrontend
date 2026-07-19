import { House, LogOut, Settings, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { useAuth } from "../../hooks/useAuth";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const navigate = useNavigate();

  const { user, signOut } = useAuth();

  function handleConfig() {
    if (user?.role !== "admin") {
      Swal.fire({
        icon: "warning",
        title: "Acesso negado",
        text: "Somente administradores podem acessar as configurações.",
        confirmButtonColor: "#f97316",
      });

      return;
    }

    navigate("/config");
    onClose();
  }

  function handleLogout() {
    signOut();
    navigate("/login");
  }

  return (
    <>
      {/* Overlay Mobile */}

      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          z-50

          right-0
          top-0
          h-screen
          w-72

          transform
          transition-transform
          duration-300

          ${open ? "translate-x-0" : "translate-x-full"}

          lg:left-5
          lg:right-auto
          lg:top-5
          lg:bottom-5
          lg:h-auto
          lg:w-64
          lg:translate-x-0
        `}
      >
        <div className="flex h-full flex-col rounded-none bg-gradient-to-b from-orange-500 to-orange-600 p-6 text-white shadow-2xl lg:rounded-3xl">
          {/* Cabeçalho */}

          <div className="relative px-6 pt-1 pb-5">
            <button
              onClick={onClose}
              className="absolute right-5 top-5 lg:hidden"
            >
              <X />
            </button>

            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-bold text-orange-500 shadow-lg">
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              <h2 className="mt-4 text-lg font-semibold">{user?.name}</h2>

              <p className="text-sm text-orange-100">
                {user?.role === "admin" ? "Administrador" : "Usuário"}
              </p>
            </div>
          </div>

          <hr className="mx-6 border-orange-400/40" />

          {/* Menu */}

          {/* <nav className="flex-1 space-y-3">
            <button
              onClick={() => {
                navigate("/");
                onClose();
              }}
              className="flex w-full cursor-pointer items-center gap-4 rounded-2xl px-5 py-4 text-left transition hover:bg-white/10"
            >
              <House size={22} />
              Dashboard
            </button>

            <button
              onClick={handleConfig}
              className="flex w-full cursor-pointer items-center gap-4 rounded-2xl px-5 py-4 text-left transition hover:bg-white/10"
            >
              <Settings size={22} />
              Configurações
            </button>
          </nav> */}

          <nav className="flex-1 px-5 py-6">
            <div className="space-y-2">
              <button
                onClick={() => {
                  navigate("/");
                  onClose();
                }}
                className="flex w-full items-center gap-4 rounded-2xl px-4 py-1 text-left transition-all hover:bg-orange-600"
              >
                <House size={22} />
                <span className="font-medium">Dashboard</span>
              </button>

              <button
                onClick={handleConfig}
                className="flex w-full items-center gap-4 rounded-2xl px-4 py-1 text-left transition-all hover:bg-orange-600"
              >
                <Settings size={22} />
                <span className="font-medium">Configurações</span>
              </button>

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-4 rounded-2xl px-4 py-1 text-left transition-all hover:bg-red-500"
              >
                <LogOut size={22} />
                <span className="font-medium">Sair</span>
              </button>
            </div>
          </nav>

          {/* Rodapé */}

          <div className="px-1 pb-6">
            <div className="rounded-3xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 p-5 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-bold text-orange-500 shadow-lg">
                🚀
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white">
                Continue assim!
              </h3>

              <p className="mt-2 text-sm  text-orange-100">
                Grandes resultados começam com pequenas ações.
              </p>

              <div className="mt-5 rounded-2xl bg-white/20 px-3 py-2 text-xs text-orange-50">
                💡 Dica do dia
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6">
            {/* <button
              onClick={handleLogout}
              className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-orange-700 py-4 font-semibold transition hover:bg-orange-800"
            >
              <LogOut size={20} />
              Sair
            </button> */}
          </div>
        </div>
      </aside>
    </>
  );
}
