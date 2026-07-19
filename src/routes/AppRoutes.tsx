import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/index";
import Dashboard from "../pages/Dashboard/index";
import Config from "../pages/Config/index";
import NotFound from "../pages/NotFound";

import { ProtectedRoute } from "./ProtectedRoute";
import { AdminRoute } from "./AdminRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />

        <Route element={<AdminRoute />}>
          <Route path="/config" element={<Config />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
