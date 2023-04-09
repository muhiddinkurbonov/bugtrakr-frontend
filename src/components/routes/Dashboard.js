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
      <h1>Welcome to your Dashboard</h1>
           <button onClick={handleLogout}>Logout</button>
      {user && (
        <div>
          <h3>User Details:</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;


















