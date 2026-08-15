import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services, siteInfo } from '../data/services.js';

export default function Services() {
  return (
    <>
      <Seo
        title="Tree Services in Puchong | Removal, Trimming, Land Clearing & More | TreeCare Puchong"
        description="Explore our tree cutting services in Puchong: tree removal, tree trimming, land clearing, landscaping, tree root removal and emergency tree care."
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link to="/">Home</Link> / Services</div>
          <span className="eyebrow">What We Do</span>
          <h1>Tree Cutting &amp; Property Services in Puchong</h1>
          <p className="lead">Complete tree care and property maintenance solutions delivered with safety, care and professionalism for homes and businesses across Puchong.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} id={service.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="final-cta">
            <h2>Not Sure Which Service You Need?</h2>
            <p>Send us a few details or a photo of the tree or area, and we'll help point you in the right direction.</p>
            <div className="final-cta-ctas">
              <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
              <a href={siteInfo.whatsappHref} className="btn btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              <a href={siteInfo.phoneHref} className="btn btn-outline">Call Now</a>
            </div>
            <p className="phone-line"><a href={siteInfo.phoneHref}>{siteInfo.phoneDisplay}</a></p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
