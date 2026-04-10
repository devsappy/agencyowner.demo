import React from 'react';

const courses = [
  { id: 1, title: 'AI Marketing Masterclass', subtitle: 'Campaign strategy, audience targeting, and performance optimization with AI.', image: '/images/c1.jpeg' },
  { id: 2, title: 'SEO & Generative Engine Optimization', subtitle: 'Rank in traditional search and AI answer engines like ChatGPT and Perplexity.', image: '/images/c2.jpeg' },
  { id: 3, title: 'Content Automation & AI Copywriting', subtitle: 'On-brand content at scale using language models and automation workflows.', image: '/images/c3.jpeg' },
];

export default function Courses() {
  return (
    <section className="section section--alt" id="courses">
      <div className="container">
        <p className="section__label">Our Courses</p>
        <h2 className="section__title">
          Learn AI Marketing from the <span style={{ color: '#caff00' }}>Best</span>
        </h2>
        <p className="section__sub">
          Master the strategies powering next-gen marketing.
        </p>

        <div className="courses__grid">
          {courses.map((course) => (
            <div key={course.id} className="course-banner">
              <img src={course.image} alt={course.title} className="course-banner__img" />
              <div className="course-banner__info">
                <h3 className="course-banner__title">{course.title}</h3>
                <p className="course-banner__sub">{course.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="courses__quote">
          <span className="courses__quote-mark">"</span>
          The future belongs to those who work with AI — not against it.
        </blockquote>
      </div>
    </section>
  );
}
