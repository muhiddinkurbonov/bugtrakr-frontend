import { Link } from 'react-router-dom'

export const LoginPage = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
}) => (
  <div className="container">
    <form onSubmit={handleSubmit} className="login-register">
      <h1>Login</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit">Login</button>
      <div className="register-login-now">
        <p>Need an account? </p>{" "}
        <Link to="/api/auth/register">Register Now</Link>
      </div>
    </form>
  </div>
);
