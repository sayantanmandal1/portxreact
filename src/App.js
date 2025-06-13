import React, { useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ProgressBar from './components/ProgressBar';
import BackgroundCanvas from './components/BackgroundCanvas';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Initialize GSAP animations after component mounts
    const timer = setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.classList.add('fade-out');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Loader />
      <CustomCursor />
      <ProgressBar />
      <BackgroundCanvas />
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;