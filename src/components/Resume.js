import React from 'react';

function Resume() {
  return (
    <div className="section resume">
      <h1>Resume</h1>
      
      <h2>Experience</h2>
      <div className="job">
        <h3>Job Title</h3>
        <p className="company">Company Name | Start Date - End Date</p>
        <p>Add your job descriptions and responsibilities here.</p>
      </div>
      
      <h2>Education</h2>
      <div className="education">
        <h3>Degree Name</h3>
        <p className="school">School Name | Graduation Year</p>
      </div>
      
      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Add more skills here</li>
      </ul>
    </div>
  );
}

export default Resume;