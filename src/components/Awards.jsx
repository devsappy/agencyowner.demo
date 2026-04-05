import React, { useState } from 'react';

const awards = [
  { year: '2025', title: 'Banga Shreshtha Samman', subtitle: 'Excellence in Education' },
  { year: '2025', title: 'The Inspiring Educator of the Year', subtitle: 'National Recognition' },
  { year: '2024', title: 'Seva Utkarsha Samman', subtitle: 'Social Contribution' },
  { year: '2025', title: 'Best Innovative Teacher Award', subtitle: 'Innovation in Teaching' },
  { year: '——',  title: 'Doordarshan Speaker', subtitle: 'National Television' },
];

const certificates = [
  { src: '/images/Picture4.jpg',  label: 'Certificate of Achievement' },
  { src: '/images/Picture5.png',  label: 'Certificate of Recognition' },
  { src: '/images/Picture6.png',  label: 'Award Certificate' },
  { src: '/images/Picture7.jpg',  label: 'Honour Certificate' },
  { src: '/images/Picture8.jpg',  label: 'Excellence Award' },
  { src: '/images/Picture9.jpg',  label: 'National Recognition' },
  { src: '/images/Picture10.jpg', label: 'Achievement Certificate' },
];

export default function Awards() {
  const [lightbox, setLightbox] = useState(null); // index of open image

  const prev = () => setLightbox(i => (i - 1 + certificates.length) % certificates.length);
  const next = () => setLightbox(i => (i + 1) % certificates.length);

  return (
    <>
      <section className="section section--alt" id="about">
        <div className="container">
          <div className="awards__header">
            <div>
              <p className="section__label">Recognition &amp; Honours</p>
              <h2 className="section__title" style={{ marginBottom: 0 }}>Awards &amp; Honors</h2>
            </div>
            <p className="awards__header-sub">
              Nationally recognised for transformative contributions to education, psychology, and sports coaching.
            </p>
          </div>
          <div className="awards__grid">
            {awards.map((a, i) => (
              <div key={i} className="award-card">
                <span className="award-card__year">{a.year}</span>
                <p className="award-card__title">{a.title}</p>
                <p className="award-card__sub">{a.subtitle}</p>
              </div>
            ))}
          </div>

          {/* ── Certificate Gallery ── */}
          <div className="cert__header">
            <p className="section__label" style={{ marginTop: '64px' }}>Official Documentation</p>
            <h3 className="cert__title">Achievement Certificates</h3>
            <p className="cert__sub">Click any certificate to view full-size</p>
          </div>
          <div className="cert__grid">
            {certificates.map((c, i) => (
              <button
                key={i}
                className="cert__card"
                onClick={() => setLightbox(i)}
                aria-label={`View ${c.label}`}
              >
                <div className="cert__img-wrap">
                  <img src={c.src} alt={c.label} className="cert__img" loading="lazy" />
                  <div className="cert__overlay">
                    <span className="cert__zoom-icon">⊕</span>
                  </div>
                </div>
                <p className="cert__label">{c.label}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous">‹</button>
            <img
              src={certificates[lightbox].src}
              alt={certificates[lightbox].label}
              className="lightbox__img"
            />
            <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next">›</button>
            <p className="lightbox__caption">{certificates[lightbox].label} — {lightbox + 1} / {certificates.length}</p>
          </div>
        </div>
      )}
    </>
  );
}
