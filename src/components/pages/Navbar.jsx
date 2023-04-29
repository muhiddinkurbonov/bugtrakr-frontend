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
            return isActive ? { color: "gold" } : {};
          }}
        >
          Bugs
        </NavLink>
        <NavLink
          to="/add"
          className="link"
          style={({ isActive }) => {
            return isActive ? { color: "gold" } : {};
          }}
        >
          Add a bug
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
