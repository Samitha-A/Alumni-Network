import React, { useState } from 'react';
import './AlumniDirectory.css';

const alumniData = [
  { id: 1, name: 'Vashist', studentId: '34520', batch: '2017', work: 'Cognizant', 
    dept: 'Dept. of Information Technology', 
    workExperience: 'Product Developer at Cognizant', location: 'Coimbatore' },
  { id: 2, name: 'Sarah', studentId: '34521', batch: '2018', work: 'Soliton', 
    dept: 'Dept. of Electronics and Communication Engineering', 
    workExperience: 'Product Developer at Soliton Networks', location: 'Bangalore' },
  { id: 3, name: 'Ananya', studentId: '34522', batch: '2018', work: 'Cognizant', 
    dept: 'Dept. of Electronics and Communication Engineering', 
    workExperience: 'Product Developer at Cognizant', location: 'Chennai'},
  { id: 4, name: 'Avyukth', studentId: '34523', batch: '2019', work: 'TCS', 
    dept: 'Dept. of Electronics and Communication Engineering', 
    workExperience: 'Intern', location: 'Coimbatore' },
  { id: 1, name: 'Athulya', studentId: '34520', batch: '2020', work: 'Soliton', 
    dept: 'Dept. of Electronics and Communication Engineering', 
    workExperience: 'Product Developer at Soliton Networks', location: 'Pune' },
  { id: 2, name: 'Sahaana', studentId: '34521', batch: '2021', work: 'Oracle', 
    dept: 'Dept. of Computer Science Engineering', 
    workExperience: 'Product Developer at Oracle', location: 'Bangalore' },
  { id: 3, name: 'Gopika', studentId: '34522', batch: '2022', work: 'Juspay', 
    dept: 'Dept. of Computer Science Engineering', 
    workExperience: 'Product Developer at Soliton Networks', location: 'Bangalore' },
  { id: 4, name: 'Riya', studentId: '34523', batch: '2022', work: 'Zoho', 
    dept: 'Dept. of Information Technology', 
    workExperience: 'Product Developer at Soliton Networks', location: 'Coimbatore' },
  // Add more alumni data as needed
];

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const filteredAlumni = alumniData.filter(alumni =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.studentId.includes(searchTerm) ||
    alumni.work.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="alumni-directory">
      <h1>ALUMNI DIRECTORY</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="filter-btn">Filter</button>
      </div>
      <div className="directory-content">
        <div className="alumni-list">
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Student ID</th>
                <th>Batch</th>
                <th>Work</th>
              </tr>
            </thead>
            <tbody>
              {filteredAlumni.map(alumni => (
                <tr key={alumni.id} onClick={() => setSelectedAlumni(alumni)}>
                  <td><div className="profile-pic"></div></td>
                  <td>{alumni.name}</td>
                  <td>{alumni.studentId}</td>
                  <td>{alumni.batch}</td>
                  <td>{alumni.work}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedAlumni && (
          <div className="alumni-details">
            <div className="profile-pic large"></div>
            <h2>{selectedAlumni.name}</h2>
            <p>{selectedAlumni.dept}</p>
            <p>Batch {selectedAlumni.batch}</p>
            <div className="social-links">
              <a href="#" className="social-icon facebook"></a>
              <a href="#" className="social-icon github"></a>
              <a href="#" className="social-icon linkedin"></a>
            </div>
            <h3>WORK EXPERIENCE</h3>
            <p>{selectedAlumni.workExperience}</p>
            <p>{selectedAlumni.location}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniDirectory;