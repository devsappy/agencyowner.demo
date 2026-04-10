import React from 'react';

const stats = [
  { value: '150+', label: 'Brands Scaled' },
  { value: '3.2x', label: 'Avg. ROAS Lift' },
  { value: '$40M+', label: 'Ad Spend Managed' },
  { value: '98%', label: 'Client Retention' },
];

const expertise = [
  'AI-Powered Campaign Optimization & Predictive Targeting',
  'Search Engine Optimization (SEO) & Generative Engine Optimization (GEO)',
  'Programmatic Advertising & Real-Time Bidding Strategy',
  'Content Automation & AI Copywriting at Scale',
  'Marketing Analytics, Attribution Modeling & ROI Forecasting',
  'Social Media Intelligence & Sentiment Analysis',
  'Conversion Rate Optimization & A/B Testing Frameworks',
];

const badges = ['Google Partner', 'Meta Business Partner', 'HubSpot Certified', 'AI-First Agency'];

export default function About() {
  return (
    <section className="section" id="about-detail">
      <div className="container">

        {/* Stats row */}
        <div className="about__stats">
          {stats.map((s) => (
            <div key={s.label} className="about__stat">
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <p className="section__label">Who We Are</p>

        <div className="about__grid">
          {/* Left — founder */}
          <div className="about__left">
            <div className="about__founder-card">
              <div className="about__avatar">
                <span className="about__avatar-letter">NC</span>
              </div>
              <div className="about__founder-info">
                <h2 className="about__founder-name">Nathan Cole</h2>
                <p className="about__role">CEO & Chief Strategist</p>
              </div>
            </div>

            <div className="about__bio">
              <p>
                <span>Nathan Cole</span> founded Nathan AI with one conviction: marketing should be as intelligent as the people it serves. A decade of leading growth at Fortune 500s and startups led him to build an agency that brings enterprise-grade AI to brands of every size.
              </p>
              <p>
                The team — data scientists, growth marketers, and creative strategists — works at the intersection of technology and storytelling to replace guesswork with <span>AI-powered precision</span>.
              </p>
            </div>

            <blockquote className="about__quote">
              <span className="about__quote-mark">"</span>
              We don't just run campaigns — we build intelligent marketing ecosystems that learn, adapt, and optimize in real time.
            </blockquote>
          </div>

          {/* Right — capabilities */}
          <div className="about__right">
            <div className="about__capabilities-card">
              <p className="expertise__title">Our Capabilities</p>
              <ul className="expertise__list">
                {expertise.map((item, i) => (
                  <li key={i} className="expertise__item">
                    <span className="expertise__check">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#caff00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="badges">
                {badges.map((b) => (
                  <span key={b} className="badge">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
