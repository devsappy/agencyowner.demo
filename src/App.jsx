import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import About from './components/About';
import VisionHero from './components/VisionHero';
import Vision from './components/Vision';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <VisionHero />
      <Vision />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
