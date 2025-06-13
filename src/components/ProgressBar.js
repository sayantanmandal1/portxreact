import React, { useEffect } from 'react';

const ProgressBar = () => {
  useEffect(() => {
    const progressBar = document.getElementById('progress-bar');
    
    const handleScroll = () => {
      if (!progressBar) return;
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" id="progress-bar"></div>
    </div>
  );
};

export default ProgressBar;