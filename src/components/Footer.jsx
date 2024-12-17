import React from 'react';
import { Link } from 'react-router-dom'; // Client-side routing
import '../styles/Footer.css'; // Footer CSS
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'; // Phone and WhatsApp icons

const branches = [
  { name: "Head Office", phone: "0721830480", location: "Kimbo, Matangi Tuktuk Stage" },
  { name: "Githurai Branch", phone: "0727066323" },
  { name: "Thika Branch", phone: "0784038777" },
  { name: "Kamakis Branch", phone: "0721830480" },
  { name: "Murang'a Town Branch", phone: "0727066323" },
  { name: "Kiganjo Town Branch", phone: "0721830480" },
  { name: "Gatundu Town Branch", phone: "0721830480" }
];

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <strong>{branches[0].name}:</strong> {branches[0].location}
          </p>
          {branches.map((branch, index) => (
            index > 0 && (
              <p key={index}>
                <FaPhoneAlt /> {branch.name}:{" "}
                <a href={`tel:${branch.phone}`}>{branch.phone}</a>
              </p>
            )
          ))}
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/courses">Courses</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <FaWhatsapp />{" "}
            <a href="https://wa.me/0784038777" target="_blank" rel="noopener noreferrer">
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
      </div>

      {/* Horizontal Line and Copyright */}
      <hr className="footer-separator" />
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} County Intermediate institute Of Advanced Driving School. All rights reserved. 
          Designed by <strong>Msambweni Web Developers</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
