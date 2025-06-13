import React from 'react';

const Contact = () => {
  const socialLinks = [
    {
      href: "mailto:msayantan05@gmail.com",
      icon: "fas fa-envelope",
      text: "msayantan05@gmail.com"
    },
    {
      href: "https://linkedin.com/in/sayantan-mandal-8a14b7202",
      icon: "fab fa-linkedin-in",
      text: "Sayantan Mandal",
      target: "_blank"
    },
    {
      href: "https://www.leetcode.com/sayonara1337",
      icon: "fas fa-code",
      text: "sayonara1337",
      target: "_blank"
    },
    {
      href: "https://instagram.com/ig_sayantan_",
      icon: "fab fa-instagram",
      text: "ig_sayantan_",
      target: "_blank"
    },
    {
      href: "https://drive.google.com/file/d/1wdQg84B6FKS1mKsiYxvoJgkJuHjzmS1y/view?usp=drive_link",
      icon: "fas fa-file-alt",
      text: "Resume",
      target: "_blank"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Connect With Me</h2>
        <div className="contact-content">
          <p className="contact-text">
            Interested in working together or have a question? Feel free to reach out through any of my social platforms or download my resume to learn more about my experience and skills.
          </p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="social-link"
                target={link.target}
                rel={link.target ? "noopener noreferrer" : undefined}
              >
                <div className="social-icon">
                  <i className={link.icon}></i>
                </div>
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;