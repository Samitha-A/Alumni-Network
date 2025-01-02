import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "Priya",
    lastName: "Amutharajan",
    email: "priya@gmail.com",
    phoneNumber: "9876543210",
    dateOfBirth: "17 nov, 1996",
    batch: "2000",
    workExperience: [
      {
        company: "Nature Foods Ltd",
        role: "Business Development Manager",
        duration: "2020 - Present",
        description: "Leading B2B partnerships for organic food distribution",
        isEditing: false
      },
      {
        company: "Green Health Co",
        role: "Sales Executive",
        duration: "2018 - 2020",
        description: "Managed B2B sales for organic healthcare products",
        isEditing: false
      }
    ]
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWorkExperienceChange = (index, field, value) => {
    const updatedExperience = formData.workExperience.map((exp, i) => 
      i === index ? { ...exp, [field]: value } : exp
    );
    setFormData({ ...formData, workExperience: updatedExperience });
  };

  const toggleEditExperience = (index) => {
    const updatedExperience = formData.workExperience.map((exp, i) => 
      i === index ? { ...exp, isEditing: !exp.isEditing } : exp
    );
    setFormData({ ...formData, workExperience: updatedExperience });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      workExperience: [...formData.workExperience, {
        company: "",
        role: "",
        duration: "",
        description: "",
        isEditing: true
      }]
    });
  };

  const deleteExperience = (index) => {
    setFormData({
      ...formData,
      workExperience: formData.workExperience.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-container">
          <img src="/placeholder.jpg" alt="Profile" className="profile-image" />
          <button className="camera-button">📷</button>
        </div>
        <h1 className="profile-title">Profile</h1>
      </div>

      <div className="profile-content">
        <div className="form-section">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="text"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Batch</label>
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="work-experience">
          <div className="work-header">
            <label>Work Experience</label>
            <button onClick={addExperience} className="add-button">+ Add Experience</button>
          </div>
          {formData.workExperience.map((exp, index) => (
            <div key={index} className="experience-card">
              {exp.isEditing ? (
                <>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => handleWorkExperienceChange(index, 'company', e.target.value)}
                    placeholder="Company"
                    className="edit-input"
                  />
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) => handleWorkExperienceChange(index, 'role', e.target.value)}
                    placeholder="Role"
                    className="edit-input"
                  />
                  <input
                    type="text"
                    value={exp.duration}
                    onChange={(e) => handleWorkExperienceChange(index, 'duration', e.target.value)}
                    placeholder="Duration"
                    className="edit-input"
                  />
                  <textarea
                    value={exp.description}
                    onChange={(e) => handleWorkExperienceChange(index, 'description', e.target.value)}
                    placeholder="Description"
                    className="edit-input description"
                  />
                </>
              ) : (
                <>
                  <h3>{exp.company}</h3>
                  <p className="role">{exp.role}</p>
                  <p className="duration">{exp.duration}</p>
                  <p className="description">{exp.description}</p>
                </>
              )}
              <div className="action-buttons">
                <button onClick={() => toggleEditExperience(index)}>
                  {exp.isEditing ? '💾 Save' : '✎ Edit'}
                </button>
                <button onClick={() => deleteExperience(index)} className="delete-button">
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;