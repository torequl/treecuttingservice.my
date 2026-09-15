import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import ServiceHero from '../components/ServiceHero.jsx';
import ReviewSection from '../components/ReviewSection.jsx';
import EmergencySection from '../components/EmergencySection.jsx';
import ProjectGallery from '../components/ProjectGallery.jsx';
import FaqItem from '../components/FaqItem.jsx';
import AreaCoverage from '../components/AreaCoverage.jsx';
import { siteInfo } from '../data/services.js';
import {
  CheckIcon, ShieldIcon, LocationIcon, HouseShieldIcon, PeopleIcon,
} from '../data/icons.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import landscapingHeroBg from '../asset/12.jpeg';
import landscapingImage from '../asset/13.jpeg';

const landscapingFaqs = [
  { q: 'What does your landscaping service include?', a: 'Our landscaping service covers garden design, lawn care, tree planting, grass cutting, land clearing, mulching, edging and tidy-ups starting from RM 500.' },
  { q: 'Can you maintain an existing garden?', a: "Yes. We offer one-off emergency clean-ups as well as ongoing maintenance to keep your garden or commercial landscape looking pristine year-round." },
  { q: 'Do you handle both residential and commercial landscaping?', a: 'Yes. We work on residential gardens, bungalow compounds, commercial business premises, and managed properties across KL & Selangor.' },
];

export default function Landscaping() {
  return (
    <>
      <Seo
        title="Landscaping & Garden Services in KL & Selangor | Starts from RM 500 | TreeCare"
        description="Professional landscaping, grass cutting, tree planting, and garden restoration in KL & Selangor. Starts from RM 500. 15+ years experience, 5-star reviews, transparent pricing."
      />

      {/* HERO WITH BACKGROUND IMAGE & TRUST POINTS */}
      <ServiceHero
        breadcrumbs={<><Link to="/">Home</Link> / <Link to="/services">Services</Link> / Landscaping</>}
        title="Professional Landscaping Services in KL & Selangor"
        description="Want to improve the beauty, functionality, and value of your outdoor property? Our experienced landscaping team delivers garden design, tree planting, regular grass cutting, and complete site rejuvenations."
        bgImage={landscapingHeroBg}
        priceHighlight="Call for Emergency service"
        priceHighlight1="Get a free quote in 5 min"
      />

      {/* VERIFIED REVIEWS SECTION */}
      <ReviewSection
        serviceKey="landscaping"
        title="Verified Landscaping Reviews in KL & Selangor"
        subtitle="Rated 4.9/5 stars based on 280+ real homeowners and commercial property clients across KL & Selangor."
      />

      {/* WHAT IS LANDSCAPING */}
      <section className="section">
        <div className="container split">
          <Reveal className="img-frame">
            <img
              src={landscapingImage}
              alt="Landscaping crew shaping a garden bed on a property in KL & Selangor"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
          <Reveal>
            <h2>Practical, Attractive Outdoor Spaces</h2>
            <p>Landscaping covers the planning, planting and upkeep of an outdoor space — from garden beds and lawns to pathways and general tidiness. Good landscaping makes a property more enjoyable to use, easier to maintain, and more attractive to residents, visitors or customers.</p>
          </Reveal>
        </div>
      </section>

      {/* EMERGENCY LANDSCAPING & STORM RECOVERY */}
      <EmergencySection
        title="Emergency Garden Debris & Storm Recovery in KL & Selangor"
        subtitle="Rapid clean-up after heavy monsoon rains and tropical storms: clearing fallen tree limbs, flooded overgrown grass, and hazardous garden waste."
        serviceType="storm debris & landscaping recovery"
      />

      {/* WHAT WE OFFER */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <h2>Our Landscaping Services</h2>
            <p>We tailor every landscaping job to the property and the outcome you're after. Common services include:</p>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card" id="tree-planting">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Tree Planting &amp; Garden Design</h3>
              <p>Planning and planting new trees, garden beds, shrubs and greenery suited to your space and climate.</p>
              <div style={{ marginTop: 12 }}>
                <Link to="/tree-planting" className="card-link" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                  View Tree Planting Service &rarr;
                </Link>
              </div>
            </Reveal>
            <Reveal className="benefit-card" id="grass-cutting">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Grass Cutting &amp; Lawn Care</h3>
              <p>Mowing, edging, grass cutting and general upkeep to keep lawns neat, healthy and even.</p>
              <div style={{ marginTop: 12 }}>
                <Link to="/grass-cutting" className="card-link" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                  View Grass Cutting Service &rarr;
                </Link>
              </div>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><PeopleIcon /></span>
              <h3>Outdoor Tidy-Ups</h3>
              <p>Clearing overgrowth, weeding and general clean-up to refresh an outdoor area.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><LocationIcon /></span>
              <h3>Ongoing Maintenance</h3>
              <p>Scheduled visits to keep a garden or landscaped area looking its best year-round.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>Our Landscaping Process</h2>
          </Reveal>
          <div className="process-grid">
            {[
              ['01', 'Site Visit', 'We look at your outdoor space and discuss what you want to achieve.'],
              ['02', 'Clear Quotation', 'You receive a transparent quote starting from RM 500 with no middleman fees.'],
              ['03', 'Landscaping Work', 'Our team carries out the agreed planting, lawn care or tidy-up work.'],
              ['04', 'Final Walkthrough', 'We review the finished space with you and tidy up before we leave.'],
            ].map(([num, title, desc]) => (
              <Reveal className="process-step" key={num}>
                <div className="step-num">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section section-alt">
        <div className="container split">
          <Reveal>
            <h2>Benefits of Professional Landscaping</h2>
            <ul className="check-list">
              <li><CheckIcon />Improves the appearance and value of your property</li>
              <li><CheckIcon />Makes outdoor spaces more usable and enjoyable</li>
              <li><CheckIcon />Reduces overgrowth and ongoing maintenance headaches</li>
              <li><CheckIcon />Carried out with a tidy, professional finish</li>
            </ul>
            <a href={siteInfo.whatsappHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              WhatsApp for Fast Quote
            </a>
          </Reveal>
          <Reveal className="img-frame">
            <img
              src={landscapingImage}
              alt="Neatly finished landscaped garden in KL & Selangor"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" id="why-choose-us">
        <div className="container">
          <Reveal className="section-head">
            <h2>Why Choose Our Landscaping Team?</h2>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Careful, Tidy Work</h3>
              <p>We work carefully and leave the site clean once the job is complete.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><LocationIcon /></span>
              <h3>Local Knowledge</h3>
              <p>Based in KL &amp; Selangor, we understand what grows well in the local climate.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Property Protection</h3>
              <p>We work carefully around buildings, driveways, fences and existing plants.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR RECENT PROJECTS (4x3 GALLERY) */}
      <ProjectGallery
        title="Our Recent Landscaping & Garden Projects"
        subtitle="Explore our 4x3 project showcase of lawn mowing, garden beautification, tree planting, and site clearing across KL & Selangor."
      />

      {/* FAQS */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <Reveal className="section-head">
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <Reveal className="faq-list">
            {landscapingFaqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section" id="service-area">
        <div className="container area-wrap">
          <Reveal>
            <h2>Landscaping in KL &amp; Selangor</h2>
            <p className="muted">We provide landscaping services across Kuala Lumpur and nearby areas throughout Selangor.</p>
            <div className="area-chips">
              <span className="area-chip primary"><LocationIcon />Kuala Lumpur</span>
              <span className="area-chip"><LocationIcon />Selangor</span>
              <span className="area-chip"><LocationIcon />Surrounding Klang Valley</span>
            </div>
          </Reveal>
          <Reveal className="map-card">
            <div className="map-placeholder">
              <MapEmbed />
            </div>
            <div className="map-address">
              <LocationIcon />
              <p>{siteInfo.address}</p>
            </div>
          </Reveal>
        </div>

        <div className="container">
          <AreaCoverage />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="final-cta">
            <h2>Ready to Request a Quote for Landscaping?</h2>
            <p>Tell us about your outdoor space and what you'd like to achieve starting from RM 500.</p>
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
