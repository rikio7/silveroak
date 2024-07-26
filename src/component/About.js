import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <h1>About Us</h1>
        <p>
          Welcome to Silver Oak Adventure, a captivating game developed by a passionate team of seven talented individuals from Georgian College. This project, born out of our shared love for gaming and desire to create an accessible and enjoyable experience for all, has been a labor of love and dedication.
        </p>
        <p>
          Our team consists of:
        </p>
        <ul>
          <li><strong>Rochak</strong> - Lead Developer</li>
          <li><strong>Kaitly</strong> - Game Designer</li>
          <li><strong>Erin</strong> - Art Director</li>
          <li><strong>Betsabez</strong> - Story Writer</li>
          <li><strong>Christine</strong> - Sound Designer</li>
          <li><strong>Mustafa</strong> - Quality Assurance</li>
          <li><strong>Gloria</strong> - Project Manager</li>
        </ul>
        <p>
          Our mission is to provide easy access to an immersive gaming experience that combines compelling storytelling, stunning visuals, and engaging gameplay. We hope you enjoy playing Silver Oak Adventure as much as we enjoyed creating it!
        </p>
      </div>
    </div>
  );
};

export default About;
