import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Evaluation System",
      description: "A full-stack intelligent system that evaluates candidate resumes against job descriptions and returns a score from 0 to 100, along with a pass/fail verdict. Leverages OpenAI's GPT-4 API for semantic analysis and scoring. Built with React frontend and FastAPI backend, deployed using Docker containers with automated CI/CD via GitHub Actions.",
      githubUrl: "https://github.com/sayantanmandal1/ai-resume-checker",
      liveUrl: "https://ai-resume-checker-nine.vercel.app/"
    },
    {
      title: "AI Interviewer Web Application",
      description: "An AI-powered interviewer web application that generates domain-specific interview questions, accepts user answers, and evaluates them automatically. Supports both MCQs (auto-graded) and descriptive questions (graded using semantic similarity). Built with FastAPI backend and React frontend with session management and OpenAI embeddings integration.",
      githubUrl: "https://github.com/sayantanmandal1/ai-interviewer",
      liveUrl: "https://ai-interviewer-henna.vercel.app/"
    },
    {
      title: "ASL Recognition Studio",
      description: "A full-stack web application for real-time American Sign Language (ASL) recognition using camera or uploaded images. Uses TensorFlow Lite model to classify hand signs into letters, features intelligent sentence building with spellchecking, and includes live canvas capture. Built with FastAPI backend and React frontend, deployed on Render.com.",
      githubUrl: "https://github.com/sayantanmandal1/sign-recognition",
      liveUrl: "https://sign-recognition.vercel.app/"
    },
    {
      title: "Doc-Chat",
      description: "A document-based chatbot application that leverages advanced NLP and vector search techniques to allow users to interact with document contents seamlessly. Features PDF and text document upload, semantic search and question answering, vector embedding using OpenAI embeddings, and FAISS vector store integration with React frontend.",
      githubUrl: "https://github.com/sayantanmandal1/doc-chat",
      liveUrl: "https://doc-chat-nu.vercel.app/"
    },
    {
      title: "Financial Time Resonance Engine",
      description: "A powerful Streamlit application that uncovers temporal resonance patterns in financial market data. It helps identify historical windows that harmonically align with current market behavior across time, price, volume, and volatility dimensions.",
      githubUrl: "https://github.com/sayantanmandal1/TimeMachine",
      liveUrl: "https://timemachine.streamlit.app/"
    },
    {
      title: "LoRa-Based Wireless Monitoring System",
      description: "Established a LoRa network for sensors over 10 km², achieving 99.99% transmission reliability. Reduced sensor downtime by 20% by implementing scheduled maintenance alerts. Enhanced energy efficiency of nodes by 15% via optimized duty-cycling.",
      githubUrl: "https://github.com/sayantanmandal1/lora-iot",
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;