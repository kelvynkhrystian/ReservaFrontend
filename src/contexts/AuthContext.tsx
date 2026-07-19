import { createContext, useMemo, useState, type ReactNode } from "react";

type UserRole = "admin" | "user";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextData {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  signIn: (token: string, user: User) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("@reserva:token"),
  );

  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("@reserva:user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  function signIn(token: string, user: User) {
    localStorage.setItem("@reserva:token", token);
    localStorage.setItem("@reserva:user", JSON.stringify(user));

    setToken(token);
    setUser(user);
  }

  function signOut() {
    localStorage.removeItem("@reserva:token");
    localStorage.removeItem("@reserva:user");

    setToken(null);
    setUser(null);
  }

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: !!token,
      signIn,
      signOut,
    }),
    [user, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
