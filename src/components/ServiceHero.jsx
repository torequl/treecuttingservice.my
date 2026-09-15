import { siteInfo } from '../data/services.js';
import {
  WhatsappIcon, PhoneIcon, CheckIcon, StarIcon, ShieldIcon, ClockIcon, BoltIcon,
} from '../data/icons.jsx';

export default function ServiceHero({
  breadcrumbs,
  title,
  description,
  bgImage,
  priceHighlight = null,
  priceHighlight1 = null,
}) {
  const trustPoints = [
    { label: '15+ year experience', icon: ClockIcon },
    { label: 'No middle man fees', icon: ShieldIcon },
    { label: '5 Star Review', icon: StarIcon },
    { label: 'Affordable price guarantee', icon: CheckIcon },
    { label: 'Emergency Service available', icon: BoltIcon },
  ];

  return (
    <section
      className="service-hero-with-bg vh-100"
      style={bgImage ? { backgroundImage: `linear-gradient(rgba(18, 38, 28, 0.50), rgba(14, 28, 21, 0.60)), url(${bgImage})` } : {}}
    >
      <div className="container">
        {breadcrumbs && (
          <div className="breadcrumbs breadcrumbs-light">
            {breadcrumbs}
          </div>
        )}

        <div className="service-hero-content">
          <h1 className="service-hero-title">{title}</h1>
          <p className="service-hero-lead">{description}</p>

          {priceHighlight && (
            <div className="hero-price-badge-wrap">
              <span className="price-highlight-pill">
                <span className="price-dot"></span>
                {priceHighlight}
              </span>
            </div>
          )}

          {priceHighlight1 && (
            <div className="hero-price-badge-wrap">
              <span className="price-highlight-pill">
                <span className="price-dot"></span>
                {priceHighlight1}
              </span>
            </div>
          )}

          <div className="service-hero-ctas">
            <a
              href={siteInfo.whatsappHref}
              className="btn btn-whatsapp-hero btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon />
              WhatsApp Us
            </a>
            <a href={siteInfo.phoneHref} className="btn btn-outline-light btn-lg">
              <PhoneIcon />
              Call Now
            </a>
          </div>

          {/* 5 Required Trust Points */}
          <div className="hero-trust-bar">
            <span className="trust-bar-label">Why Choose Us:</span>
            <div className="hero-trust-grid">
              {trustPoints.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="hero-trust-item">
                    <span className="trust-item-icon">
                      <IconComponent />
                    </span>
                    <span className="trust-item-text">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
