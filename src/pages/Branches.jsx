import React from 'react';
import '../styles/Branches.css'; // Assuming you will style it in a CSS file

const Branches = () => {
  const branches = [
    {
      name: 'Head Office - Kimbo',
      location: 'Matangi Tuktuk Stage',
      phones: ['0721830480', '0722224800'],
    },
    {
      name: 'Githurai Branch',
      phones: ['0727066323'],
    },
    {
      name: 'Thika Makongeni Branch',
      phones: ['0784038777'],
    },
    {
      name: 'Kamakis Branch',
      phones: ['0721830480'],
    },
    {
      name: "Murang'a Town Branch",
      phones: [' 0727066323'],
    },
    {
      name: "Gatundu Town Branch",
      phones: [' 0722224800'],
    },
    {
      name: "Kiganjo Town Branch",
      phones: [' 0722224800'],
    },
  ];

  return (
    <div className="branches-container">
      <h1 className="branches-header">Our Branches</h1>
      <div className="branches-list">
        {branches.map((branch, index) => (
          <div key={index} className="branch-item">
            <h2 className="branch-name">{branch.name}</h2>
            {branch.location && <p className="branch-location">{branch.location}</p>}
            <p className="branch-phones">
              <strong>Tel:</strong> {branch.phones.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;

