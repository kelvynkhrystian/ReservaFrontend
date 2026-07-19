import { Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <main>
      <h1>Login</h1>
    </main>
  );
}
