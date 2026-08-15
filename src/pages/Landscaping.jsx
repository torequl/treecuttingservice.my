import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import FaqItem from '../components/FaqItem.jsx';
import AreaCoverage from '../components/AreaCoverage.jsx';
import { siteInfo } from '../data/services.js';
import {
  CheckIcon, WhatsappIcon, ShieldIcon, LocationIcon, HouseShieldIcon, PeopleIcon,
} from '../data/icons.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import landscapingImage from '../asset/13.jpeg';
import benefitImage from '../asset/12.jpeg';

const landscapingFaqs = [
  { q: 'What does your landscaping service include?', a: 'Our landscaping service covers garden design, lawn care, planting, mulching, edging and general tidy-ups to make your outdoor space more attractive and usable.' },
  { q: 'Can you maintain an existing garden?', a: "Yes. We offer one-off tidy-ups as well as ongoing maintenance to keep an existing garden or landscaped area looking its best." },
  { q: 'Do you handle both residential and commercial landscaping?', a: 'Yes. We work on gardens and outdoor areas for homes as well as landscaped grounds for businesses and managed properties.' },
];

export default function Landscaping() {
  return (
    <>
      <Seo
        title="Landscaping Services in Puchong | TreeCare Puchong"
        description="Professional landscaping services in Puchong, Selangor — garden design, planting, lawn care and outdoor tidy-ups. Get a free quote from our local team."
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link to="/">Home</Link> / <Link to="/services">Services</Link> / Landscaping</div>
          <span className="eyebrow">Landscaping Puchong</span>
          <h1>Professional Landscaping Services in Puchong</h1>
          <p className="lead">Want to improve the look and usability of your outdoor space? Our landscaping service helps homeowners and businesses in Puchong create a tidy, attractive and practical garden or grounds area.</p>
          <div className="hero-ctas" style={{ marginTop: 24 }}>
            <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
            <a href={siteInfo.whatsappHref} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="img-frame">
            <img
              src={landscapingImage}
              alt="Landscaping crew shaping a garden bed on a Puchong property"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
          <Reveal>
            <span className="eyebrow">What Is Landscaping?</span>
            <h2>Practical, Attractive Outdoor Spaces</h2>
            <p>Landscaping covers the planning, planting and upkeep of an outdoor space — from garden beds and lawns to pathways and general tidiness. Good landscaping makes a property more enjoyable to use, easier to maintain, and more attractive to residents, visitors or customers.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What We Offer</span>
            <h2>Our Landscaping Services</h2>
            <p>We tailor every landscaping job to the property and the outcome you're after. Common services include:</p>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Garden Design &amp; Planting</h3>
              <p>Planning and planting garden beds, shrubs and greenery suited to your space and climate.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Lawn Care</h3>
              <p>Mowing, edging and general upkeep to keep lawns neat, healthy and even.</p>
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

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Approach</span>
            <h2>Our Landscaping Process</h2>
          </Reveal>
          <div className="process-grid">
            {[
              ['01', 'Site Visit', 'We look at your outdoor space and discuss what you want to achieve.'],
              ['02', 'Clear Quotation', 'You receive a clear quote outlining the scope of work before anything begins.'],
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

      <section className="section section-alt">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Benefits</span>
            <h2>Benefits of Professional Landscaping</h2>
            <ul className="check-list">
              <li><CheckIcon />Improves the appearance and value of your property</li>
              <li><CheckIcon />Makes outdoor spaces more usable and enjoyable</li>
              <li><CheckIcon />Reduces overgrowth and ongoing maintenance headaches</li>
              <li><CheckIcon />Carried out with a tidy, professional finish</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
          </Reveal>
          <Reveal className="img-frame">
            <img
              src={landscapingImage}
              alt="Neatly finished landscaped garden in Puchong"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
        </div>
      </section>

      <section className="section" id="why-choose-us">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why Choose Us</span>
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
              <p>Based in Puchong, we understand what grows well in the local climate.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Property Protection</h3>
              <p>We work carefully around buildings, driveways, fences and existing plants.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="faq">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Questions</span>
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <Reveal className="faq-list">
            {landscapingFaqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" id="service-area">
        <div className="container area-wrap">
          <Reveal>
            <span className="eyebrow">Service Area</span>
            <h2>Landscaping in Puchong &amp; Surrounding Areas</h2>
            <p className="muted">We provide landscaping services across Puchong and nearby areas throughout Selangor and Kuala Lumpur.</p>
            <div className="area-chips">
              <span className="area-chip primary"><LocationIcon />Puchong</span>
              <span className="area-chip"><LocationIcon />Taman Bukit Kinara</span>
              <span className="area-chip"><LocationIcon />Surrounding Selangor Areas</span>
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

      <section className="section section-alt">
        <div className="container">
          <Reveal className="final-cta">
            <h2>Ready to Request a Quote for Landscaping?</h2>
            <p>Tell us about your outdoor space and what you'd like to achieve.</p>
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
