import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import ServiceHero from '../components/ServiceHero.jsx';
import ReviewSection from '../components/ReviewSection.jsx';
import EmergencySection from '../components/EmergencySection.jsx';
import ProjectGallery from '../components/ProjectGallery.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services, siteInfo } from '../data/services.js';
import servicesHeroBg from '../asset/03.jpeg';

export default function Services() {
  return (
    <>
      <Seo
        title="Tree Services in KL & Selangor | Starts from RM 500 | TreeCare"
        description="Explore our complete tree cutting, trimming, landscaping, root removal, and emergency tree care services in KL & Selangor. Starts from RM 500. 15+ years experience, 5-star reviews."
      />

      {/* HERO WITH BACKGROUND IMAGE & TRUST POINTS */}
      <ServiceHero
        breadcrumbs={<><Link to="/">Home</Link> / Services</>}
        title="Tree Cutting & Property Services in KL & Selangor"
        description="Complete tree care and property maintenance solutions delivered with safety, speed, and seasoned craftsmanship for residential and commercial properties across KL & Selangor."
        bgImage={servicesHeroBg}
      />

      {/* VERIFIED REVIEWS SECTION */}
      <ReviewSection
        serviceKey="general"
        title="Verified Client Reviews in KL & Selangor"
        subtitle="Rated 4.9/5 stars based on 280+ real homeowners and commercial clients across Kuala Lumpur & Selangor."
      />

      {/* ALL SERVICES GRID */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>Professional Tree Cutting &amp; Landscaping Services</h2>
            <p>From hazardous single-tree takedowns to full land clearing and lawn upkeep, our certified crew handles every job with precision.</p>
          </Reveal>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} id={service.id} />
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY SERVICE SECTION */}
      <EmergencySection
        title="24/7 Emergency Tree Care & Hazardous Branch Removal"
        subtitle="Prompt emergency dispatch for fallen trees, split limbs over roofs or cars, storm clean-up, and urgent hazard stabilization throughout KL & Selangor."
        serviceType="emergency tree cutting and hazard dispatch"
      />

      {/* OUR RECENT PROJECTS (4x3 GALLERY) */}
      <ProjectGallery
        title="Our Recent Projects in KL & Selangor"
        subtitle="Explore our recent tree removals, branch trimming, root extractions, and landscape transformations across KL & Selangor."
      />

      {/* FINAL CTA */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="final-cta">
            <h2>Not Sure Which Service You Need?</h2>
            <p>Send us a few details or photos via WhatsApp, and our specialists will give you an instant, accurate quotation starting from RM 500.</p>
            <div className="final-cta-ctas">
              <a href={siteInfo.whatsappHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              <a href={siteInfo.phoneHref} className="btn btn-outline">Call Now</a>
              <Link to="/contact" className="btn btn-outline">Contact Details</Link>
            </div>
            <p className="phone-line"><a href={siteInfo.phoneHref}>{siteInfo.phoneDisplay}</a></p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
