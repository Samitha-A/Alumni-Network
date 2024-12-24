import React from 'react';

const Mentoring = () => {
  const mentors = [
    {
      name: 'Rahul',
      occupation: 'Software Engineer at Google',
      bio: 'Passionate about helping young professionals transition into tech roles.',
      image: 'https://via.placeholder.com/100', // Replace with actual image
    },
    {
      name: 'Sahaana',
      occupation: 'Marketing Director at Amazon',
      bio: 'Loves guiding students towards a successful career in digital marketing.',
      image: 'https://via.placeholder.com/100', // Replace with actual image
    },
    {
      name: 'Akshay',
      occupation: 'Data Scientist at Facebook',
      bio: 'Expert in data analytics and machine learning. Ready to share my knowledge.',
      image: 'https://via.placeholder.com/100', // Replace with actual image
    },
  ];

  return (
    <div style={styles.container}>
      <h1>Alumni Mentoring</h1>
      <p style={styles.introText}>
        Welcome to the Alumni Mentoring program! Connect with experienced alumni who can guide you on your academic and career journey.
      </p>

      <div style={styles.mentorsSection}>
        <h2>Meet Our Mentors</h2>
        <div style={styles.mentorsContainer}>
          {mentors.map((mentor, index) => (
            <div key={index} style={styles.mentorCard}>
              <img src={mentor.image} alt={mentor.name} style={styles.mentorImage} />
              <h3>{mentor.name}</h3>
              <p><strong>{mentor.occupation}</strong></p>
              <p>{mentor.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.successStoriesSection}>
        <h2>Success Stories</h2>
        <p>
          "The alumni mentoring program helped me land my dream job. My mentor provided invaluable insights and encouragement throughout the process." - Sarah, 2022 Graduate
        </p>
      </div>

      <div style={styles.callToAction}>
        <h2>Interested in Becoming a Mentor?</h2>
        <p>
          Join our mentoring network and help shape the future of our students and alumni. Share your experiences, offer advice, and make a lasting impact.
        </p>
        <button style={styles.ctaButton}>Become a Mentor</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    marginLeft: '7cm', // This moves the content 7cm to the right
  },
  introText: {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginBottom: '40px',
  },
  mentorsSection: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  mentorsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  mentorCard: {
    width: '250px',
    textAlign: 'center',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  mentorImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  successStoriesSection: {
    backgroundColor: '#f9f9f9',
    padding: '40px',
    textAlign: 'center',
    marginBottom: '40px',
    fontStyle: 'italic',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  callToAction: {
    textAlign: 'center',
    backgroundColor: '#2e91bf',
    color: 'white',
    padding: '40px',
    borderRadius: '8px',
  },
  ctaButton: {
    padding: '10px 20px',
    backgroundColor: 'white',
    color: '#007BFF',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    marginTop: '20px',
    borderRadius: '5px',
  },
  ctaButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Mentoring;
