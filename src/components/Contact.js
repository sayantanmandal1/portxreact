import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Hi Sayantan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:msayantan05@gmail.com?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    {
      href: "mailto:msayantan05@gmail.com",
      icon: "fas fa-envelope",
      text: "msayantan05@gmail.com",
      label: "Email",
      color: "#ea4335"
    },
    {
      href: "https://linkedin.com/in/sayantan-mandal-8a14b7202",
      icon: "fab fa-linkedin-in",
      text: "Sayantan Mandal",
      label: "LinkedIn",
      target: "_blank",
      color: "#0077b5"
    },
    {
      href: "https://github.com/sayantanmandal1",
      icon: "fab fa-github",
      text: "sayantanmandal1",
      label: "GitHub",
      target: "_blank",
      color: "#333"
    },
    {
      href: "https://www.leetcode.com/sayonara1337",
      icon: "fas fa-code",
      text: "sayonara1337",
      label: "LeetCode",
      target: "_blank",
      color: "#ffa116"
    },
    {
      href: "https://instagram.com/ig_sayantan_",
      icon: "fab fa-instagram",
      text: "ig_sayantan_",
      label: "Instagram",
      target: "_blank",
      color: "#e4405f"
    },
    {
      href: "https://drive.google.com/file/d/1e_zGr0Ld9mUR9C1HLHjMGN8aV77l1jcO/view?usp=sharing",
      icon: "fas fa-file-alt",
      text: "Download Resume",
      label: "Resume",
      target: "_blank",
      color: "#dc2626"
    }
  ];

  const quickStats = [
    { number: "15+", label: "Projects Completed", icon: "fas fa-project-diagram" },
    { number: "5+", label: "AI Systems Built", icon: "fas fa-brain" },
    { number: "99.9%", label: "Uptime Achieved", icon: "fas fa-chart-line" },
    { number: "2+", label: "Years Experience", icon: "fas fa-calendar-alt" }
  ];

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <div className="contact-header animate-on-scroll">
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="section-subtitle">
            Ready to bring your next project to life? Let's discuss how we can create 
            intelligent, scalable solutions that exceed expectations.
          </p>
        </div>

        <div className="contact-stats animate-on-scroll">
          {quickStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-main">
          <div className="contact-form-section animate-on-scroll">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>Have a project in mind? Let's discuss the possibilities.</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, ideas, or just say hello!"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary form-submit">
                <span className="btn-text">Send Message</span>
                <i className="fas fa-paper-plane btn-icon"></i>
              </button>
            </form>
          </div>

          <div className="contact-info-section animate-on-scroll">
            <div className="info-header">
              <h3>Connect With Me</h3>
              <p>Find me on these platforms or download my resume to learn more.</p>
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="social-link"
                  target={link.target}
                  rel={link.target ? "noopener noreferrer" : undefined}
                  style={{ '--link-color': link.color }}
                >
                  <div className="social-icon">
                    <i className={link.icon}></i>
                  </div>
                  <div className="social-content">
                    <span className="social-label">{link.label}</span>
                    <span className="social-text">{link.text}</span>
                  </div>
                  <div className="social-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-cta">
              <div className="cta-content">
                <h4>Ready to Start?</h4>
                <p>Let's turn your vision into reality with cutting-edge technology and clean, scalable code.</p>
                <div className="cta-features">
                  <div className="feature-item">
                    <i className="fas fa-rocket"></i>
                    <span>Fast Delivery</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-shield-alt"></i>
                    <span>Secure & Scalable</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-headset"></i>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;