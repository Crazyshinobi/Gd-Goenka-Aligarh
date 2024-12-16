import React from "react";
import "./App.css";
import "animate.css";
import { Routes, Route } from "react-router-dom";
import { AdminLogin } from "./admin/pages/auth/AdminLogin";
import { ForgotPassword } from "./admin/pages/auth/ForgotPassword";
import { Dashboard } from "./admin/Dashboard";
import PrivateRoute from "./admin/components/PrivateRoute"; // Move this import to the top

function App() {
  return (
    <Routes>
      {/* AdminRoutes */}
      <Route path={"/admin"} element={<AdminLogin />} />
      <Route path={"/admin/forgot-password"} element={<ForgotPassword />} />
      
      {/* Admin Protected Routes */}
      <Route
        path={"/admin/dashboard"}
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
