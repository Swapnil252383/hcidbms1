import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="overlay">
        <div>
        <h2>Welcome to Fun and Learn Preschool</h2>
      <h3>At Fun and Learn, we make learning fun and engaging for preschool children. Join us to explore exciting educational materials.</h3>
        </div>
        </div>
      </div>
      <div className="home-content">
        <div className="content-section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNB9U_6DVwdwz7y5xqxk3qMLTbMee7OqydXg&s" alt="Learning section 1" />
          <h3>Interactive Lessons</h3>
        </div>
        <div className="content-section">
          <img src="https://senseselec.com/wp-content/uploads/2024/04/Engaging-Brain-Games-for-Students.jpg" alt="Learning section 2" />
          <h3>Engaging Games</h3>
        </div>
        <div className="content-section">
          <img src="https://schoolofscholars.edu.in/wp-content/uploads/2023/11/creative-activities-for-students-1024x683.jpg.webp" alt="Learning section 3" />
          <h3>Creative Activities</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
