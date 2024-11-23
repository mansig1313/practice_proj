import React, { useState } from "react";
import "./register.css"; // Assuming your CSS is in the same folder

function TutorRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    qualification: "",
    certifications: "",
    experience: "",
    subjects: "",
    languages: "",
    availability: "",
    fee: "",
    profilePicture: null,
    bio: "",
    resume: null,
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    setError(""); // Clear errors on new input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    console.log("Form Data Submitted:", formData);
    alert("Registration successful!");
    // Submit formData to backend via API
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Tutor Registration Form</h2>

      {/* Error Message */}
      {error && <div className="error">{error}</div>}

      {/* Personal Information */}
      <div className="container">
        <input
          type="text"
          name="fullName"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label">Full Name</label>
      </div>
      <div className="container">
        <input
          type="email"
          name="email"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label">Email</label>
      </div>
      <div className="container">
        <input
          type="tel"
          name="phone"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label">Phone Number</label>
      </div>
      <div className="container">
        <input
          type="date"
          name="dob"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label"></label>
      </div>
      <div className="container">
        <select
          name="gender"
          className="input"
          required
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled hidden>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label className="label"></label>
      </div>

      {/* Educational and Professional Details */}
      <div className="container">
        <input
          type="text"
          name="qualification"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label">Highest Qualification</label>
      </div>
      <div className="container">
        <input
          type="text"
          name="certifications"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label">Certifications</label>
      </div>
      <div className="container">
        <input
          type="number"
          name="experience"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label">Years of Experience</label>
      </div>

      {/* Additional Options */}
      <div className="container">
        <input
          type="text"
          name="subjects"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label">Subjects you can teach</label>
      </div>
      <div className="container">
        <input
          type="text"
          name="languages"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label">Languages spoken</label>
      </div>
      <div className="container">
        <input
          type="text"
          name="availability"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label">Availability (Days/Hours)</label>
      </div>
      

      {/* File Upload */}
      <div className="container">
        <input
          type="file"
          name="profilePicture"
          className="input"
          onChange={handleChange}
        />
        <label className="label">Upload Profile Picture</label>
      </div>
      <div className="container">
        <input
          type="file"
          name="resume"
          className="input"
          onChange={handleChange}
        />
        <label className="label">Upload Resume</label>
      </div>

      {/* Login Credentials */}
      <div className="container">
        <input
          type="password"
          name="password"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label">Password</label>
      </div>
      <div className="container">
        <input
          type="password"
          name="confirmPassword"
          className="input"
          required
          onChange={handleChange}
        />
        <label className="label">Confirm Password</label>
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default TutorRegistrationForm;
