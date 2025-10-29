// src/pages/AdminDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  if (!user || user.role !== "admin") {
    return (
      <div className="unauthorized">
        <h2>Access Denied</h2>
        <p>You must be an admin to view this page.</p>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }

  return (
    <div className="dashboard admin-dashboard">
      <h2>Welcome, Admin {user.username}</h2>
      <p>Here you can manage alumni submissions and resources.</p>
      {/* You can add experience/resource moderation logic here */}
    </div>
  );
}

export default AdminDashboard;
