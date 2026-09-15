import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { siteInfo } from '../data/services.js';
import { LocationIcon, PhoneIcon, WhatsappIcon, ClockIcon, CheckIcon } from '../data/icons.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import AreaCoverage from '../components/AreaCoverage.jsx';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Get a Free Tree Care Quote in KL & Selangor | TreeCare"
        description="Contact TreeCare directly by phone or WhatsApp for quick quotes on tree removal, trimming, land clearing, landscaping, and emergency tree care in KL & Selangor."
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link to="/">Home</Link> / Contact</div>
          <h1>Get in Touch With Our Tree Care Specialists</h1>
          <p className="lead">
            Contact us directly via WhatsApp or phone. We provide fast assessments, free quotes, and prompt service across KL &amp; Selangor.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-page-layout">
            <div className="contact-main-options">
              {/* WhatsApp Card */}
              <Reveal className="contact-channel-card whatsapp-channel">
                <div className="channel-badge-icon">
                  <WhatsappIcon />
                </div>
                <div className="channel-content">
                  <span className="channel-tag">Fastest Response</span>
                  <h2>WhatsApp Instant Chat</h2>
                  <p>Send photos or video of the tree or land clearing area for a rapid evaluation and quote.</p>
                  <a
                    href={siteInfo.whatsappHref}
                    className="btn btn-primary btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsappIcon />
                    Chat on WhatsApp Now
                  </a>
                </div>
              </Reveal>

              {/* Phone Card */}
              <Reveal className="contact-channel-card phone-channel">
                <div className="channel-badge-icon">
                  <PhoneIcon />
                </div>
                <div className="channel-content">
                  <span className="channel-tag">Direct Call</span>
                  <h2>Phone Call Consultation</h2>
                  <p>Speak directly with our team for emergency tree situations, complex projects, or urgent bookings.</p>
                  <a href={siteInfo.phoneHref} className="btn btn-secondary btn-lg">
                    <PhoneIcon />
                    Call {siteInfo.phoneDisplay}
                  </a>
                </div>
              </Reveal>

              {/* Service Commitments */}
              <Reveal className="contact-benefits-card">
                <h3>Why Contact Us?</h3>
                <ul className="contact-benefits-list">
                  <li>
                    <CheckIcon />
                    <span><strong>Free Quotes &amp; Honest Advice</strong> &mdash; No hidden charges.</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span><strong>Prompt Response</strong> &mdash; Same-day quotes and flexible scheduling.</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span><strong>Equipped &amp; Insured</strong> &mdash; Safe operations with modern tools.</span>
                  </li>
                </ul>
              </Reveal>
            </div>

            {/* Sidebar Location & Map */}
            <div className="contact-side-info">
              <Reveal className="contact-side-card">
                <h3>KL &amp; Selangor Operations Hub</h3>

                <div className="side-info-item">
                  <div className="info-icon"><LocationIcon /></div>
                  <div>
                    <strong>Service Address</strong>
                    <p>{siteInfo.address}</p>
                  </div>
                </div>

                <div className="side-info-item">
                  <div className="info-icon"><ClockIcon /></div>
                  <div>
                    <strong>Operating Hours</strong>
                    <p>Monday &ndash; Sunday: 8:00 AM &ndash; 7:00 PM<br /><em>24/7 Emergency Tree Care Available</em></p>
                  </div>
                </div>

                <div className="side-map-container">
                  <div className="map-placeholder">
                    <MapEmbed />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE COVERAGE */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <h2>Areas We Cover Across KL &amp; Selangor</h2>
          </Reveal>
          <AreaCoverage />
        </div>
      </section>
    </>
  );
}
