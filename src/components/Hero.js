import React, { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Staggered animations
            setTimeout(() => {
              if (subtitleRef.current) {
                subtitleRef.current.style.opacity = '1';
                subtitleRef.current.style.transform = 'translateY(0)';
              }
            }, 200);

            setTimeout(() => {
              if (titleRef.current) {
                titleRef.current.style.opacity = '1';
                titleRef.current.style.transform = 'translateY(0)';
              }
            }, 400);

            setTimeout(() => {
              if (descriptionRef.current) {
                descriptionRef.current.style.opacity = '1';
                descriptionRef.current.style.transform = 'translateY(0)';
              }
            }, 600);

            setTimeout(() => {
              if (buttonsRef.current) {
                buttonsRef.current.style.opacity = '1';
                buttonsRef.current.style.transform = 'translateY(0)';
              }
            }, 800);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const handleContactMe = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge" ref={subtitleRef}>
            <span className="badge-dot"></span>
            <span className="badge-text">Full-Stack AI Engineer</span>
          </div>
          
          <h1 className="hero-title" ref={titleRef} data-text="Sayantan Mandal">
            <span className="title-line">Sayantan</span>
            <span className="title-line">Mandal</span>
          </h1>
          
          <div className="hero-description" ref={descriptionRef}>
            <ReactTyped
              strings={[
                "Crafting intelligent systems where AI meets production-ready code.",
                "Building scalable platforms with React, FastAPI, and cutting-edge ML models.",
                "Transforming complex problems into elegant, performant solutions.",
                "Where innovation meets execution—delivering sub-200ms AI experiences.",
                "Clean architecture. Robust systems. Seamless user experiences."
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={3000}
              loop
              smartBackspace
              showCursor={true}
              cursorChar="▍"
            />
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">AI Systems Built</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime Achieved</span>
            </div>
          </div>
          
          <div className="hero-buttons" ref={buttonsRef}>
            <a href="#projects" className="btn btn-primary" onClick={handleViewProjects}>
              <span className="btn-text">Explore My Work</span>
              <i className="fas fa-rocket btn-icon"></i>
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={handleContactMe}>
              <span className="btn-text">Let's Connect</span>
              <i className="fas fa-paper-plane btn-icon"></i>
            </a>
          </div>

          <div className="hero-scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <span className="scroll-text">Scroll to discover</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
