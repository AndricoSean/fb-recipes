import React from "react";
import { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

function LoginForm({ existingUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await FirebaseAuthService.loginUser(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  }

  function handleLogout(e) {
    e.preventDefault();
    FirebaseAuthService.logoutUser();
  }

  async function handleSendResetPasswordEmail() {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    try {
      await FirebaseAuthService.sendPasswordResetEmail(email);
      alert("Password reset email sent");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="login-form-container">
      {existingUser ? (
        <div className="row">
          <h3>Welcome, {existingUser.email}</h3>
          <button
            type="button"
            className="primary-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <label className="input-label login-label">
            Email:
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-text"
            ></input>
          </label>
          <label className="input-label login-label">
            Password:
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-text"
            ></input>
          </label>
          <div className="button-box">
            <button className="primary-button">Login</button>
            <button
              type="button"
              className="primary-button"
              onClick={handleSendResetPasswordEmail}
            >
              Reset Password
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
