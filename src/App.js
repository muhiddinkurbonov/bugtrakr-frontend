import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/routes/Login";
import { Logout } from "./components/routes/Logout";
import { Home } from "./components/routes/Home";
import {ProtectedRoute} from "./components/ProtectedRoute";
import Dashboard from "./components/routes/Dashboard";
import Register from "./components/routes/Register";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api/auth/login" element={<Login />} />
      <Route path="/api/auth/register" element={<Register />} />
      <Route path="/api/auth/logout" element={<Logout />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}


