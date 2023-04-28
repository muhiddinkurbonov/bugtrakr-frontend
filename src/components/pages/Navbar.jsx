import React from "react";

export const Navbar = ({user, handleLogout}) => {
  return (
    <div className="navbar">
      <div className="left">
        <h1 id="logo">BugTrakr</h1>
        <img src="../" alt="" width={"100px"} />
        <p>hi</p>
      </div>
      <div className="right">
        <h2>Hello, {user.name}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
