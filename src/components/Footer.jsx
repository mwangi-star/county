import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for client-side routing
import '../styles/Footer.css';  // Assuming you'll add styles in Footer.css
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';  // Importing phone and whatsapp icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><strong>Head Office:</strong> Kimbo, Matangi Tuktuk Stage</p>
          <p>
            <FaPhoneAlt /> <a href="tel:0721830480">0721830480</a> | 
            <a href="tel:0722224800"> 0722224800</a>
          </p>
          <p>
            <FaPhoneAlt /> <a href="tel:0727066323">0727066323</a> - Githurai Branch
          </p>
          <p>
            <FaPhoneAlt /> <a href="tel:0784038777">0784038777</a> - Thika  Branch
          </p>
          <p>
            <FaPhoneAlt /> <a href="tel:0721830480">0721830480</a> - Kamakis Branch
          </p>
          <p>
            <FaPhoneAlt /> <a href="tel:0727066323">0727066323</a> - Murang'a Town Branch
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/courses">Courses</Link></li>
          </ul>
        </div>

        {/* Social and WhatsApp */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <FaWhatsapp /> <a href="https://wa.me/0784038777" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>
          </p>
        </div>

        {/* Copyright */}
        <div className="footer-section footer-bottom">
          <p>© {new Date().getFullYear()} County Driving School. All rights reserved.Designed by Msambweni web developers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
