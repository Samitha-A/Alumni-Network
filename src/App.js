import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import AlumniDirectory from './AlumniDirectory';
//import EventsCalendar from './EventsCalendar';
import JobListings from './JobListings';
import Mentoring from './Mentoring';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/alumnidirectory" element={<AlumniDirectory />} />
        
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/mentoring" element={<Mentoring />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
