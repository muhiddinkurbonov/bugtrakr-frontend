const { Link, NavLink } = require("react-router-dom");
const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/dashboard" className="link">
          <h2>BugTrakr</h2>
        </Link>
        <NavLink
          to="/bugs"
          className="link"
          style={({ isActive }) => {
            return isActive ? { color: "orangered" } : {};
          }}
        >
          Bugs
        </NavLink>
      </div>

      <div className="right">
        <Link to="/api/auth/logout" className="link">
          Logout
        </Link>
        <p>Hello, {user.name}!</p>
      </div>
    </nav>
  );
};
export default Navbar;
