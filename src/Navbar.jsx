import React from 'react';
import { Link } from 'react-router-dom';
//import { FaHome, FaFileAlt, FaGlobe, FaBook, FaCode, FaMicrophone, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/home"> Home</Link>
        </li>
        <li>
          <Link to="/alumnidirectory"> Alumni Directory</Link>
        </li>
        <li>
          <Link to="/job-listings"> Job Listings</Link>
        </li>
        <li>
          <Link to="/mentoring"> Mentoring <span className="new-badge">new</span></Link>
        </li>
        <li className="profile">
          <Link to="/profile"> Edit Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
