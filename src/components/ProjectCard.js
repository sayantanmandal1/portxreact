import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fab fa-github"></i> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;