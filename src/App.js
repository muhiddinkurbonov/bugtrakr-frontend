import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Login } from "./components/routes/Login";
import { Logout } from "./components/routes/Logout";
import { Home } from "./components/routes/Home";
import { Bugs } from "./components/routes/Bugs";
import { NotFound } from "./components/pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Dashboard from "./components/routes/Dashboard";
import Register from "./components/routes/Register";
import getUser from "./services/user";
import { useNavigate } from "react-router-dom";
import auth from "./services/auth";
import Navbar from "./components/pages/Navbar";

export default function App() {
  const [user, setUser] = useState({});
  const isLoggedIn = auth.isAuthenticated();
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData);
    };
    if (isLoggedIn) fetchUser();
  }, [isLoggedIn]);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/api/auth/login");
  };

  return (
    <>
      {isLoggedIn? <Navbar user={user}/> : "" }
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/api/auth/login" element={<Login />} />
        <Route path="/api/auth/register" element={<Register />} />
        <Route path="/api/auth/logout" element={<Logout />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard user={user} handleLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bugs"
          element={
            <ProtectedRoute>
              <Bugs />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
