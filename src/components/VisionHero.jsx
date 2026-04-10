import React from 'react';

export default function VisionHero() {
  return (
    <section className="vision-hero" id="vision">
      <div className="vision-hero__glow" />
      <div className="vision-hero__content">
        <p className="section__label" style={{ textAlign: 'center' }}>Our Vision</p>
        <h2 className="vision-hero__title">
          To make every brand<br />
          <span>AI-ready</span> and unstoppable
        </h2>
        <p className="vision-hero__sub">
          We believe the future of marketing is intelligent, automated, and deeply human — all at once.
        </p>
        <div className="vision-hero__line" />
      </div>
    </section>
  );
}
