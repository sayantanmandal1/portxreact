import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  const handleViewProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-subtitle">About me</span>
          <h1 className="hero-title">Sayantan Mandal</h1>
          <p className="hero-description">
            <ReactTyped
              strings={[
                "Welcome to my digital forge.",
                "I'm a full‑stack engineer architecting AI-native platforms—where React UIs meet FastAPI, vector search, and GPT‑powered reasoning.",
                "Dive in, explore the systems I’ve built, and let’s create scalable intelligence together."
              ]}
              typeSpeed={40}
              backSpeed={20}
              backDelay={2500}
              loop
              smartBackspace
              showCursor={true}
              cursorChar="▍"
            />
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn" onClick={handleViewProjects}>
              View Projects <i className="fas fa-arrow-right btn-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
