import React from "react";
import { Navigate } from "react-router-dom";
import auth from "../services/auth";

export const ProtectedRoute = ({ children }) => {

  if (!auth.isAuthenticated()) {
    // user is not authenticated
    return <Navigate to="/api/auth/login" />;
  }
  return children;
};