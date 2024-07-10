import React from 'react';

const Projects = () => {
    const projects = [
      { title: "Project 1", description: "Description of Project 1" },
      { title: "Project 2", description: "Description of Project 2" },
      { title: "Project 3", description: "Description of Project 3" },
      { title: "Project 4", description: "Description of Project 4" },
      { title: "Project 5", description: "Description of Project 5" },
      { title: "Project 6", description: "Description of Project 6" },
    ];
  
    return (
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Projects;