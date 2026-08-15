import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { siteInfo } from '../data/services.js';
import { CheckIcon, ShieldIcon, PeopleIcon, ToolboxIcon, LocationIcon, ClockIcon, HouseShieldIcon } from '../data/icons.jsx';
import aboutImage from '../asset/10.jpeg';

export default function About() {
  return (
    <>
      <Seo
        title="About Us | TreeCare Puchong"
        description="Learn about TreeCare Puchong, a local tree cutting and property care company serving homeowners and businesses in Puchong, Selangor with safe, professional tree services."
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link to="/">Home</Link> / About</div>
          <span className="eyebrow">About Our Tree Services</span>
          <h1>Professional Tree Care, Rooted in Puchong</h1>
          <p className="lead">We help homeowners, property managers and businesses across Puchong take care of their trees and land — safely, professionally and without the stress.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="img-frame">
            <img
              src={aboutImage}
              alt="TreeCare Puchong team assessing a tree on a residential property"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <h2>Safety at the Core of Everything We Do</h2>
            <p>We provide professional tree cutting and property care services for homeowners and businesses in Puchong and surrounding areas. Whether you need a dangerous tree removed, overgrown branches trimmed, unwanted roots cleared or land prepared for a new project, our team is ready to help.</p>
            <p>Tree work carries real risk to people and property, so we approach every job methodically — assessing the site, planning the safest method of work, and protecting structures, gardens and pathways throughout the project.</p>
            <ul className="check-list">
              <li><CheckIcon />Careful &amp; Safety-Focused Work</li>
              <li><CheckIcon />Residential &amp; Commercial Services</li>
              <li><CheckIcon />Reliable Local Service</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt" id="why-choose-us">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Difference</span>
            <h2>Why Choose Our Tree Care Services?</h2>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Safety First</h3>
              <p>Tree work can be dangerous. We prioritize safe working practices and careful handling of every project.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><PeopleIcon /></span>
              <h3>Professional Service</h3>
              <p>Get dependable tree care with a professional approach from enquiry to project completion.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><ToolboxIcon /></span>
              <h3>Complete Tree Solutions</h3>
              <p>From trimming and removal to roots, land clearing and emergency care, we provide a wide range of services.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><LocationIcon /></span>
              <h3>Local Service</h3>
              <p>Based in Puchong, we understand the needs of local homeowners and businesses.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><ClockIcon /></span>
              <h3>Fast Response</h3>
              <p>Need urgent help with a damaged or fallen tree? Contact us for emergency tree care.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Property Protection</h3>
              <p>We work carefully around buildings, vehicles, gardens, fences and other property.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="final-cta">
            <h2>Need a Tree Removed, Trimmed or Cleared?</h2>
            <p>Tell us what you need and we'll help you find the right solution for your property.</p>
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
