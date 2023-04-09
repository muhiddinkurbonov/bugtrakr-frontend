import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import auth from "../services/auth";

const PrivateRoutes = () => {
  const isAuthenticated = auth.isAuthenticated();

  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/api/auth/login"/>
  );
};

export default PrivateRoutes;