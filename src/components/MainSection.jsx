import React, { useState } from "react";
import "../styles/MainSection.css";
import { Link } from "react-router-dom";

const MainSection = () => {
  const [modalImage, setModalImage] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const openImageModal = (image) => {
    setModalImage(image);
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const courses = [
    {
      id: "b1",
      title: "B1 - Automatic Light Vehicle",
      description: "Learn how to drive an Automatic Light Passenger Car.",
      price: "11,500",
      image: require("../images/car2.jpg"),
    },
    {
      id: "b2",
      title: "B2 - Manual Light Vehicle",
      description: "Learn how to drive a Manual Light Passenger Car.",
      price: "12,000",
      image: require("../images/bue2.PNG"),
    },
    {
      id: "b3",
      title: "B3 - Executive/Advanced",
      description: "Learn driving as a profession with our advanced courses.",
      price: "9,000",
      image: require("../images/county64.webp"),
    },
  ];

  const images = [
    require("../images/img15.jpg"),
    require("../images/img17.jpg"),
    require("../images/image10.jpg"),
    require("../images/img16.jpg"),
    require("../images/img11.jpg"),
    require("../images/img13.jpg"),
   
    require("../images/hero1.jpg"),
    require("../images/image1.jpeg"),
    require("../images/image6.jpg"),
    require("../images/image5.jpg"),
    require("../images/image2.jpeg"),
    require("../images/image9.jpeg"),
    
    require("../images/hero.PNG"),

    require("../images/img14.jpg"),
    require("../images/image3.jpg"),
  ];

  // Determine which images to show based on "showMore" state
  const visibleImages = showMore ? images : images.slice(0, 5);

  return (
    <div className="main-container">
      {/* Welcome Section */}
      <div className="main-section">
        <div className="content">
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

      {/* Gallery Section */}
      <div className="image-section">
        <h2 className="section-title">Gallery</h2>
        <div className="image-gallery">
          {visibleImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="gallery-thumbnail"
              onClick={() => openImageModal(image)}
            />
          ))}
        </div>
        {/* Show More Button */}
        {images.length > 6 && (
          <button className="see-more-button" onClick={toggleShowMore}>
            {showMore ? "See Less" : "See More"}
          </button>
        )}
      </div>

      {/* Modal for Full Image View */}
      {modalImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Full View" className="modal-image" />
            <button className="close-button" onClick={closeImageModal}>
              Close
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
