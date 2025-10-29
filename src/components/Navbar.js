import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Notifications from "./Notifications";
import "./Navbar.css";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* 🔹 Logo wrapped in Link to Login */}
        <Link to="/login" className="logo-link">
          <img src="/gnits.jpeg" alt="College Logo" className="logo" />
        </Link>
        <h2 className="title">Placement Portal</h2>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/alumni" className="nav-link">Alumni</NavLink></li>
        <li><NavLink to="/references" className="nav-link">Resources</NavLink></li>
      </ul>

      <div className="nav-right">
        <button className="notify-btn" onClick={() => setShowNotifications(!showNotifications)}>
          🔔
        </button>
        {showNotifications && (
          <div className="notification-wrapper">
            <Notifications />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
