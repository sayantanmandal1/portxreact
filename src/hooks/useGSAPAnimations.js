import { useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useGSAPAnimations = () => {
  const startAnimations = useCallback(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.5
    });
    
    gsap.to('.hero-title', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.7
    });
    
    gsap.to('.hero-description', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.9
    });
    
    gsap.to('.hero-buttons', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 1.1
    });
    
    // Section title animations
    gsap.utils.toArray('.section-title').forEach(title => {
      gsap.to(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.8
      });
    });
    
    // Project card animations
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2
      });
    });
    
    // Contact text animations
    gsap.to('.contact-text', {
      scrollTrigger: {
        trigger: '.contact-text',
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.8
    });
    
    // Social links animations
    gsap.utils.toArray('.social-link').forEach((link, index) => {
      gsap.to(link, {
        scrollTrigger: {
          trigger: link,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.3 + (index * 0.1)
      });
    });
  }, []);

  return { startAnimations };
};

export default useGSAPAnimations;