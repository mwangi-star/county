import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import '../styles/Contact.css';  // Assuming you'll add styles in Contact.css
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';  // Importing icons for phone, email, address, and WhatsApp

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us for any inquiries or assistance.</p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone Numbers</h3>
          <p>
            <a href="tel:0796027194"> 0721830480</a> | 
            <a href="tel:0722224800"> 0722224800</a>
          </p>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h3>Email Us</h3>
          <p><a href="mailto:countyintermediate2021@gmail.com">countyintermediate2021@gmail.com</a></p>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Our Location</h3>
          <p>Kimbo,Githurai,Thika Makongeni,Kamakis,Murang'a town, Karatina town.</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="whatsapp-container">
        <a href="https://wa.me/0784038777" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>

  

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
