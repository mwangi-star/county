import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About County Intermediate Driving School</h1>
        <p>Empowering safe and confident drivers since 2016.</p>
      </div>
      <div className="about-content">
        {/* Left Section */}
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            County Intermediate Driving School has been at the forefront of driver education for over 8 years. 
            Our mission is to ensure every student learns the skills and confidence needed to be a 
            responsible and safe driver. We combine professional instruction with real-world experience 
            to help you achieve your driving goals.
          </p>
        </div>

        {/* Right Section */}
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <div className="why-choose-us-cards">
            {[
              '100% guaranteed success',
              'Digital enrollment program',
              'Flexible scheduling options to suit your needs',
              'Weekend classes',
              'Proven success rates in driver licensing exams',
              'Pick and drop service',
              'Certificate of merit upon completion',
              'Free basic mechanical course',
              'No hidden charges',
              'Discounted rates (three-quarter installment)',
            ].map((benefit, index) => (
              <div className="card" key={index}>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-vision">
        <h2>Our Vision</h2>
        <p>
          At County Driving School, we envision a world where every driver on the road is skilled, 
          responsible, and confident, creating safer roads for everyone.
        </p>
        <h2>Our Motto</h2>
        <p>Smile of our county</p>
      </div>
    </div>
  );
};

export default About;
