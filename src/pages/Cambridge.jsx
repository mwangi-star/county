import React from 'react';
import '../styles/Cambridge.css'; // Assume you have a CSS file for styling

const Courses = () => {
  return (
    <div className="courses-container">
      <h1>Cambridge Advanced College</h1>
      <h2>Advanced Courses</h2>

      {/* Basic Level Certificate */}
      <div className="course-section">
        <h3>Basic Level Certificate</h3>
        <ul>
          <li>Computer Introduction</li>
          <li>Ms Windows</li>
          <li>Ms Word</li>
          <li>Ms Excel</li>
          <li>Ms PowerPoint</li>
          <li>Ms Publisher</li>
          <li>Typing</li>
          <li>Adobe PageMaker</li>
          <li>Computer Hardware</li>
          <li>Internet and Email</li>
        </ul>
        <p><strong>Cost:</strong> 4,000 KES per term</p>
        <p><strong>Duration:</strong> 1 month</p>
      </div>

      {/* Certificate in Computer Accounting */}
      <div className="course-section">
        <h3>Certificate in Computer Accounting</h3>
        <ul>
          <li>Ms Windows (up to 2016)</li>
          <li>QuickBooks</li>
          <li>Sage Line</li>
        </ul>
        <p><strong>Cost:</strong> 8,000 KES per term</p>
        <p><strong>Duration:</strong> 1 month</p>
      </div>

      {/* Certificate in Computer Secretarial */}
      <div className="course-section">
        <h3>Certificate in Computer Secretarial</h3>
        <ul>
          <li>Ms Windows</li>
          <li>Ms Word</li>
          <li>Ms Excel</li>
          <li>Typing Tutor</li>
          <li>Ms Access</li>
          <li>Internet and Email</li>
        </ul>
        <p><strong>Cost:</strong> 8,000 KES per term</p>
        <p><strong>Duration:</strong> 1 month</p>
      </div>

      {/* Certificate in Graphics and Design */}
      <div className="course-section">
        <h3>Certificate in Graphics and Design</h3>
        <ul>
          <li>Adobe Illustrator</li>
          <li>CorelDraw</li>
          <li>Adobe Photoshop</li>
          <li>Ms Publisher</li>
          <li>Internet and Email</li>
        </ul>
        <p><strong>Cost:</strong> 8,000 KES per term</p>
        <p><strong>Duration:</strong> 3 months</p>
      </div>

      {/* Certificate in Computer Programming */}
      <div className="course-section">
        <h3>Certificate in Computer Programming</h3>
        <ul>
          <li>C++ Programming</li>
          <li>Visual Basic</li>
          <li>MySQL</li>
          <li>Java Programming</li>
          <li>Web Design</li>
        </ul>
        <p><strong>Cost:</strong> 12,000 KES per term</p>
        <p><strong>Duration:</strong> 1.5 months</p>
      </div>

      {/* SPSS */}
      <div className="course-section">
        <h3>SPSS</h3>
        <ul>
          <li>Statistical Package for Social Sciences</li>
          <li>Correlation</li>
          <li>Chi Square</li>
          <li>ANOVA</li>
          <li>Data Analysis</li>
        </ul>
        <p><strong>Cost:</strong> 17,000 KES per term</p>
        <p><strong>Duration:</strong> 3 months</p>
      </div>

      {/* Advanced Excel */}
      <div className="course-section">
        <h3>Advanced Excel</h3>
        <ul>
          <li>Data Analysis</li>
          <li>Data Research</li>
          <li>Ms Word</li>
          <li>Data Filing</li>
        </ul>
        <p><strong>Cost:</strong> 10,000 KES per term</p>
        <p><strong>Duration:</strong> 1 month</p>
      </div>

      <p><strong>Qualified Instructors:</strong> Ensuring the best education experience</p>
    </div>
  );
};

export default Courses;
