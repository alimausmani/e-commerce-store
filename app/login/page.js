// pages/LoginPage.js
"use client"
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    // Add your login logic here
    // For simplicity, let's just show an error if the username and password are empty
    if (!username || !password) {
      setErrorMessage('Username and password are required.');
      return;
    }

    // Clear the error message
    setErrorMessage('');

    // Add your actual login logic (e.g., API call, authentication)
    // ...

    // For this example, let's log the username to the console
    console.log('Logged in as:', username);
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
