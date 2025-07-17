import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [aboutRef.current, skillsRef.current, experienceRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React & Next.js', level: 95, category: 'Frontend' },
    { name: 'Python & FastAPI', level: 92, category: 'Backend' },
    { name: 'AI/ML & LLMs', level: 88, category: 'AI/ML' },
    { name: 'Node.js & Express', level: 85, category: 'Backend' },
    { name: 'PostgreSQL & MongoDB', level: 90, category: 'Database' },
    { name: 'Docker & AWS', level: 87, category: 'DevOps' },
    { name: 'TensorFlow & PyTorch', level: 83, category: 'AI/ML' },
    { name: 'TypeScript', level: 89, category: 'Frontend' }
  ];

  const experiences = [
    {
      title: 'Full-Stack AI Engineer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Building intelligent systems with React, FastAPI, and cutting-edge AI models. Delivered 15+ production-ready applications with sub-200ms response times.',
      achievements: [
        'Architected AI-powered resume evaluation system with 95% accuracy',
        'Built real-time ASL recognition platform serving 10K+ users',
        'Implemented semantic search with FAISS achieving 99.9% uptime'
      ]
    },
    {
      title: 'IoT Systems Developer',
      company: 'Research Project',
      period: '2022 - 2023',
      description: 'Developed LoRa-based wireless monitoring systems with 10km² coverage and 99.99% transmission reliability.',
      achievements: [
        'Reduced sensor downtime by 20% through predictive maintenance',
        'Enhanced energy efficiency by 15% via optimized duty-cycling',
        'Established robust network infrastructure for remote monitoring'
      ]
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text" ref={aboutRef}>
            <div className="about-intro">
              <h3 className="about-subtitle">Crafting the Future of AI-Driven Applications</h3>
              <p className="about-description">
                I'm a passionate full-stack engineer who specializes in building intelligent, scalable systems 
                where artificial intelligence meets production-ready code. With expertise spanning from React 
                frontends to FastAPI backends, I create seamless experiences that leverage the power of modern AI.
              </p>
              <p className="about-description">
                My approach combines clean architecture, robust testing, and performance optimization to deliver 
                solutions that not only work flawlessly but scale effortlessly. Every line of code is written 
                with purpose, every system designed with the user in mind.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <div className="highlight-content">
                  <h4>AI-First Development</h4>
                  <p>Integrating LLMs, computer vision, and NLP into production systems</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <div className="highlight-content">
                  <h4>Performance Obsessed</h4>
                  <p>Sub-200ms response times and 99.9% uptime across all applications</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="highlight-content">
                  <h4>Clean Architecture</h4>
                  <p>Maintainable, testable code that scales with your business needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-section" ref={skillsRef}>
            <h3 className="skills-title">Technical Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ '--skill-level': `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section" ref={experienceRef}>
            <h3 className="experience-title">Professional Journey</h3>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{exp.title}</h4>
                      <span className="timeline-company">{exp.company}</span>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <p className="timeline-description">{exp.description}</p>
                    <ul className="timeline-achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;