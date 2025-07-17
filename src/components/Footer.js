import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/sayantanmandal1', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/sayantan-mandal-8a14b7202', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', href: 'mailto:msayantan05@gmail.com', label: 'Email' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/ig_sayantan_', label: 'Instagram' }
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <span className="logo-text">SM</span>
            </div>
            <p className="footer-description">
              Building intelligent systems where AI meets production-ready code. 
              Crafting the future, one line at a time.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="social-icon-link"
                  aria-label={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Technologies</h4>
            <ul className="footer-links">
              <li><span className="footer-tech">React & Next.js</span></li>
              <li><span className="footer-tech">Python & FastAPI</span></li>
              <li><span className="footer-tech">AI/ML & LLMs</span></li>
              <li><span className="footer-tech">Docker & AWS</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Let's Connect</h4>
            <p className="footer-contact-text">
              Ready to discuss your next project?
            </p>
            <a 
              href="mailto:msayantan05@gmail.com" 
              className="footer-cta-btn"
            >
              <span>Get In Touch</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Sayantan Mandal. Crafted with passion and precision.
            </p>
            <div className="footer-bottom-links">
              <span className="footer-status">
                <span className="status-dot"></span>
                Available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;