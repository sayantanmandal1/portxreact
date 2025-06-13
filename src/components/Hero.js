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
                "I'm a full‑stack engineer designing AI-native systems where React, FastAPI, and GPT‑4 work in harmony.",
                "I build intelligent platforms—from semantic search with FAISS to LangChain-powered document Q&A.",
                "My systems serve real users, deliver sub-200ms inference, and scale without compromise.",
                "Clean architecture. Testable code. Fast iteration. Pragmatic engineering at every level.",
                "Explore my work—where LLMs meet production, and abstract ideas become performant, user-facing software."
              ]}
              typeSpeed={40}
              backSpeed={25}
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
