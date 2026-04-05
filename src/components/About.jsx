import React from 'react';

const expertise = [
  'General Anxiety Disorder (GAD), Social Anxiety & Performance Anxiety Management',
  'Psychometric Assessment & Interpretation',
  'Psychosomatic Therapy',
  'ADHD Focus, Concentration Development & Mind Mastery Training',
  'Motivational & Transformational Speaking & NLP Master Trainer',
  'Student & Mid-career Professionals Career Counselling',
  'Parenting Coaches Certification (Online & Offline)',
];

const badges = ['UNESCO SEL Expert', 'Skill India Certified', 'Level 6 Govt. Accredited', 'NLP Master Trainer'];

export default function About() {
  return (
    <section className="section" id="about-detail">
      <div className="container">
        <p className="section__label">Our Founder</p>
        <div className="about__grid">
          {/* Left — bio */}
          <div>
            <h2 className="section__title" style={{ marginBottom: '6px' }}>Asish Kumar Das</h2>
            <p className="about__role">
              Counselling Psychologist · Strength &amp; Conditioning Coach · Life &amp; Career Coach
            </p>
            <div className="about__bio">
              <p>
                Our Founder and Director, <span>Asish Kumar Das</span>, is an experienced Mind Mentor whose life journey reflects resilience, discipline, and continuous transformation.
              </p>
              <p>
                With a deep-rooted passion for education, sports, physical conditioning, athlete development, and applied psychological science, he has dedicated his life to integrating these diverse domains and making them accessible to people in a meaningful, practical way.
              </p>
              <p>
                Having personally witnessed nearly five decades of social transformation and changing human behaviour, he consciously embraced modern technology, progressive thinking, and emotional intelligence as essential tools for growth.
              </p>
              <p>
                He is a <span>UNESCO-recognized Social &amp; Emotional Learning (SEL) Expert</span> and a Trainer of Trainers, certified under Management, Entrepreneurship &amp; Professional Skills Council, Skill India, Ministry Of Skills Development, Govt. of India.
              </p>
              <p>
                One of his most notable initiatives was at <span>Ramakrishna Mission Vidyamandir College</span>, where he conceptualized India's first-of-its-kind 6-month "Champion Mindset Course for Sports Performance" — now continuing its 2nd batch.
              </p>
            </div>
          </div>

          {/* Right — expertise */}
          <div>
            <p className="expertise__title">Areas of Expertise</p>
            <ul className="expertise__list">
              {expertise.map((item, i) => (
                <li key={i} className="expertise__item">
                  <span className="expertise__check">✓</span>
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
    </section>
  );
}
