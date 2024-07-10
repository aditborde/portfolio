import React from 'react';

const projects = [
    {
        image: 'project1.jpg',
        title: 'Project Title 1',
        description: 'Project Description 1',
    },
    {
        image: 'project2.jpg',
        title: 'Project Title 2',
        description: 'Project Description 2',
    },
];

const Creative = () => {
    return (
        <div className="creative-container">
            {projects.map((project, index) => (
                <div key={index} className="creative-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Creative;