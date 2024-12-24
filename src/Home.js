import React from 'react';
import './Home.css';

const Home = () => {
  const stats = [
    { icon: '🏛️', value: '34', label: 'Years Since Establishment' },
    { icon: '🎓', value: '8000', label: 'Students in 2024' },
    { icon: '👥', value: '1500', label: 'Staff' },
    { icon: '👨‍🎓', value: '300000', label: 'Alumni' },
    { icon: '🤝', value: '600', label: 'Partners' },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      quote: 'BIT provided me with opportunities I never thought possible. The faculty was exceptional!',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Jane Smith',
      quote: 'The education and community at BIT truly shaped my future. I am grateful for the experience!',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Alex Johnson',
      quote: 'An amazing institution that helped me grow both professionally and personally.',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <div className="education-stats">
      <div className="hero-section">
        <div className="overlay">
          <h1>BIT is more than just a place to get an education.</h1>
          <a href="https://www.bitsathy.ac.in/" className="cta-button" target="_blank" rel="noopener noreferrer">
            Explore Now
          </a>
        </div>
      </div>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Alumni Say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
