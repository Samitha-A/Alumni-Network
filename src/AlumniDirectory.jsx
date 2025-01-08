import React, { useState, useEffect } from "react";
import "./AlumniDirectory.css";
import linkedin from './linkedin.svg';
import github from './github.svg';
import mail from './gmail.svg';

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [alumniData, setAlumniData] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch alumni data from backend using fetch
  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json(); // Parse JSON from the response
        console.log(data); // Log to verify the response
        setAlumniData(data);
        setFilteredAlumni(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError("Failed to load alumni data");
        setLoading(false); // Set loading to false if there's an error
        console.error("Error fetching alumni data:", error);
      }
    };

    fetchAlumni();
  }, []);

  // Filter alumni based on search term
  useEffect(() => {
    setFilteredAlumni(
      alumniData.filter((alumni) =>
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.studentId.includes(searchTerm) ||
        (alumni.work_experience &&
          alumni.work_experience.some((work) =>
            work.company.toLowerCase().includes(searchTerm.toLowerCase())
          ))
      )
    );
  }, [searchTerm, alumniData]);

  // Loading or error handling
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="alumni-directory">
      <h1>ALUMNI CONTACTS</h1>
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
              {filteredAlumni.length === 0 ? (
                <tr>
                  <td colSpan="5">No alumni found.</td>
                </tr>
              ) : (
                filteredAlumni.map((alumni) => (
                  <tr
                    key={alumni._id}
                    onClick={() => {
                      setSelectedAlumni(alumni);
                      console.log(alumni); // Log the selected alumni for debugging
                    }}
                  >
                    <td>
                      <div className="profile-pic"></div>
                    </td>
                    <td>{alumni.name}</td>
                    <td>{alumni.studentId}</td>
                    <td>{alumni.batch}</td>
                    <td>
                      {alumni.work_experience && alumni.work_experience.length > 0
                        ? alumni.work_experience[0].company
                        : "Not Available"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {selectedAlumni && (
          <div className="alumni-details">
            <div className="profile-pic large"></div>
            <h2>{selectedAlumni.name}</h2>
            <p>{selectedAlumni.department}</p>
            <p>Batch {selectedAlumni.batch}</p>
            <div className="social-links">
  {selectedAlumni.gitHub && (
    <a href={selectedAlumni.gitHub} target="_blank" rel="noopener noreferrer">
      <img src={github} 
        alt="GitHub"
        className="social-icon"
      />
    </a>
  )}
  {selectedAlumni.linkedin && (
    <a href={selectedAlumni.linkedin} target="_blank" rel="noopener noreferrer">
      <img src={linkedin} // Update this path to the correct location of the icon file
        alt="LinkedIn"
        className="social-icon"
      />
    </a>
  )}
  {selectedAlumni.mail && (
    <a href={`mailto:${selectedAlumni.mail}`}>
      <img src={mail} // Update this path to the correct location of the icon file
        alt="Mail"
        className="social-icon"
      />
    </a>
  )}
</div>

            <h3>WORK EXPERIENCE</h3>
            {selectedAlumni.work_experience &&
            selectedAlumni.work_experience.length > 0 ? (
              selectedAlumni.work_experience.map((work, index) => (
                <div key={index}>
                  <p>
                    <strong>Company:</strong> {work.company}
                  </p>
                  <p>
                    <strong>Job Title:</strong> {work.job_title}
                  </p>
                  <p>
                    <strong>Years of Experience:</strong>{" "}
                    {work.years_of_experience}
                  </p>
                  <p>
                    <strong>Description:</strong> {work.description}
                  </p>
                </div>
              ))
            ) : (
              <p>No work experience available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniDirectory;
