import React from "react";
import drivesImage from "../assets/drives.jpg";
import "./Home.css";
import { drives } from "../data/drives"; // import drives array

function Home() {
  // The first drive is considered the next upcoming drive
  const nextDrive = drives[0];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className="hero-section"
        id="home"
        style={{ backgroundImage: `url(${drivesImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 class="animated-text">Next Drive: {nextDrive.company}</h1>
            <p>Date: {nextDrive.date}</p>
            <button
              className="register-btn"
              onClick={() => window.open(nextDrive.url, "_blank")}
            >
              View Opportunity
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Drives Section */}
      <section className="upcoming-drives">
        <h2>Upcoming Drives</h2>
        <div className="drive-cards">
          {drives.map((drive, index) => (
            <div className="card" key={index}>
              <h3>{drive.company}</h3>
              <p>Date: {drive.date}</p>
              <p>Eligibility: {drive.eligibility}</p>
              <button onClick={() => window.open(drive.url, "_blank")}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
