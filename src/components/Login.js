import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Make sure this file exists

function Login() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) return alert("Please enter your name");
    localStorage.setItem("user", JSON.stringify({ username, role }));
    navigate(role === "admin" ? "/admin-dashboard" : "/student-dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
