import React, { useState, useEffect } from "react";
import getUser from "../../services/user";
import { useNavigate } from "react-router-dom";
import auth from '../../services/auth'



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
      console.log(userData)
      setUser(userData);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <div className="top-menu">
        {user ? <h2>Hello, {user.name}!</h2> : ""}
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="main-section">
        <div className="main-container">
          <h1>Welcome to your Dashboard</h1>
          <h2>Bug Status</h2>
          <div className="bug-status-chart">hello</div>
          <div className="bug-cards">
            <div className="bug-card"></div>
            <div className="bug-card"></div>
            <div className="bug-card"></div>
            <div className="bug-card"></div>
            <div className="bug-card"></div>
            <div className="bug-card"></div>
            <div className="bug-card"></div>
            <div className="bug-card"></div>
          </div>
        </div>
        <div className="menu-sidebar">
          {user && (
            <div className="menu-container">
              <ul className="menu-list">
                <li className="menu-item">Dashboard</li>
                <li className="menu-item">View Bugs</li>
                <li className="menu-item">Create a new bug</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


















