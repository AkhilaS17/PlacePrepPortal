import React, { useState } from "react";
import experiences from "../data/experiences";
import "./Alumni.css";

function Alumni() {
  // 🔹 State hooks must be declared here
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("All"); // for dropdown
  const [search, setSearch] = useState(""); // for search bar

  // 🔹 Get unique company list
  const uniqueCompanies = ["All", ...new Set(experiences.map((exp) => exp.company))];

  // 🔹 Expand / collapse function
  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  // 🔹 Apply filter + search logic
 const filteredExperiences = experiences.filter((exp) => {
  const matchesFilter =
    filter === "All" || exp.company.toLowerCase() === filter.toLowerCase();
  const matchesSearch = exp.company.toLowerCase().includes(search.toLowerCase());
  return matchesFilter && matchesSearch;
});


  return (
    <section className="alumni-section" id="alumni">
      <h2 className="alumni-title">✨ Alumni Experiences & Placement Tips ✨</h2>
      <p className="alumni-subtitle">
        Hear from our alumnae and learn how they prepared for top companies!
      </p>

      {/* 🔽 Filter + Search Section */}
      <div className="filter-search-bar">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-dropdown"
        >
          {uniqueCompanies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by company name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* 🔽 Alumni Cards */}
      <div className="alumni-grid">
        {filteredExperiences.map((exp) => (
          <div key={exp.id} className="alumni-card">
            <div className="card-header">
              <h3>{exp.name}</h3>
              <p className="company">{exp.company}</p>
              <p className="role">{exp.role}</p>
            </div>

            <div className="card-body">
              <p><strong>Assessment:</strong> {exp.assessment}</p>
              <p><strong>Resume Tip:</strong> {exp.resumeTips}</p>
              <p><strong>Interview:</strong> {exp.interview}</p>
              {expanded === exp.id && (
                <p className="description">{exp.description}</p>
              )}
            </div>

            <button
              className="read-more-btn"
              onClick={() => toggleExpand(exp.id)}
            >
              {expanded === exp.id ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Alumni;
