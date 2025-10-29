import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
        </div>

        <div className="footer-section">
          <p><strong>Contact:</strong> <a href="tel:+919876543210">+91-9876543210</a></p>
        </div>

        <div className="footer-section">
          <p><strong>Email:</strong> <a href="mailto:placement@college.edu">placement@college.edu</a></p>
        </div>

        <div className="footer-section">
          <p><strong>Address:</strong> GNITS,Shaikpet,Hyderabad,Telangana</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
