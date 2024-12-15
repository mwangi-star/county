import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../images/logo.PNG';

const Navbar = () => {
  return (
    <>
      {/* Contact Information Bar */}
      <div className="contact-bar">
        <p>
          📞 <span>+254 722 224 800</span> | 📧 <a href="mailto:countyintermediate2021@gmail.com">countyintermediate2021@gmail.com</a>
        </p>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" className="logo" />
            <span>County Intermediate Institute of Advanced Driving School</span>
          </div>
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul className="navbar-links">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/Branches">Branches</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Cambridge">Computer Courses</Link></li>
            <li><Link to="/About">About Us</Link></li>
          </ul>
          <Link to='/Cambridge'>
          <button className="navbar-button">Enroll in Computer Lessons</button>
          </Link>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;