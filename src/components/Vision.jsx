import React from 'react';

const painPoints = [
  { title: 'Low ROAS', body: 'AI optimizes every dollar with predictive bidding and targeting that converts.', size: 'wide' },
  { title: 'Content Bottleneck', body: 'Generate on-brand copy, visuals, and videos at scale with our AI engine.', size: 'tall' },
  { title: 'Data Overload', body: 'Turn scattered dashboards into a single source of truth with actionable insights.' },
  { title: 'Inconsistent Leads', body: 'Predictive lead scoring and nurture automation for a steady qualified pipeline.' },
  { title: 'Brand Invisibility', body: 'SEO & GEO strategies that ensure your brand gets cited and clicked.', size: 'wide' },
  { title: 'Wasted Ad Spend', body: 'AI-driven programmatic bidding eliminates waste and maximizes impact.' },
  { title: 'Scaling Challenges', body: 'Adaptive systems that scale growth without scaling headcount.', size: 'tall' },
  { title: 'Attribution Gaps', body: 'Multi-touch attribution reveals the true ROI of every touchpoint.' },
  { title: 'Slow Time-to-Market', body: 'AI workflows compress ideation-to-launch timelines by up to 70%.' },
  { title: 'Churn & Retention', body: 'AI lifecycle marketing keeps customers engaged and coming back.', size: 'wide' },
  { title: 'Competitor Blind Spots', body: 'Intelligence tools that monitor and help you outmaneuver the competition.' },
];

export default function Vision() {
  return (
    <section className="section section--alt" id="programs">
      <div className="container">

        {/* Pain Points */}
        <div className="pain__heading-row">
          <p className="section__label">Sound Familiar?</p>
          <h3 className="section__title">
            Marketing Challenges That Are<br />
            Holding Your Growth Back
          </h3>
        </div>

        <div className="pain__bento">
          {painPoints.map((pp, i) => (
            <div key={i} className={`pain-card${pp.size ? ` pain-card--${pp.size}` : ''}`}>
              <span className="pain-card__num">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="pain-card__title">{pp.title}</h4>
              <p className="pain-card__body">{pp.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="vision__cta">
          <h3 className="vision__cta-title">
            READY TO OUTMARKET<br />
            <span style={{ color: '#caff00' }}>your competition with AI?</span>
          </h3>
          <a href="#contact" className="btn-primary" style={{ fontSize: '15px', padding: '14px 32px' }}>
            Book a Free Strategy Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="vision__cta-note">Limited onboarding slots each month — Claim yours now</p>
        </div>
      </div>
    </section>
  );
}
