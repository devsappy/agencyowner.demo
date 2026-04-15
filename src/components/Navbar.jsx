import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['HOME', 'ABOUT', 'WORK', 'SERVICES', 'RESULTS', 'CONTACT'];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar__logo">
        <div className="navbar__logo-badge">N</div>
        <span className="navbar__logo-name">
          Nathan AI
        </span>
      </div>

      <ul className="navbar__links">
        {links.map((link, i) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={i === 0 ? 'active' : ''}
              style={{ fontSize: '1.05rem' }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__cta">
        <a href="#contact" className="btn-primary">
          Get Started
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
