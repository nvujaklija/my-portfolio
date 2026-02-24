import React from 'react';

function Projects() {
  return (
    <div className="section projects">
      <h1>Projects</h1>
      
      <div className="project-card">
        <h2>Project Title 1</h2>
        <p>Brief description of your project goes here. What problem did it solve? What technologies did you use?</p>
        <p><strong>Technologies:</strong> React, JavaScript, CSS</p>
        <a href="#">View Project →</a>
      </div>
      
      <div className="project-card">
        <h2>Project Title 2</h2>
        <p>Brief description of your project goes here. What problem did it solve? What technologies did you use?</p>
        <p><strong>Technologies:</strong> React, Node.js, MongoDB</p>
        <a href="#">View Project →</a>
      </div>
      
      <div className="project-card">
        <h2>Project Title 3</h2>
        <p>Brief description of your project goes here. What problem did it solve? What technologies did you use?</p>
        <p><strong>Technologies:</strong> JavaScript, HTML, CSS</p>
        <a href="#">View Project →</a>
      </div>
    </div>
  );
}

export default Projects;