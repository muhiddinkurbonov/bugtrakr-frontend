const { Link } = require("react-router-dom");
const PublicNavbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="link">
          <h2>BugTrakr</h2>
        </Link>
      </div>

      <div className="right">
        <Link to="/api/auth/login" className="link">
          Log in
        </Link>
      </div>
    </nav>
  );
};
export default PublicNavbar;
