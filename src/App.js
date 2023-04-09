import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/routes/Login";
import { Logout } from "./components/routes/Logout";
import { Home } from "./components/routes/Home";
import PrivateRoutes from "./components/PrivateRoutes";
import Dashboard from "./components/routes/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/auth/login" element={<Login />} />
          <Route path="/api/auth/logout" element={<Logout />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/dashboard" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
