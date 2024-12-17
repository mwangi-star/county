import React from "react";
import "../styles/MainSection.css";
import { Link } from "react-router-dom";

const MainSection = () => {
  // Popular Courses data
  const courses = [
    {
      id: "b1",
      title: "B1 - Automatic Light Vehicle",
      description: "Learn how to drive an Automatic Light Passenger Car.",
      price: "11,500",
      image: require("../images/car2.jpg"), // Replace with actual path
    },
    {
      id: "b2",
      title: "B2 - Manual Light Vehicle",
      description: "Learn how to drive a Manual Light Passenger Car.",
      price: "12,000",
      image: require("../images/bue.jpg"), // Replace with actual path
    },
    {
      id: "b3",
      title: "B3 - Executive/Advanced",
      description: "Learn driving as a profession with our advanced courses.",
      price: "9,000",
      image: require("../images/AUTO.webp"), // Replace with actual path
    },
  ];

  return (
    <div className="main-container">
      {/* Welcome Section */}
      <div className="main-section">
        <div className="content">
          <h1>
            WELCOME TO COUNTY INTERMEDIATE INSTITUTE OF ADVANCED DRIVING SCHOOL
          </h1>
          <p>
            We are the Leading Driving Institution that centers its training on
            defensive driving, basic mechanics, first aid, and professional
            driving training tailor-made for everyone at a very affordable
            price.
          </p>
          <div className="buttons">
            <Link to="/courses">
              <button className="btn-primary">View Courses</button>
            </Link>
            <Link to="/contact">
              <button className="btn-secondary">Talk to Us</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Popular Courses Section */}
      <div className="other-container">
        <h2 className="section-title">Popular Courses</h2>
        <div className="popular-courses-container">
          {courses.map((course) => (
            <div key={course.id} className="popular-course-card">
              <img
                src={course.image}
                alt={course.title}
                className="popular-course-image"
              />
              <h3 className="popular-course-title">{course.title}</h3>
              <p className="popular-course-description">{course.description}</p>
              <p className="popular-course-price">ksh {course.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
