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
  CheckIcon, ShieldIcon, LocationIcon, BoltIcon, HouseShieldIcon, ToolboxIcon,
} from '../data/icons.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import treeCuttingHeroBg from '../asset/19.jpg';
import treeCuttingImage1 from '../asset/06.jpeg';
import treeCuttingImage2 from '../asset/08.jpeg';

const cuttingFaqs = [
  { q: 'How much does professional tree cutting cost in KL & Selangor?', a: 'Tree cutting services start from RM 500 depending on tree height, branch spread, proximity to buildings or utility wires, and required climbing equipment. We provide honest, upfront quotes with no middleman markups.' },
  { q: 'What is the difference between tree cutting and tree removal?', a: 'Tree cutting focuses on reducing height, dismantling large dangerous branches, sectional pruning, and directional felling. Tree removal involves completely taking down and clearing the entire tree including the root ball coordination.' },
  { q: 'Can you cut tall trees in tight residential spaces?', a: 'Yes. Our tree cutting crew specializes in sectional climbing and rigging dismantlement, lowering each heavy branch with ropes to avoid damaging roofs, fences, tiles, or vehicles.' },
  { q: 'Do you clear away cut branches and logs after cutting?', a: 'Yes. We section the timber, bundle green debris, and load all cut branches onto our trucks, leaving your outdoor compound clean and safe.' },
];

export default function TreeCutting() {
  return (
    <>
      <Seo
        title="Professional Tree Cutting Services in KL & Selangor | Starts from RM 500 | TreeCare"
        description="Precision tree cutting, directional felling, and branch reduction in KL & Selangor. Safe sectional cutting for tall or hazardous trees. Starts from RM 500. 15+ years experience, 24/7 emergency service."
      />

      {/* HERO WITH BACKGROUND IMAGE & TRUST POINTS */}
      <ServiceHero
        breadcrumbs={<><Link to="/">Home</Link> / <Link to="/services">Services</Link> / Tree Cutting</>}
        title="Professional Tree Cutting Services in KL & Selangor"
        description="Specialized tree cutting, canopy thinning, directional felling, and sectional dismantlement for overgrown, dangerous, or storm-damaged trees. Certified climbers and chainsaw operators protecting your property."
        bgImage={treeCuttingHeroBg}
        priceHighlight="Free quote in 5 min"
      />

      {/* VERIFIED REVIEWS SECTION */}
      <ReviewSection
        serviceKey="tree-cutting"
        title="Verified Tree Cutting Reviews in KL & Selangor"
        subtitle="Rated 4.9/5 stars based on 280+ real homeowners, building managers, and developers across KL & Selangor."
      />

      {/* WHAT IS TREE CUTTING */}
      <section className="section">
        <div className="container split">
          <Reveal className="img-frame">
            <img
              src={treeCuttingImage1}
              alt="Professional tree climber cutting heavy upper branches safely in KL & Selangor"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
          <Reveal>
            <h2>Precision Sectional Tree Cutting &amp; Felling</h2>
            <p>Tree cutting is the specialized process of trimming, slicing, and dismantling heavy tree branches and trunks using certified climbing gear, ropes, and precision chainsaws. When a tree is overgrown, leaning over a roof, or encroaching on overhead power lines, our trained cutting specialists safely cut back the hazard piece by piece.</p>
            <p>Unlike basic yard trimming, professional tree cutting handles massive weight management, controlled branch drop zones, and directional guidance to ensure zero impact on fences, structures, or neighbouring properties.</p>
            <ul className="check-list">
              <li><CheckIcon />Sectional rigging &amp; controlled lowering ropes</li>
              <li><CheckIcon />Directional tree felling for open spaces</li>
              <li><CheckIcon />Height reduction &amp; canopy hazard cutting</li>
              <li><CheckIcon />Complete branch sectioning &amp; green haulage</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* EMERGENCY SERVICE SECTION */}
      <EmergencySection
        title="24/7 Emergency Tree Cutting in KL & Selangor"
        subtitle="Urgent tree cutting dispatch for cracked branches hanging precariously over roofs, driveways, cars, and powerlines following heavy monsoon storms."
        serviceType="urgent tree cutting and branch slicing"
      />

      {/* WHEN DO YOU NEED TREE CUTTING */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <h2>When Do You Need Tree Cutting?</h2>
            <p>Tree cutting is recommended when overgrown trees threaten property safety or require structural thinning:</p>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><BoltIcon /></span>
              <h3>Overhanging Heavy Branches</h3>
              <p>Large boughs encroaching on roof tiles, balconies, gutters, or neighbour boundaries that need precision cutting.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Storm-Damaged or Cracked Limbs</h3>
              <p>Partially split branches after heavy squalls that require immediate chainsaw cutting before they collapse.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Height &amp; Canopy Reduction</h3>
              <p>Cutting back tall trees to reduce wind resistance, prevent power line contact, and allow healthy sunlight to reach your garden.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><ToolboxIcon /></span>
              <h3>Pre-Construction Tree Clearing</h3>
              <p>Cutting down designated trees and heavy overgrowth to clear clear zones for building extensions or renovations.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>Our Tree Cutting Process</h2>
            <p>Every tree cutting job is executed with strict safety measures from initial inspection to final clean-up.</p>
          </Reveal>
          <div className="process-grid">
            {[
              ['01', 'Hazard Assessment', 'We evaluate tree height, branch weight distribution, power lines, and drop zones.'],
              ['02', 'Upfront Estimate', 'Receive a transparent price quote starting from RM 500 with no hidden contractor surcharges.'],
              ['03', 'Rigging & Precision Cutting', 'Our arborist climbers cut and lower each section safely with commercial rigging gear.'],
              ['04', 'Timber Slicing & Clear-Up', 'Branches are cut into transportable logs and all green debris is cleared from your property.'],
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
            <h2>Benefits of Professional Tree Cutting</h2>
            <ul className="check-list">
              <li><CheckIcon />Eliminates dangerous falling limb hazards during storms</li>
              <li><CheckIcon />Protects roof tiles, gutters, windows, and electrical cables</li>
              <li><CheckIcon />Stimulates healthy tree growth and improves airflow</li>
              <li><CheckIcon />Performed by insured, experienced chainsaw technicians</li>
            </ul>
            <div style={{ marginTop: 24 }}>
              <a href={siteInfo.whatsappHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp for Instant Quote
              </a>
            </div>
          </Reveal>
          <Reveal className="img-frame">
            <img
              src={treeCuttingImage2}
              alt="Tree cutting crew working with chainsaws on a property in KL & Selangor"
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
            <h2>Why Choose Our Tree Cutting Crew?</h2>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Safety &amp; Precision</h3>
              <p>We use industry-grade climbing harnesses, lowering pulleys, and sharp equipment for zero-damage cutting.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><LocationIcon /></span>
              <h3>Local KL &amp; Selangor Team</h3>
              <p>Direct local specialists with fast dispatch times and intimate knowledge of local tree species.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Property Protection</h3>
              <p>We guarantee careful protection for your vehicles, fencing, flowerbeds, and buildings.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR RECENT PROJECTS (4x3 GALLERY) */}
      <ProjectGallery
        title="Our Recent Tree Cutting Projects"
        subtitle="View our 4x3 project portfolio showing recent tree cutting, branch reductions, directional fellings, and canopy maintenance across KL & Selangor."
      />

      {/* FAQS */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <Reveal className="section-head">
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <Reveal className="faq-list">
            {cuttingFaqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section" id="service-area">
        <div className="container area-wrap">
          <Reveal>
            <h2>Tree Cutting in KL &amp; Selangor</h2>
            <p className="muted">We provide professional tree cutting and sectional pruning across Kuala Lumpur and all districts of Selangor.</p>
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
            <h2>Need Dangerous Trees Cut Safely?</h2>
            <p>Send photos of your tree on WhatsApp and get a prompt quotation starting from RM 500.</p>
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
