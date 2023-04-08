export const LoginPage = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
    </div>
    <button type="submit">Login</button>
  </form>
);
