import React from "react";
import auth from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user={name: "John Doe"} }) => {

   const navigate = useNavigate();

   const handleLogout = () => {
     auth.logout();
     navigate("/api/auth/login");
   };
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>This is your dashboard.</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;