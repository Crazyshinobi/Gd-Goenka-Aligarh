import React from "react";
import "./App.css";
import "animate.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PrincipalMessage from "./pages/PrincipalMessage";
import ManagementPage from "./pages/ManagementPage";
import VisionAndMission from "./pages/VisionAndMission";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about/principal-Message"} element={<PrincipalMessage />} />
      <Route path={"/about/Management"} element={<ManagementPage />} />
      <Route
        path={"/about/vision-And-Mission"}
        element={<VisionAndMission />}
      />

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
