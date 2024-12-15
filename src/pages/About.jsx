import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About County Driving School</h1>
        <p>Empowering safe and confident drivers since 1990.</p>
      </div>
      <div className="about-content">
        {/* Left Section */}
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            County Driving School has been at the forefront of driver education for over 30 years. 
            Our mission is to ensure every student learns the skills and confidence needed to be a 
            responsible and safe driver. We combine professional instruction with real-world experience 
            to help you achieve your driving goals.
          </p>
        </div>

        {/* Right Section */}
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>100% guaranteed success.</li>
            <li>Digital enrollment program.</li>
            <li>Flexible scheduling options to suit your needs.</li>
            <li>weekend classes.</li>
            <li>Proven success rates in driver licensing exams.</li>
            <li>Pick and drop drop.</li>
            <li>Certicate of merit upon completion.</li>
            <li>free basic mechanical course.</li>
             <li>No hidden charges</li>
             <li>Discounted rates (three quater installment)</li>


          </ul>
        </div>
      </div>

      <div className="about-vision">
        <h2>Our Vision</h2>
        <p>
          At County Driving School, we envision a world where every driver on the road is skilled, 
          responsible, and confident, creating safer roads for everyone.
        </p>
      </div>
    </div>
  );
};

export default About; 