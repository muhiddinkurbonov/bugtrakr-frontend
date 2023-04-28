import React, { useState, useEffect } from "react";
import getUser from "../../services/user";
import { useNavigate } from "react-router-dom";
import auth from "../../services/auth";
import { Navbar } from "../pages/Navbar";
import { BugCard } from "../pages/BugCard";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/api/auth/login");
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      console.log(userData);
      setUser(userData);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? <Navbar user={user} handleLogout={handleLogout} /> : ""}
      <div className="main-section">
        <div className="main-container">
          <h1>Welcome to your Dashboard</h1>
          <h2>Bug Status</h2>
          <div className="bug-status-chart">hello</div>
          <div className="bug-cards">
            <BugCard />
            <BugCard />
            <BugCard />
            <BugCard />
            <BugCard />
            <BugCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
