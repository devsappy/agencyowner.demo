import React from 'react';

const marqueeItems = [
  'AI Strategy', 'Predictive Analytics', 'Content Automation', 'SEO & GEO', 'Paid Media', 'Brand Intelligence',
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Concentric rings */}
      <div className="hero__rings" />

      {/* Main body row */}
      <div className="hero__body">

        {/* ── Left sidebar ── */}
        <div className="sidebar">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div className="sidebar__dots">
              {[...Array(9)].map((_, i) => <div key={i} className="sidebar__dot" />)}
            </div>
            <span
              className="sidebar__text"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              hello@nathanai.com
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span
              className="sidebar__text"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Scroll Down
            </span>
            <svg width="12" height="36" viewBox="0 0 12 36" style={{ color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>
              <line x1="6" y1="0" x2="6" y2="28" stroke="currentColor" strokeWidth="1.5" />
              <polyline points="2,24 6,32 10,24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* ── Center content ── */}
        <div className="hero__center">
          <p className="hero__eyebrow" style={{ fontSize: '1.15rem', lineHeight: 1.3 }}>
            Nathan AI
          </p>
          <div className="hero__tag-line">
            <span className="hero__tag" style={{ fontSize: '1.05rem' }}>
              AI-Powered Marketing Agency&nbsp;↗
            </span>
            <div className="hero__tag-divider" />
          </div>

          <h1 className="hero__heading" style={{ fontSize: '4.5rem', lineHeight: 1.05 }}>
            AI-Powered Marketing Agency
          </h1>
          <p className="hero__subheading" style={{ fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '42rem' }}>
            AI meets bold creative strategy to deliver measurable marketing results worldwide.
          </p>

          <div className="hero__cta-row">
            {/* Squiggle */}
            <svg width="48" height="48" viewBox="0 0 80 80" fill="none" style={{ color: 'rgba(255,255,255,0.8)', flexShrink: 0, marginRight: '-8px' }}>
              <path d="M 10 25 C 20 10, 55 5, 65 35 C 70 50, 60 65, 45 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M 40 68 L 48 76 L 56 68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <button className="play-btn" aria-label="Watch our showreel">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </button>

            <p className="hero__cta-label">Watch<br />Showreel</p>

            <div className="hero__sphere" />
          </div>
        </div>

        {/* ── Portrait ── */}
        <div className="hero__portrait">
          <img src="/images/akd.png" alt="Nathan Cole – Founder, Nathan AI" />
        </div>

        {/* ── Right sidebar ── */}
        <div className="sidebar">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span className="sidebar__text" style={{ writingMode: 'vertical-rl' }}>Follow Me</span>
            <svg width="12" height="36" viewBox="0 0 12 36" style={{ color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>
              <line x1="6" y1="0" x2="6" y2="28" stroke="currentColor" strokeWidth="1.5" />
              <polyline points="2,24 6,32 10,24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            {[
              <><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></>,
              <><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></>,
              <><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></>,
            ].map((icon, i) => (
              <a key={i} href="#" style={{ color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="hero__marquee-wrap">
        <div className="hero__marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="hero__marquee-item">
              <span className="hero__marquee-star"><svg width="14" height="14" viewBox="0 0 24 24" fill="#000"><path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" /></svg></span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
