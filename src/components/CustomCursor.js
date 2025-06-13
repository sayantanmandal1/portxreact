import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }
      
      if (cursorOutline) {
        cursorOutline.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: 'forwards' });
      }
    };

    const hoverElements = document.querySelectorAll('a, button, .btn');
    
    const handleMouseEnter = () => {
      if (cursorOutline) {
        cursorOutline.classList.add('cursor-hover');
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorOutline) {
        cursorOutline.classList.remove('cursor-hover');
      }
    };

    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    const createTrail = () => {
      if (!cursorDot) return;
      
      const trail = document.createElement('div');
      trail.className = 'trail';
      document.body.appendChild(trail);
      
      setTimeout(() => {
        trail.style.left = `${cursorDot.offsetLeft + 5}px`;
        trail.style.top = `${cursorDot.offsetTop + 5}px`;
        trail.style.opacity = 1;
        
        setTimeout(() => {
          trail.style.opacity = 0;
          setTimeout(() => {
            if (document.body.contains(trail)) {
              document.body.removeChild(trail);
            }
          }, 500);
        }, 100);
      }, 10);
    };

    let lastTrailTime = 0;
    const handleMouseMoveWithTrail = (e) => {
      handleMouseMove(e);
      const now = Date.now();
      if (now - lastTrailTime > 50) {
        createTrail();
        lastTrailTime = now;
      }
    };

    // 🆕 Click ripple animation
    const handleClick = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'cursor-click';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMoveWithTrail);
    window.addEventListener('click', handleClick); // 🆕

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveWithTrail);
      window.removeEventListener('click', handleClick); // 🆕

      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" id="cursor-dot"></div>
      <div className="cursor-outline" id="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;
