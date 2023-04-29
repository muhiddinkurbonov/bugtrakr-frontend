import React from 'react'

export const RegisterPage = ({
  userData,
  handleChange,
  handleSubmit
}) => {
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="login-register">
        <h1>Register</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
        <div className="register-login-now">
          <p>Already have an account? </p>
          <a href="http://localhost:3000/api/auth/login">Login Now</a>
        </div>
      </form>
    </div>
  );
};
