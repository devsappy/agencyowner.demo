import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Awards from './components/Awards';
import About from './components/About';
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
      <Awards />
      <About />
      <Vision />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
