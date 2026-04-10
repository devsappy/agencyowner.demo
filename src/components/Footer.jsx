import React from 'react';

const navLinks = ['Home', 'About', 'Work', 'Services', 'Contact'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__card">
        {/* Decorative blobs */}
        <div className="footer__blob footer__blob--1" />
        <div className="footer__blob footer__blob--2" />
        <div className="footer__blob footer__blob--3" />

        <div className="footer__card-inner">
          {/* Left column */}
          <div className="footer__left">
            <div className="footer__logo">
              <div>
                <p className="footer__logo-name" style={{ fontSize: '1.75rem', lineHeight: 1.1 }}>
                  Nathan AI
                </p>
                <p className="footer__logo-sub" style={{ fontSize: '1.1rem', lineHeight: 1.3 }}>
                  AI-Powered Marketing Agency
                </p>
              </div>
            </div>

            <p
              className="footer__mission"
              style={{ fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '40rem' }}
            >
              We combine cutting-edge artificial intelligence with bold creative strategy to deliver measurable marketing results for brands worldwide.
            </p>

            <div className="footer__socials">
              {/* LinkedIn */}
              <a href="#" className="footer__social" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="footer__social" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="footer__social" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Right column — nav links */}
          <nav className="footer__nav">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="footer__nav-link"
                style={{ fontSize: '1.15rem' }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            Copyright {new Date().getFullYear()} &copy; Nathan AI. All Rights Reserved.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <span className="footer__legal-dot" />
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
