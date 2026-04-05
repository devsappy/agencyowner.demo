import React from 'react';

export default function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <div className="container">

        {/* CTA Banner */}
        <div className="contact__cta-banner">
          <div>
            <p className="contact__cta-label">Get Started Today!</p>
            <h2 className="contact__cta-title">
              Transform your mindset,<br />achieve your dreams.
            </h2>
            <p className="contact__cta-sub">Rise to greatness with Mind Mentor Institute.</p>
          </div>
          <div className="contact__cta-buttons">
            <a href="https://wa.me/918910545280" target="_blank" rel="noopener noreferrer" className="btn-dark">
              Click here to join us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="https://wa.me/918910545280" target="_blank" rel="noopener noreferrer" className="btn-dark-outline">
              Click here to pay
            </a>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="contact__cards">

          {/* Address */}
          <div className="contact-card">
            <div className="contact-card__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#caff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h4 className="contact-card__title">Visit Us</h4>
            <p className="contact-card__text">
              Mind Mentor Institute, ARPANAM<br />
              30, Jatin Das Road, Ichapur, Debitala<br />
              <span style={{ color: 'rgba(255,255,255,0.32)' }}>Landmark: Kalyani Medical, Narikel Bagan</span><br />
              Kolkata, West Bengal — 743144
            </p>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="contact-card__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#caff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.1a19.79 19.79 0 01-3-8.57A2 2 0 012.03 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <h4 className="contact-card__title">Dial or WhatsApp</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['8910545280', '9883261050', '9830467038'].map((num) => (
                <a key={num} href={`tel:+91${num}`} className="contact-card__link">
                  +91 {num}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="contact-card__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#caff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h4 className="contact-card__title">Email Us</h4>
            <a href="mailto:dasasishkumar45@gmail.com" className="contact-card__link" style={{ wordBreak: 'break-all' }}>
              dasasishkumar45@gmail.com
            </a>
            <hr className="contact-card__divider" />
            <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Explore</p>
            <div className="tags">
              {['Education', 'Career', 'Fitness', 'Learning Techniques'].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
