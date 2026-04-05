import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['HOME', 'ABOUT', 'PROGRAMS', 'SERVICES', 'TESTIMONIAL', 'CONTACT'];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar__logo">
        <div className="navbar__logo-badge">M</div>
        <span className="navbar__logo-name">Mind Mentor</span>
      </div>

      <ul className="navbar__links" style={{ display: 'flex' }}>
        {links.map((link, i) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className={i === 0 ? 'active' : ''}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__cta">
        <a href="#contact" className="btn-primary">
          Join Now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
