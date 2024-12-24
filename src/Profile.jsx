import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Priya',
    lastName: 'Amutharajan',
    email: 'priya@gmail.com',
    phoneNumber: '9876543210',
    dateOfBirth: '17 nov, 1996',
    batch: '2000',
    bio: 'Passionate about connecting businesses with the goodness of nature! I\'m on a mission to make organic food, medicine, fruits, and FMCG products easily accessible to B2B partners. A health and sustainability devotee. My love for nature is now blending nicely with business. Feel free to connect. Let\'s grow together!',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="account-information">
      <h2>Profile</h2>
      <div className="profile-picture">
        {/*<img src="bg.jpg" alt="Profile" />*/}
        <button className="camera-icon">📷</button>
      </div>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name <span className="edit-icon">✎ Edit</span></label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name <span className="edit-icon">✎ Edit</span></label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} readOnly />
            <span className="verified">✅ Verified</span>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} readOnly />
            <span className="verified">✅ Verified</span>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="text" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="batch">Batch</label>
            <select id="batch" name="batch" value={formData.batch} onChange={handleChange}>
              <option value="2000">2000</option>
              {/* Add more country options here */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio <span className="edit-icon">✎ Edit</span></label>
          <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows="4"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Profile;