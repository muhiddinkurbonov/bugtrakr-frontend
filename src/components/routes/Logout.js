import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../services/auth";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.logout();
    navigate("/api/auth/login");
  }, [navigate]);

  return null;
}

