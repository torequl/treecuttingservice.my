import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { siteInfo } from '../data/services.js';
import { LocationIcon, PhoneIcon } from '../data/icons.jsx';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Get a Free Tree Care Quote in Puchong | TreeCare Puchong"
        description="Contact TreeCare Puchong for a free quote on tree removal, trimming, land clearing, landscaping and emergency tree care in Puchong, Selangor."
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link to="/">Home</Link> / Contact</div>
          <span className="eyebrow">Get In Touch</span>
          <h1>Get in Touch With Our Tree Care Team</h1>
          <p className="lead">Call, WhatsApp, or send us your details below and we'll get back to you about your tree or property service needs.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-wrap">
            <Reveal className="contact-info-card">
              <div className="contact-info-row">
                <span className="icon-badge"><LocationIcon /></span>
                <span><strong>Address</strong><p>{siteInfo.address}</p></span>
              </div>
              <div className="contact-info-row">
                <span className="icon-badge"><PhoneIcon /></span>
                <span><strong>Phone</strong><p>{siteInfo.phoneDisplay}</p></span>
              </div>
              <div className="contact-info-actions">
                <a href={siteInfo.phoneHref} className="btn btn-secondary btn-block">Call Now</a>
                <a href={siteInfo.whatsappHref} className="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </div>
              <div className="map-card" style={{ marginTop: 26 }}>
                <div className="map-placeholder">
                  <LocationIcon />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
