import React from "react";
import "./References.css";

function References() {
  return (
    <section className="references-section">
      <h2>Resources & Tools for Placement Preparation</h2>
      <p className="intro-text">
        Explore trusted platforms and tools to help you prepare for technical rounds,
        build strong resumes, and enhance your problem-solving skills.
      </p>

      <div className="resources-container">
        {/* Coding Practice Platforms */}
        <div className="resource-card">
          <h3>💻 Coding Practice</h3>
          <ul>
            <li>
              <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>{" "}
              – For mastering DSA and coding interviews.
            </li>
            <li>
              <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">
                HackerRank
              </a>{" "}
              – Beginner-friendly coding and skill challenges.
            </li>
            <li>
              <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
                GeeksforGeeks
              </a>{" "}
              – Great for tutorials, company-specific interview questions.
            </li>
            <li>
              <a href="https://www.interviewbit.com/" target="_blank" rel="noopener noreferrer">
                InterviewBit
              </a>{" "}
              – Structured interview preparation roadmap.
            </li>
          </ul>
        </div>

        {/* Resume & Portfolio Tools */}
        <div className="resource-card">
          <h3>📄 Resume & Portfolio</h3>
          <ul>
            <li>
              <a href="https://www.canva.com/resumes/" target="_blank" rel="noopener noreferrer">
                Canva Resume Builder
              </a>{" "}
              – Easy resume templates for students.
            </li>
            <li>
              <a href="https://resumeworded.com/" target="_blank" rel="noopener noreferrer">
                ResumeWorded
              </a>{" "}
              – Check your resume score and improve keywords.
            </li>
            <li>
              <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">
                Notion
              </a>{" "}
              – Create a professional portfolio or project tracker.
            </li>
          </ul>
        </div>

        {/* Technical Learning */}
        <div className="resource-card">
          <h3>📘 Technical Learning</h3>
          <ul>
            <li>
              <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                freeCodeCamp
              </a>{" "}
              – Learn HTML, CSS, JS, React, and more for free.
            </li>
            <li>
              <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">
                Coursera
              </a>{" "}
              – Industry-recognized certifications from top universities.
            </li>
            <li>
              <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">
                Udemy
              </a>{" "}
              – Affordable tech and career development courses.
            </li>
          </ul>
        </div>

        {/* Mock Interviews */}
        <div className="resource-card">
          <h3>🗣️ Mock Interviews & Networking</h3>
          <ul>
            <li>
              <a href="https://www.pramp.com/" target="_blank" rel="noopener noreferrer">
                Pramp
              </a>{" "}
              – Practice mock interviews with peers for free.
            </li>
            <li>
              <a href="https://interviewing.io/" target="_blank" rel="noopener noreferrer">
                Interviewing.io
              </a>{" "}
              – Anonymous technical mock interviews with real engineers.
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{" "}
              – Build professional connections and explore opportunities.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default References;
