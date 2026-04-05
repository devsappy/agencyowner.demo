import React from 'react';

const painPoints = [
  { title: 'Team Selection Politics', body: 'Frustrated by favoritism or biases affecting your chances of making the team? With the right mindset and strategies, you can focus on your performance and make a compelling case.' },
  { title: 'Performance Pressure', body: 'Feeling the heavy expectations from fans, coaches, and family? Overcoming performance pressure is key to delivering your best when it matters most.' },
  { title: 'Repeated Injuries', body: 'Frustrated by injuries that keep coming back? Break free from this cycle of fear and regain confidence in your physical resilience.' },
  { title: 'Past Failures', body: 'Struggling to move on from past bad performances? Turn your setbacks into comebacks and use them as stepping stones toward future success.' },
  { title: 'Negative Comments', body: 'Discouraging words from others affect you? Build resilience and silence the negativity to stay focused on your goals.' },
  { title: 'Inconsistent Performance', body: 'Struggling to perform consistently at your best? Uncover the strategies to achieve peak performance every single time.' },
  { title: 'Future Uncertainty', body: 'Worried about what the future holds for your sports career? Gain clarity, confidence and control over your path.' },
  { title: "Others' Expectations", body: `Feeling uncertain about your sports career's future? It's time to gain clarity, confidence, and control over your path forward.` },
  { title: 'Unknown Triggers', body: 'Consistently underperforming on certain grounds or against specific teams? Identify and neutralize unknown triggers to propel your career forward.' },
  { title: 'Overthinking & Self-Doubt', body: `Is your game suffering because you can't stop doubting yourself? Strengthen your mental resilience and regain control over your performance.` },
  { title: 'Fear and Anxiety', body: 'Do you freeze up during critical moments or feel overwhelmed by pre-game anxiety? With the right mental strategies, stay calm and confident.' },
];

export default function Vision() {
  return (
    <section className="section section--alt" id="programs">
      <div className="container">

        {/* Vision block */}
        <div className="vision__center">
          <p className="section__label">Our Vision</p>
          <h2 className="section__title" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 16px' }}>
            To be the guiding force behind achieving&nbsp;
            <span style={{ color: '#caff00' }}>Olympic Gold Medal</span> dreams
          </h2>
          <p className="section__sub" style={{ textAlign: 'center', margin: '0 auto' }}>
            Fostering excellence in all areas of life through transformational mindset coaching.
          </p>
        </div>

        {/* Pain Points */}
        <div className="pain__heading-row">
          <p className="section__label">Are You Facing This?</p>
          <h3 className="section__title">
            Are You a Professional Indian Sportsperson,<br />
            Athlete or Preparing for the Olympics?
          </h3>
        </div>

        <div className="pain__grid">
          {painPoints.map((pp, i) => (
            <div key={i} className="pain-card">
              <div className="pain-card__header">
                <span className="pain-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="pain-card__title">{pp.title}</h4>
              </div>
              <p className="pain-card__body">{pp.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="vision__cta">
          <h3 className="vision__cta-title">
            NOW DISCOVER THE NEW YOU<br />
            <span style={{ color: '#caff00' }}>with Asish Kumar Das</span>
          </h3>
          <a href="#contact" className="btn-primary" style={{ fontSize: '15px', padding: '14px 32px' }}>
            Reserve Your Spot — FREE Trial Class
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="vision__cta-note">Limited Spots to maintain Quality — Grab This Offer</p>
        </div>
      </div>
    </section>
  );
}
