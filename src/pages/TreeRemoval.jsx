import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import FaqItem from '../components/FaqItem.jsx';
import AreaCoverage from '../components/AreaCoverage.jsx';
import { siteInfo } from '../data/services.js';
import {
  CheckIcon, WhatsappIcon, ShieldIcon, LocationIcon, BoltIcon, HouseShieldIcon,
} from '../data/icons.jsx';

const removalFaqs = [
  { q: 'How much does tree removal cost in Puchong?', a: 'Cost depends on the size, condition and location of the tree, along with access to the site. We assess each property before providing a clear, itemised quote.' },
  { q: 'Will you clean up after removing the tree?', a: 'Yes. Site clean-up is part of our tree removal process, so branches and debris are cleared away once the work is complete.' },
  { q: 'Do you remove the stump as well?', a: "Stump and root removal can be arranged separately — let us know during your assessment if you'd like this included." },
];

export default function TreeRemoval() {
  return (
    <>
      <Seo
        title="Professional Tree Removal Services in Puchong | TreeCare Puchong"
        description="Safe, professional tree removal in Puchong, Selangor for dangerous, damaged or unwanted trees. Get a free quote from our experienced local team."
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link to="/">Home</Link> / <Link to="/services">Services</Link> / Tree Removal</div>
          <span className="eyebrow">Tree Removal Puchong</span>
          <h1>Professional Tree Removal Services in Puchong</h1>
          <p className="lead">Need a dangerous, damaged or unwanted tree removed? Our professional tree removal service helps property owners safely clear problematic trees while minimizing risk to surrounding structures and outdoor areas.</p>
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
              src="https://placehold.co/800x680/1F5D42/F7F8F4?text=Tree+Removal+In+Progress"
              alt="Arborist performing controlled tree removal on a Puchong property"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
          <Reveal>
            <span className="eyebrow">What Is Tree Removal?</span>
            <h2>Controlled, Section-by-Section Tree Removal</h2>
            <p>Tree removal is the process of safely cutting down and clearing a tree that is dead, dying, structurally unsound or no longer wanted on a property. Depending on the tree's size and surroundings, it may be removed in one piece or taken down carefully in sections to protect nearby structures, power lines, vehicles and landscaping.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Signs To Watch For</span>
            <h2>When Should a Tree Be Removed?</h2>
            <p>A tree may need to be removed when it presents a safety risk or is no longer viable. Common situations include:</p>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><BoltIcon /></span>
              <h3>Dead or Dying Trees</h3>
              <p>Trees that are no longer healthy and pose a risk of falling branches or trunk failure.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Structural Damage</h3>
              <p>Trees with cracked trunks, leaning growth, or damage from storms and strong winds.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Too Close to Structures</h3>
              <p>Trees growing too close to buildings, driveways, fences or power lines.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><LocationIcon /></span>
              <h3>Preparing for Construction</h3>
              <p>Trees that need to be cleared to make way for renovation, extension or new landscaping.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Approach</span>
            <h2>Our Tree Removal Process</h2>
          </Reveal>
          <div className="process-grid">
            {[
              ['01', 'Site Assessment', 'We inspect the tree, the surrounding area and access points to plan the safest approach.'],
              ['02', 'Clear Quotation', 'You receive a clear quote outlining the scope of work before anything begins.'],
              ['03', 'Safe Removal', 'The tree is removed using appropriate techniques and equipment, protecting your property throughout.'],
              ['04', 'Site Clean-Up', 'Branches and debris are cleared away, leaving the area tidy once work is complete.'],
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
            <h2>Benefits of Professional Tree Removal</h2>
            <ul className="check-list">
              <li><CheckIcon />Reduces the risk of falling branches or trunk failure</li>
              <li><CheckIcon />Protects buildings, vehicles and other property</li>
              <li><CheckIcon />Frees up space for landscaping or construction</li>
              <li><CheckIcon />Carried out with safety-focused equipment and technique</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
          </Reveal>
          <Reveal className="img-frame">
            <img
              src="https://placehold.co/800x680/5F8F62/F7F8F4?text=Safety+Equipment"
              alt="Tree removal crew using safety equipment in Puchong"
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
            <h2>Why Choose Our Tree Removal Team?</h2>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Safety First</h3>
              <p>We prioritize safe working practices and careful handling of every removal project.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><LocationIcon /></span>
              <h3>Local Knowledge</h3>
              <p>Based in Puchong, we understand local properties and access considerations.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Property Protection</h3>
              <p>We work carefully around buildings, vehicles, gardens, fences and other property.</p>
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
            {removalFaqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" id="service-area">
        <div className="container area-wrap">
          <Reveal>
            <span className="eyebrow">Service Area</span>
            <h2>Tree Removal in Puchong &amp; Surrounding Areas</h2>
            <p className="muted">We provide tree removal services across Puchong and nearby areas throughout Selangor.</p>
            <div className="area-chips">
              <span className="area-chip primary"><LocationIcon />Puchong</span>
              <span className="area-chip"><LocationIcon />Taman Bukit Kinara</span>
              <span className="area-chip"><LocationIcon />Surrounding Selangor Areas</span>
            </div>
          </Reveal>
          <Reveal className="map-card">
            <div className="map-placeholder">
              <LocationIcon />
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
            <h2>Ready to Request a Quote for Tree Removal?</h2>
            <p>Tell us about the tree and your property, and we'll help you find the right solution.</p>
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
