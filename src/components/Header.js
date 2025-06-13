import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.getElementById('header');
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (header) header.classList.add('scrolled');
      } else {
        if (header) header.classList.remove('scrolled');
      }
    };

    // Smooth scrolling for navigation links
    const handleNavClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#') && href !== '#') {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
      
      // Close mobile menu when clicking a link
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Add click listeners to nav links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, [isMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header">
      <div className="container">
        <nav>
          <a href="#" className="logo">SM</a>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
            <a href="#home" className="nav-link">Home</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="https://drive.google.com/file/d/1Mg6SCsESPXwZD0SsMfViHWUXUtvfVVvO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
          </div>
          <button className="mobile-menu-btn" id="mobileMenuBtn" onClick={toggleMobileMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;