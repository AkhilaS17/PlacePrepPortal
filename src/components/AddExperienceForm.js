import React, { useState } from "react";
import "./AddExperienceForm.css";

function AddExperienceForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    assessment: "",
    score: "",
    interview: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Experience submitted:", formData);
    // You can push to localStorage or backend here
    onClose(); // Close the form after submission
  };

  return (
    <div className="experience-form-wrapper">
      <div className="experience-form">
        <h3>Add Placement Experience</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Enter name" onChange={handleChange} required />
          <input name="company" type="text" placeholder="Enter company" onChange={handleChange} required />
          <input name="role" type="text" placeholder="Enter role" onChange={handleChange} required />
          <input name="assessment" type="text" placeholder="Enter assessment" onChange={handleChange} />
          <input name="score" type="text" placeholder="Enter score/Tips" onChange={handleChange} />
          <input name="interview" type="text" placeholder="Enter interview" onChange={handleChange} />
          <textarea name="description" placeholder="Enter description" onChange={handleChange} required />
          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExperienceForm;
