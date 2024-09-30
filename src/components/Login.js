// src/components/Login.js
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input type="text" className="form-control" placeholder="Username" />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
      />
      <button className="btn btn-primary mt-3">Login</button>
    </div>
  );
}

export default Login;
