import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

import { useAuth } from "../../hooks/useAuth";
import { login } from "../../services/auth";

import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.png";

export default function Login() {
  const navigate = useNavigate();

  const { isAuthenticated, saveSession } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    try {
      setLoading(true);

      const { token, user } = await login({
        email,
        password,
      });

      saveSession(token, user);

      navigate("/");
    } catch (error) {
      console.error(error);

      setError("Email ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="flex w-full max-w-6xl overflow-hidden rounded-[32px] shadow-2xl bg-white">
        {/* Splash */}
        <section className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 lg:flex flex-col items-center justify-center px-14">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white_0,transparent_60%)]" />

          <img src={logo2} alt="Reserve Já" className="w-36 drop-shadow-xl" />

          <h1 className="mt-8 text-5xl font-bold text-white">Reserve Já</h1>

          <p className="mt-4 max-w-sm text-center text-lg text-orange-100">
            Organize reservas de salas de forma simples, rápida e segura.
          </p>

          <button
            type="button"
            className="mt-14 flex cursor-pointer items-center gap-2 rounded-full bg-white px-12 py-4 text-lg font-semibold text-orange-600 transition hover:scale-105"
          >
            Reserve Já
            <ArrowRight size={20} />
          </button>
        </section>

        {/* Login */}
        <section className="flex flex-1 items-center justify-center bg-white p-6">
          <div className="w-full max-w-md">
            <img src={logo} alt="Reserve Já" className="mx-auto mb-8 w-35" />

            <h2 className="text-center text-4xl font-bold text-orange-500">
              Olá!
            </h2>

            <p className="mb-10 mt-2 text-center text-gray-500">
              Entre para acessar o sistema.
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);

                    if (error) {
                      setError("");
                    }
                  }}
                  className={`w-full rounded-full border py-4 pl-12 pr-4 outline-none transition ${
                    error
                      ? "border-red-500"
                      : "border-gray-300 focus:border-orange-500"
                  }`}
                />
              </div>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);

                    if (error) {
                      setError("");
                    }
                  }}
                  className={`w-full rounded-full border py-4 pl-12 pr-12 outline-none transition ${
                    error
                      ? "border-red-500"
                      : "border-gray-300 focus:border-orange-500"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((old) => !old)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {error && (
                <p className="mt-2 px-2 text-sm font-medium text-red-500">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full cursor-pointer rounded-full bg-orange-500 py-4 text-lg font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
