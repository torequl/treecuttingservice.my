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
  CheckIcon, ShieldIcon, LocationIcon, BoltIcon, HouseShieldIcon, ToolboxIcon, PeopleIcon,
} from '../data/icons.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import grassCuttingHeroBg from '../asset/20.webp';
import grassCuttingImage1 from '../asset/20.webp';
import grassCuttingImage2 from '../asset/05.jpeg';

const grassCuttingFaqs = [
  {
    q: 'How much does grass cutting cost in KL & Selangor?',
    a: 'Our grass cutting services start from RM 500 depending on the land area (sq ft), height of the overgrowth/lalang, terrain slope, and waste disposal requirements. Send us a photo or short video on WhatsApp for an instant, accurate quotation with zero hidden fees.',
  },
  {
    q: 'How quickly can your grass cutting crew arrive?',
    a: 'We offer same-day and next-day grass cutting appointments across all areas of Kuala Lumpur and Selangor. Urgent slots are also available for property owners facing municipal council deadlines.',
  },
  {
    q: 'Is grass waste collection and disposal included in the price?',
    a: 'Yes! Unlike basic freelance cutters who leave piles on your curb, our complete service includes raking, bagging, loading into our lorries, and proper disposal at approved green waste sites.',
  },
  {
    q: 'Can you handle waist-high overgrown grass, lalang, and dense weeds?',
    a: 'Absolutely. Our crew uses industrial-grade commercial brush cutters and heavy-duty steel blades specifically built to clear thick tropical weeds, woody shrubs, and tall neglected lalang effortlessly.',
  },
  {
    q: 'Do you offer one-time cleanups and regular monthly maintenance?',
    a: 'Yes. We cater to both one-off emergency overgrown compound cleanups and customized regular mowing schedules for residential homes, bungalows, commercial premises, and vacant plots.',
  },
  {
    q: 'Can you help resolve municipal council (DBKL / MBPJ / MBSA) notices?',
    a: 'Yes. If you have received a clearing notice or warning for an overgrown compound, we provide priority rapid dispatch and complete site clearance to ensure full council compliance.',
  },
];

export default function GrassCutting() {
  return (
    <>
      <Seo
        title="Fast Grass Cutting Service in KL & Selangor | Same-Day Lawn Mowing Starts RM 500 | TreeCare"
        description="Professional grass cutting, lawn mowing & overgrown compound clearing in KL & Selangor. Quick WhatsApp quote in 5 minutes, same-day dispatch, complete waste haulage included. Call +60 11-6383 5543."
      />

      {/* HERO WITH BACKGROUND IMAGE & TRUST POINTS */}
      <ServiceHero
        breadcrumbs={<><Link to="/">Home</Link> / <Link to="/services">Services</Link> / Grass Cutting</>}
        title="Professional Grass Cutting & Lawn Mowing in KL & Selangor"
        description="Need overgrown grass, wild weeds, or bushy lawns cut quickly and neatly? We provide fast, reliable grass cutting and complete green waste haulage for homes, commercial lots, factories, and vacant lands across KL & Selangor."
        bgImage={grassCuttingHeroBg}
        priceHighlight="Call for Emergency service"
        priceHighlight1="Get a free quote in 5 min"
      />

      {/* VERIFIED REVIEWS SECTION */}
      <ReviewSection
        serviceKey="grass-cutting"
        title="Verified Grass Cutting Reviews in KL & Selangor"
        subtitle="Rated 4.9/5 stars based on 280+ real homeowners, residential communities, and commercial properties."
      />

      {/* WHAT IS GRASS CUTTING */}
      <section className="section">
        <div className="container split">
          <Reveal className="img-frame">
            <img
              src={grassCuttingImage1}
              alt="Professional grass cutting and lawn maintenance team working in KL & Selangor"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
          <Reveal>
            <h2>Fast, Clean &amp; Reliable Grass Cutting Services</h2>
            <p>
              In Malaysia's tropical climate, grass, weeds, and lalang can quickly shoot up to unmanageable heights within weeks. Overgrown compounds not only ruin your property's curb appeal but also attract hazardous pests like snakes, rodents, and dengue mosquitoes.
            </p>
            <p>
              Our professional grass cutting team uses high-powered brush cutters and commercial mowers to restore your lawns, backyards, factory compounds, and vacant lands to a spotless, manicured state.
            </p>
            <ul className="check-list">
              <li><CheckIcon />Precision lawn mowing &amp; clean perimeter edge trimming</li>
              <li><CheckIcon />Heavy brush cutting for waist-high wild weeds &amp; lalang</li>
              <li><CheckIcon />Thorough raking, bagging &amp; green waste lorry haulage</li>
              <li><CheckIcon />Fast response across all Kuala Lumpur &amp; Selangor districts</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* EMERGENCY & FAST DISPATCH SECTION */}
      <EmergencySection
        title="Urgent Same-Day Grass Cutting in KL & Selangor"
        subtitle="Priority dispatch for municipal council clearing notices (DBKL, MBPJ, MBSA, MBSJ), tenant move-outs, urgent real estate handovers, and overgrown pest hazards."
        serviceType="urgent grass cutting and overgrown compound clearing"
      />

      {/* WHEN DO YOU NEED GRASS CUTTING */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <h2>When Do You Need Professional Grass Cutting?</h2>
            <p>Whether it is regular upkeep or an emergency overgrown clearance, our team gets the job done right:</p>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><BoltIcon /></span>
              <h3>Council Notice Compliance</h3>
              <p>Avoid hefty fines and compound notices from local authorities (DBKL, MBPJ, MBSA) with our rapid clearance service.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Snake &amp; Pest Prevention</h3>
              <p>Dense tall grass is the primary breeding ground for dangerous snakes, rats, and dengue mosquitoes. Cut it back immediately.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Vacant Land &amp; Property Sale Prep</h3>
              <p>Maximise property value and attract buyers or tenants with a clean, fully cleared and neatly cut compound.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><ToolboxIcon /></span>
              <h3>Commercial &amp; Factory Grounds</h3>
              <p>Keep commercial premises, industrial lots, and office perimeters tidy, safe, and professional year-round.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>Our 4-Step Grass Cutting Process</h2>
            <p>From initial contact to spotless cleanup, we deliver hassle-free grass cutting without disruptions.</p>
          </Reveal>
          <div className="process-grid">
            {[
              ['01', 'WhatsApp Photo Quote', 'Send photos or video of your lawn on WhatsApp. Get a transparent quote starting from RM 500 within minutes.'],
              ['02', 'Scheduled Arrival', 'Our uniformed team arrives on time equipped with commercial-grade brush cutters, mowers, and safety gear.'],
              ['03', 'Slashing & Edge Trimming', 'We cut all grass to an even level, neatly trim borders around walls, fences, drains, and tree bases.'],
              ['04', 'Bagging & Waste Haulage', 'We rake up all cuttings, bag the green waste, load it into our truck, and sweep the area clean.'],
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
            <h2>Why Property Owners Trust Our Grass Cutting Service</h2>
            <ul className="check-list">
              <li><CheckIcon />Upfront flat pricing starting from RM 500 with zero middleman markup</li>
              <li><CheckIcon />Complete waste removal included — no grass piles left behind</li>
              <li><CheckIcon />Careful operation protecting flowers, fences, pipes, and vehicles</li>
              <li><CheckIcon />Experienced local Malaysian crew with 15+ years in tree &amp; landscape care</li>
            </ul>
            <div style={{ marginTop: 24 }}>
              <a href={siteInfo.whatsappHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp for Instant Quote
              </a>
            </div>
          </Reveal>
          <Reveal className="img-frame">
            <img
              src={grassCuttingImage2}
              alt="Heavy duty grass cutting and land clearing equipment in action"
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
            <h2>Why Choose Our KL &amp; Selangor Grass Cutting Crew?</h2>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Safety &amp; Precision</h3>
              <p>Equipped with stone guards, eye protection, and safety shields to protect your windows, cars, and walls.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><LocationIcon /></span>
              <h3>Covering All KL &amp; Selangor</h3>
              <p>Prompt dispatch across PJ, Shah Alam, Subang, Puchong, Cheras, Bangsar, Ampang, Klang, and more.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><PeopleIcon /></span>
              <h3>100% Satisfaction Guarantee</h3>
              <p>We do a full site walk-through after cutting to ensure every corner is cut cleanly and completely cleared.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR RECENT PROJECTS (4x3 GALLERY) */}
      <ProjectGallery
        title="Our Recent Grass Cutting & Grounds Projects"
        subtitle="View our 4x3 project portfolio showing recent lawn mowing, overgrown lalang clearing, commercial lot maintenance, and compound tidy-ups across KL & Selangor."
      />

      {/* FAQS */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <Reveal className="section-head">
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <Reveal className="faq-list">
            {grassCuttingFaqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section" id="service-area">
        <div className="container area-wrap">
          <Reveal>
            <h2>Grass Cutting in KL &amp; Selangor</h2>
            <p className="muted">We provide professional grass cutting, lawn care, and brush clearing across Kuala Lumpur and all districts of Selangor.</p>
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
            <h2>Ready to Get Your Grass Cut &amp; Cleared Today?</h2>
            <p>Snap a photo of your compound and send it on WhatsApp for an immediate quotation starting from RM 500.</p>
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
