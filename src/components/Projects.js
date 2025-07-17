import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const projectsRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI Resume Evaluation System",
      description: "A full-stack intelligent system that evaluates candidate resumes against job descriptions and returns a score from 0 to 100, along with a pass/fail verdict.",
      fullDescription: "Built with React frontend and FastAPI backend, deployed using Docker containers with automated CI/CD via GitHub Actions. Features real-time scoring, detailed feedback generation, and enterprise-grade security. The system uses advanced NLP techniques to analyze resume content and match it against job requirements.",
      githubUrl: "https://github.com/sayantanmandal1/ai-resume-checker",
      liveUrl: "https://ai-resume-checker-nine.vercel.app/",
      category: "ai",
      tags: ["React", "FastAPI", "OpenAI GPT-4", "Docker", "CI/CD", "NLP"],
      featured: true,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      metrics: {
        accuracy: "95%",
        responseTime: "< 2s",
        users: "1K+"
      },
      techStack: ["React", "FastAPI", "OpenAI GPT-4", "Docker", "GitHub Actions", "Vercel"]
    },
    {
      id: 2,
      title: "AI Interviewer Web Application",
      description: "An AI-powered interviewer web application that generates domain-specific interview questions, accepts user answers, and evaluates them automatically.",
      fullDescription: "Features semantic similarity grading, session management, and OpenAI embeddings integration. Built with FastAPI backend and React frontend with real-time evaluation capabilities. Supports both MCQs and descriptive questions with intelligent scoring algorithms.",
      githubUrl: "https://github.com/sayantanmandal1/ai-interviewer",
      liveUrl: "https://ai-interviewer-henna.vercel.app/",
      category: "ai",
      tags: ["React", "FastAPI", "OpenAI", "Semantic Analysis", "Session Management"],
      featured: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      metrics: {
        accuracy: "92%",
        responseTime: "< 1.5s",
        users: "800+"
      },
      techStack: ["React", "FastAPI", "OpenAI Embeddings", "Python", "JavaScript"]
    },
    {
      id: 3,
      title: "ASL Recognition Studio",
      description: "A full-stack web application for real-time American Sign Language (ASL) recognition using camera or uploaded images.",
      fullDescription: "Features intelligent sentence building with spellchecking, live canvas capture, and real-time processing. Deployed on Render.com with optimized model inference. Uses TensorFlow Lite model to classify hand signs into letters with high accuracy.",
      githubUrl: "https://github.com/sayantanmandal1/sign-recognition",
      liveUrl: "https://sign-recognition.vercel.app/",
      category: "ai",
      tags: ["TensorFlow Lite", "Computer Vision", "React", "Real-time Processing"],
      featured: false,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      metrics: {
        accuracy: "88%",
        responseTime: "< 500ms",
        users: "2K+"
      },
      techStack: ["TensorFlow Lite", "React", "Computer Vision", "Canvas API"]
    },
    {
      id: 4,
      title: "Doc-Chat",
      description: "A document-based chatbot application that leverages advanced NLP and vector search techniques to allow users to interact with document contents seamlessly.",
      fullDescription: "Features PDF and text document upload, semantic search and question answering, vector embedding using OpenAI embeddings, and FAISS vector store integration with React frontend. Enables natural language queries over document collections.",
      githubUrl: "https://github.com/sayantanmandal1/doc-chat",
      liveUrl: "https://doc-chat-nu.vercel.app/",
      category: "ai",
      tags: ["FAISS", "OpenAI Embeddings", "NLP", "Vector Search", "React"],
      featured: true,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      metrics: {
        accuracy: "94%",
        responseTime: "< 1s",
        users: "1.5K+"
      },
      techStack: ["FAISS", "OpenAI", "React", "Python", "Vector Databases"]
    },
    {
      id: 5,
      title: "Financial Time Resonance Engine",
      description: "A powerful Streamlit application that uncovers temporal resonance patterns in financial market data.",
      fullDescription: "Advanced analytics across time, price, volume, and volatility dimensions. Features predictive modeling, pattern recognition, and interactive visualizations for financial analysis. Identifies historical windows that harmonically align with current market behavior.",
      githubUrl: "https://github.com/sayantanmandal1/TimeMachine",
      liveUrl: "https://timemachine.streamlit.app/",
      category: "data",
      tags: ["Streamlit", "Financial Analysis", "Pattern Recognition", "Data Visualization"],
      featured: false,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      metrics: {
        accuracy: "87%",
        responseTime: "< 3s",
        users: "500+"
      },
      techStack: ["Streamlit", "Python", "Pandas", "Plotly", "Financial APIs"]
    },
    {
      id: 6,
      title: "LoRa-Based Wireless Monitoring System",
      description: "Established a LoRa network for sensors over 10 km², achieving 99.99% transmission reliability.",
      fullDescription: "Enhanced energy efficiency by 15% via optimized duty-cycling. Features real-time monitoring, automated alerts, and comprehensive dashboard for network management. Reduced sensor downtime by 20% through predictive maintenance alerts.",
      githubUrl: "https://github.com/sayantanmandal1/lora-iot",
      liveUrl: null,
      category: "iot",
      tags: ["LoRa", "IoT", "Wireless Networks", "Predictive Maintenance", "Energy Optimization"],
      featured: false,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      metrics: {
        reliability: "99.99%",
        coverage: "10 km²",
        efficiency: "+15%"
      },
      techStack: ["LoRa", "Arduino", "C++", "IoT Protocols", "Sensor Networks"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ai', name: 'AI & ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'data', name: 'Data Science', count: projects.filter(p => p.category === 'data').length },
    { id: 'iot', name: 'IoT Systems', count: projects.filter(p => p.category === 'iot').length }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const filtered = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
    setVisibleProjects(filtered);
  }, [filter]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="projects" className="projects-section" ref={projectsRef}>
        <div className="container">
          <div className="projects-header">
            <div className="section-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Portfolio</span>
            </div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing innovative solutions that blend cutting-edge AI with production-ready engineering
            </p>
          </div>

          <div className="projects-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                <span className="filter-name">{category.name}</span>
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${project.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <i className="fas fa-star"></i>
                    <span>Featured</span>
                  </div>
                )}
                
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button 
                      className="view-details-btn"
                      onClick={() => openProjectModal(project)}
                    >
                      <i className="fas fa-eye"></i>
                      <span>View Details</span>
                    </button>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <div className="project-category">
                      <span className={`category-badge ${project.category}`}>
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="project-metrics">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, value], i) => (
                        <div key={i} className="metric-item">
                          <span className="metric-value">{value}</span>
                          <span className="metric-label">{key}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="project-tag more">+{project.tags.length - 3}</span>
                    )}
                  </div>

                  <div className="project-actions">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link github"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github"></i>
                      <span>Code</span>
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link live"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Build Something Amazing?</h3>
              <p className="cta-text">Let's collaborate on your next innovative project</p>
              <a href="#contact" className="btn btn-primary">
                <span className="btn-text">Start a Conversation</span>
                <i className="fas fa-arrow-right btn-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="modal-category">
                  <span className={`category-badge ${selectedProject.category}`}>
                    {selectedProject.category.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="modal-info">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.fullDescription}</p>
                
                <div className="modal-metrics">
                  {Object.entries(selectedProject.metrics).map(([key, value], i) => (
                    <div key={i} className="metric-card">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
                
                <div className="modal-tech-stack">
                  <h4>Tech Stack</h4>
                  <div className="tech-tags">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-btn github"
                  >
                    <i className="fab fa-github"></i>
                    <span>View Source Code</span>
                  </a>
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="modal-btn live"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;