import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <section className="section mission-section">
        <div className="section-content">
          <h2>Our Mission</h2>
          <p>
            Fun and Learn Preschool is committed to creating a nurturing, educational environment where children can develop socially, emotionally, and cognitively through engaging and interactive learning experiences.
          </p>
          <p>
            We strive to provide a safe and inspiring space where every child is encouraged to explore their interests and talents, fostering creativity, critical thinking, and a love for lifelong learning.
          </p>
        </div>
        <div className="section-image">
          <img
            src="https://ccc.caltech.edu/wp-content/uploads/2019/03/CCC-MissionGuidingPrinciples.jpg"
            alt="Our Mission"
          />
        </div>
      </section>

      <section className="section vision-section">
        <div className="section-image">
          <img
            src="https://www.optometrists.org/wp-content/uploads/2021/11/Preschool-Children-Vision-Therapy.jpg"
            alt="Our Vision"
          />
        </div>
        <div className="section-content">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a leading preschool recognized for excellence in early childhood education, supporting children's growth into confident, empathetic, and inquisitive individuals ready for future challenges.
          </p>
          <p>
            We aim to cultivate a community where children develop strong foundations that prepare them for success in school and beyond.
          </p>
        </div>
      </section>

      <section className="section values-section">
        <div className="section-content">
          <h2>Our Core Values</h2>
          <ul>
            <li>
              <strong>Creativity:</strong> Encouraging innovative thinking through playful learning.
            </li>
            <li>
              <strong>Empathy:</strong> Building compassion and understanding in our diverse community.
            </li>
            <li>
              <strong>Curiosity:</strong> Fostering a love for exploration and knowledge.
            </li>
            <li>
              <strong>Safety:</strong> Ensuring a safe and nurturing environment for every child.
            </li>
          </ul>
        </div>
        <div className="section-image">
          <img
            src="https://img1.wsimg.com/isteam/ip/74404dce-6d83-4717-96b5-1bc186e49e51/joy-school-values-NEW-white%20space.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1240,cg:true"
            alt="Our Core Values"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
