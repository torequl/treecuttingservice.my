import Reveal from './Reveal.jsx';
import { StarIcon, CheckIcon } from '../data/icons.jsx';
import { serviceReviews } from '../data/services.js';

export default function ReviewSection({
  serviceKey = 'general',
  title = 'Verified Customer Reviews in KL & Selangor',
  subtitle = 'Rated 4.9/5 stars based on 280+ real homeowners and property managers across Kuala Lumpur & Selangor.',
  customReviews = null,
}) {
  const reviews = customReviews || serviceReviews[serviceKey] || serviceReviews.general;

  return (
    <section className="section section-reviews-hero">
      <div className="container">
        <div className="reviews-trust-bar">
          <Reveal className="reviews-trust-header">
            <div className="reviews-rating-pill">
              <div className="stars-row">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="rating-score">4.9 / 5.0</span>
              <span className="rating-divider">•</span>
              <span className="rating-source">Google &amp; WhatsApp Verified</span>
            </div>
            <h2>{title}</h2>
            <p className="reviews-subtitle">{subtitle}</p>
          </Reveal>
        </div>

        <div className="review-cards-grid">
          {reviews.map((r, idx) => (
            <Reveal className="review-card-item" key={r.name || idx}>
              <div className="review-card-top">
                <div className="stars-row">
                  {Array.from({ length: r.rating || 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="verified-badge">
                  <CheckIcon />
                  <span>{r.date || 'Verified Client'}</span>
                </span>
              </div>

              <p className="review-quote">{r.quote}</p>

              <div className="review-author-wrap">
                <div className="review-avatar">{r.initials}</div>
                <div className="review-meta">
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
