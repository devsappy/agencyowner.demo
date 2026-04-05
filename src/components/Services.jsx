import React from 'react';

const duoCards = [
  {
    number: '01',
    title: 'Physical Priming',
    body: `Leveraging conscious physical movement techniques inspired by Asish Kumar Das's expertise as a Level 6 Government of India Accredited Sports Conditioning Coach.`,
  },
  {
    number: '02',
    title: 'Subconscious Reprogramming',
    body: 'Using Neuro-Linguistic Programming (NLP) and advanced psychological tools to unlock the immense potential of the subconscious mind.',
  },
];

const techniques = [
  { icon: '🧘', title: 'Mindfulness Meditation & Quantum Breathing', body: 'Achieve peace and clarity by calming your mind and transforming stress into positive energy.' },
  { icon: '🧠', title: 'Neuro-Linguistic Programming (NLP)', body: 'Overcome negative thought patterns and reframe your beliefs to unlock your true potential.' },
  { icon: '💬', title: 'Cognitive Behavioral Therapy (CBT)', body: 'Address the root causes of anxiety, depression, and other mental health challenges effectively.' },
  { icon: '⚡', title: 'Physical Fitness & Priming Exercises', body: 'Rebuild your physical strength and vitality with exercises designed to enhance your mental state.' },
  { icon: '🔄', title: 'Neural Adaptation Techniques', body: 'Build mental resilience and adaptability to overcome any challenge you face in life.' },
  { icon: '🚀', title: 'Rapid Transformational Therapy', body: 'A solution-focused therapy combining CBT, NLP and deep relaxation for rapid mindset change.' },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">

        {/* Duo Effect */}
        <p className="section__label">What Makes Us Unique</p>
        <h2 className="section__title">
          The <span style={{ color: '#caff00' }}>"Duo Effect"</span> Training Approach
        </h2>
        <p className="section__sub">
          At Mind Mentor Institute, we specialize in a powerful two-part method that combines body and mind for lasting transformation.
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
        <p className="section__label">Our Methods</p>
        <h2 className="section__title">Transformational Techniques</h2>
        <p className="section__sub">
          Our unique, integrated approach combines the latest in psychological and physical wellness to help you unlock your potential.
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
