// React component: courses.jsx
import React from "react";
import "../styles/Courses.css";
import imagea1 from '../images/piik.webp'
import imagea2 from '../images/tuk.PNG'
import imageb1 from '../images/bue.jpg' 
import imageb2 from '../images/van1.jpg'
import imageb3 from  '../images/taxi.webp'
import imagec1 from '../images/lori.webp'
import imagec2 from '../images/lori.webp'
import imaged1 from '../images/van2.jpg'
import imaged2 from '../images/ndus.webp'

const coursesData = [
  {
    category: "A1 - Motorbike",
    image:imagea1,
    years: "18 years and above",
    specialClasses: "KES 10,000",
    fullCourse: { cost: "KES 7,500", lessons: 10 },
    halfCourse: { cost: "KES 7,000", lessons: 5 },
    testOnly: "KES 4,500",
  },
  
  {
    category: "A3 - Tuk Tuk",
    image:imagea2,
    years: "21 years and above",
    specialClasses: "KES 12,500",
    fullCourse: { cost: "KES 9,000", lessons: 10 },
    halfCourse: { cost: "KES 7,500", lessons: 5 },
    testOnly: "KES 6,000",
  },
  {
    category: "B - Light Vehicle",
    image: imageb1,
    years: "18 years and above",
    specialClasses: "KES 16,000",
    fullCourse: { cost: "KES 12,000", lessons: 34 },
    halfCourse: { cost: "KES 9,500", lessons: 20 },
    testOnly: "KES 7,000",
  },
  {
    category: "B - Automotive",
    image: imageb2,
    years: "18 years and above",
    specialClasses: "KES 15,700",
    fullCourse: { cost: "KES 11,500", lessons: 34 },
    halfCourse: { cost: "KES 9,000", lessons: 20 },
    testOnly: "KES 7,000",
  },
  {
    category: "B - Professional (Taxi)",
    image: imageb3,
    years: "18 years and above, 3 years experience",
    specialClasses: "KES 15,300",
    fullCourse: { cost: "KES 9,000", lessons: 30 },
    halfCourse: { cost: "KES 8,500", lessons: 10 },
    testOnly: "KES 7,000",
  },
  {
    category: "C - Light Truck",
    image: imagec1,
    years: "21 years and above",
    specialClasses: "KES 15,000",
    fullCourse: { cost: "KES 13,000", lessons: 30 },
    halfCourse: { cost: "KES 10,000", lessons: 20 },
    testOnly: "KES 7,000",
  },
  {
    category: "C - Medium Truck",
    image: imagec2,
    years: "21 years and above",
    specialClasses: "KES 17,000",
    fullCourse: { cost: "KES 13,500", lessons: 30 },
    halfCourse: { cost: "KES 10,500", lessons: 20 },
    testOnly: "KES 7,000",
  },
  /*{
    category: "C - Heavy Truck",
    image: "path-to-C-heavy-truck-image.jpg",
    years: "24 years and above",
    specialClasses: "KES 17,000",
    fullCourse: { cost: "KES 14,000", lessons: 30 },
    halfCourse: { cost: "KES 11,000", lessons: 20 },
    testOnly: "KES 7,000",
  },*/
  {
    category: "D1",
    image:imaged1,
    years: "4 years experience",
    specialClasses: "KES 10,000",
    fullCourse: { cost: "KES 8,000", lessons: 0 },
    halfCourse: { cost: "", lessons: 10 },
    testOnly: "",
  },
  {
    category: "D2",
    image: imaged2,
    years: "4 years D1 experience",
    specialClasses: "KES 10,000",
    fullCourse: { cost: "KES 8,500", lessons: 10 },
    halfCourse: { cost: "", lessons: 10 },
    testOnly: "",
  },
  /*{
    category: "D3",
    image: "path-to-D3-image.jpg",
    years: "30 years and above",
    specialClasses: "KES 12,000",
    fullCourse: { cost: "KES 9,000", lessons: 0 },
    halfCourse: { cost: "", lessons: 0 },
    testOnly: "",
  },
  */
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h1>County Driving School Courses</h1>
      <div className="courses-list">
        {coursesData.map((course, index) => (
          <div key={index} className="course">
            <img src={course.image} alt={course.category} className="course-image" />
            <div className="course-details">
              <h3>{course.category}</h3>
              <p>Eligibility: {course.years}</p>
              <div className="pricing">
                <span>Special Classes: {course.specialClasses}</span>
                <span>Full Course: {course.fullCourse.cost} ({course.fullCourse.lessons} lessons)</span>
                {course.halfCourse.cost && (
                  <span>Half Course: {course.halfCourse.cost} ({course.halfCourse.lessons} lessons)</span>
                )}
                {course.testOnly && <span>Test Only: {course.testOnly}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1>650/- PDL Learners Licence <br />
      1050/-final exams <br />
      550/- Endorsement
      
      </h1>
    </div>
  );
};

export default Courses;
