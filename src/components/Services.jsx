import React from 'react';

const duoCards = [
  {
    number: '01',
    title: 'AI Intelligence Layer',
    body: 'Our AI stack analyzes audience behavior, market signals, and competitor moves to craft strategies that stay one step ahead.',
  },
  {
    number: '02',
    title: 'Creative Execution Engine',
    body: 'We transform AI insights into scroll-stopping campaigns and brand experiences that move people.',
  },
];

const techniques = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#caff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21H4.6c-.56 0-.84 0-1.05-.11a1 1 0 01-.44-.44C3 20.24 3 19.96 3 19.4V3" /><path d="M7 14l4-4 4 4 6-6" /><path d="M17 8h4v4" /></svg>,
    title: 'Predictive Analytics & Forecasting',
    body: 'Anticipate market shifts before they happen. Decisions backed by data, not gut feelings.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#caff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /><circle cx="12" cy="16" r="1" /></svg>,
    title: 'AI Content Generation',
    body: 'On-brand content at scale — ad copy, blogs, and social media powered by fine-tuned language models.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#caff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
    title: 'Smart Audience Targeting',
    body: 'AI-driven segmentation that goes beyond demographics into behavioral intent.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#caff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    title: 'Marketing Automation',
    body: 'Automate workflows and nurture sequences so your team focuses on strategy, not execution.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#caff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M11 8v6" /><path d="M8 11h6" /></svg>,
    title: 'SEO & Generative Engine Optimization',
    body: 'Dominate traditional search and AI answer engines like ChatGPT, Perplexity, and Google AI Overviews.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#caff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
    title: 'Performance & Growth Marketing',
    body: 'Full-funnel paid media with AI bid optimization and real-time budget allocation for maximum ROAS.',
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">

        {/* Duo Effect */}
        <p className="section__label">What Makes Us Different</p>
        <h2 className="section__title">
          The <span style={{ color: '#caff00' }}>"AI + Human"</span> Advantage
        </h2>
        <p className="section__sub">
          AI intelligence paired with human creativity — the two forces behind unstoppable marketing.
        </p>
        <div className="duo__grid">
          {duoCards.map((card) => (
            <div key={card.number} className="duo-card">
              <div className="duo-card__bg-num">{card.number}</div>
              <span className="duo-card__num">{card.number}</span>
              <h3 className="duo-card__title">{card.title}</h3>
              <p className="duo-card__body">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Techniques */}
        <p className="section__label">Our Services</p>
        <h2 className="section__title">How We Drive Growth</h2>
        <p className="section__sub">
          AI-powered services to attract, convert, and retain your ideal customers.
        </p>
        <div className="tech__grid">
          {techniques.map((t, i) => (
            <div key={i} className="tech-card">
              <span className="tech-card__icon">{t.icon}</span>
              <h4 className="tech-card__title">{t.title}</h4>
              <p className="tech-card__body">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
