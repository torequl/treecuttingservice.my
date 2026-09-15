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
  CheckIcon, ShieldIcon, LocationIcon, BoltIcon, HouseShieldIcon,
} from '../data/icons.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import treeRemovalHeroBg from '../asset/08.jpeg';
import treeRemovalImage1 from '../asset/06.jpeg';
import treeRemovalImage2 from '../asset/05.jpeg';

const removalFaqs = [
  { q: 'How much does tree removal cost in KL & Selangor?', a: 'Cost starts from RM 500 depending on the size, trunk diameter, root condition, and location of the tree, along with site access. We assess each property to provide a clear, transparent quote with no middleman fees.' },
  { q: 'What is included in a complete tree removal?', a: 'Complete tree removal includes taking down the entire tree safely, cutting the trunk flush to ground level, sectioning heavy logs, and hauling away all green waste and wood debris.' },
  { q: 'Will you clean up after removing the tree?', a: 'Yes. Full site clean-up and green waste disposal is included, leaving your garden, driveway, and outdoor space tidy and safe.' },
  { q: 'Do you remove the stump as well?', a: 'Stump grinding and deep root removal can be arranged seamlessly alongside tree removal — simply let us know during your inquiry.' },
];

export default function TreeRemoval() {
  return (
    <>
      <Seo
        title="Professional Tree Removal Services in KL & Selangor | Starts from RM 500 | TreeCare"
        description="Safe, complete tree removal in KL & Selangor for dead, damaged, diseased, or unwanted trees. Starts from RM 500. 15+ years experience, 5-star reviews, 24/7 emergency dispatch."
      />

      {/* HERO WITH BACKGROUND IMAGE & TRUST POINTS */}
      <ServiceHero
        breadcrumbs={<><Link to="/">Home</Link> / <Link to="/services">Services</Link> / Tree Removal</>}
        title="Professional Tree Removal Services in KL & Selangor"
        description="Need a dead, rotten, leaning, or hazardous tree completely removed? Our certified arborists and removal crew safely extract trees of all sizes while protecting surrounding buildings, fences, and utility lines."
        bgImage={treeRemovalHeroBg}
        priceHighlight="Call for Emergency service"
        priceHighlight1="Get a free quote in 5 min"
      />

      {/* VERIFIED REVIEWS SECTION */}
      <ReviewSection
        serviceKey="tree-removal"
        title="Verified Tree Removal Reviews in KL & Selangor"
        subtitle="Rated 4.9/5 stars based on 280+ real homeowners and property managers across KL & Selangor."
      />

      {/* WHAT IS TREE REMOVAL */}
      <section className="section">
        <div className="container split">
          <Reveal className="img-frame">
            <img
              src={treeRemovalImage1}
              alt="Arborist performing controlled complete tree removal on a property in KL & Selangor"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
          <Reveal>
            <h2>Controlled, Safe &amp; Complete Tree Removal</h2>
            <p>Tree removal is the comprehensive process of safely taking down and extracting a tree that is dead, dying, structurally decayed, termite-infested, or no longer safe to have on a property.</p>
            <p>Depending on the tree's height, girth, and surrounding structures, our team dismantles the tree using heavy rigging, cranes, and specialized drop methods to safeguard underground pipes, roofs, driveways, and neighbouring compounds.</p>
            <ul className="check-list">
              <li><CheckIcon />Complete tree takedown to ground level</li>
              <li><CheckIcon />Hazardous and decaying tree extraction</li>
              <li><CheckIcon />Termite-damaged &amp; rotten trunk removal</li>
              <li><CheckIcon />Full debris haulage &amp; site restoration</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* EMERGENCY SERVICE SECTION */}
      <EmergencySection
        title="24/7 Emergency Tree Removal in KL & Selangor"
        subtitle="Immediate dispatch for uprooted trees, collapsed trunks across gates or roads, and dangerous leaning trees threatening roofs or vehicles after storms."
        serviceType="emergency tree removal"
      />

      {/* SIGNS TO WATCH FOR */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <h2>When Should a Tree Be Completely Removed?</h2>
            <p>A tree must be removed when it presents an unavoidable safety risk or structural failure:</p>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><BoltIcon /></span>
              <h3>Dead or Decaying Trees</h3>
              <p>Trees that have lost structural integrity, exhibiting dry rot, hollow trunks, or peeling bark with imminent collapse risk.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Severe Structural Leaning</h3>
              <p>Trees leaning dangerously toward living rooms, bedrooms, fences, or public roads after soil erosion.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Invasive Foundation Damage</h3>
              <p>Aggressive tree roots cracking house foundations, perimeter walls, septic lines, or lifting driveways.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><LocationIcon /></span>
              <h3>Site Preparation &amp; Redevelopment</h3>
              <p>Trees that need to be completely cleared to make way for new home construction, swimming pools, or extensions.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>Our Tree Removal Process</h2>
            <p>We execute complete tree extractions with methodical planning and safety equipment.</p>
          </Reveal>
          <div className="process-grid">
            {[
              ['01', 'Site Assessment', 'We inspect the tree stability, soil condition, and surrounding access points to plan the extraction.'],
              ['02', 'Clear Quotation', 'You receive an all-inclusive quote starting from RM 500 with no hidden middleman fees.'],
              ['03', 'Safe Removal', 'The tree is completely removed using step-by-step dismantlement, protecting your property throughout.'],
              ['04', 'Site Clean-Up', 'All heavy logs, branches, and debris are hauled away, leaving the area spotless and clear.'],
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
            <h2>Benefits of Professional Tree Removal</h2>
            <ul className="check-list">
              <li><CheckIcon />Completely eliminates catastrophic tree collapse hazards</li>
              <li><CheckIcon />Prevents termite colonies and pests from spreading to your house</li>
              <li><CheckIcon />Protects underground utilities, perimeter walls, and pavements</li>
              <li><CheckIcon />Frees up valuable outdoor land for construction or gardens</li>
            </ul>
            <div style={{ marginTop: 24 }}>
              <a href={siteInfo.whatsappHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp for Fast Quote
              </a>
            </div>
          </Reveal>
          <Reveal className="img-frame">
            <img
              src={treeRemovalImage2}
              alt="Tree removal crew using safety equipment in KL & Selangor"
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
            <h2>Why Choose Our Tree Removal Team?</h2>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Safety-First Protocol</h3>
              <p>We prioritize zero-damage operations and methodical removal techniques for tight residential spaces.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><LocationIcon /></span>
              <h3>KL &amp; Selangor Local Crew</h3>
              <p>Direct local specialists with rapid emergency response times and all necessary tools on-hand.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Property Protection</h3>
              <p>We work carefully around buildings, vehicles, gardens, fences and underground lines.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR RECENT PROJECTS (4x3 GALLERY) */}
      <ProjectGallery
        title="Our Recent Tree Removal Projects"
        subtitle="View our 4x3 project portfolio showing recent complete tree removals, hazardous tree extractions, and site clearances across KL & Selangor."
      />

      {/* FAQS */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <Reveal className="section-head">
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <Reveal className="faq-list">
            {removalFaqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section" id="service-area">
        <div className="container area-wrap">
          <Reveal>
            <h2>Tree Removal in KL &amp; Selangor</h2>
            <p className="muted">We provide full tree removal services across Kuala Lumpur and nearby areas throughout Selangor.</p>
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
            <h2>Ready to Request a Quote for Tree Removal?</h2>
            <p>Tell us about the tree and your property, and we'll provide an instant quotation starting from RM 500.</p>
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
