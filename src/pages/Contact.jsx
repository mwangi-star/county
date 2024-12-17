import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_0yupfna'; // Replace with your EmailJS Service ID
    const templateID = 'template_jg3egp8'; // Replace with your EmailJS Template ID
    const publicKey = 'DSNKAXMWdQBLC56Do'; // Replace with your EmailJS Public Key

    console.log('Form Data Being Sent:', formData); // Debugging log for form data

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatusMessage('✅ Message sent successfully!');
        setTimeout(() => setStatusMessage(''), 5000);
        setFormData({ user_name: '', user_email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setStatusMessage('❌ Failed to send the message. Please try again later.');
        setTimeout(() => setStatusMessage(''), 5000);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us for any inquiries or assistance.</p>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone Numbers</h3>
          <p>
            <a href="tel:0721830480">0721830480</a> | 
            <a href="tel:0722224800">0722224800</a>
          </p>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h3>Email Us</h3>
          <p>
            <a href="mailto:countyintermediate2021@gmail.com">
              countyintermediate2021@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Our Location</h3>
          <p>Kimbo, Githurai, Thika Makongeni, Kamakis, Murang'a town, Karatina town, Gatundu, Kiganjo.</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="whatsapp-container">
        <a href="https://wa.me/0784038777" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={sendEmail}>
          <label htmlFor="user_name">Your Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />

          <label htmlFor="user_email">Your Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
