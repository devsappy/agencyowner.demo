import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <div className="footer__logo-badge">M</div>
          <div>
            <p className="footer__logo-name">Mind Mentor Institute</p>
            <p className="footer__logo-sub">Pan India Online &amp; Offline</p>
          </div>
        </div>
        <ul className="footer__links">
          {['HOME', 'ABOUT', 'PROGRAMS', 'SERVICES', 'CONTACT'].map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
        <p className="footer__copy">
          © {new Date().getFullYear()} Mind Mentor Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
