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
import stumpGrindingPhoto from '../asset/stump-grinding.jpg';
import rootRemovalImage from '../asset/11.jpeg';

const stumpFaqs = [
  {
    q: 'How much does stump grinding cost in KL & Selangor?',
    a: 'Stump grinding starts from RM 500 depending on the stump diameter (measured in inches/cm at ground level), root flare complexity, tree species hardness, and site accessibility. Send us a photo with a measuring tape on WhatsApp for an instant, fixed quote.',
  },
  {
    q: 'How deep below ground level do you grind the stump?',
    a: 'We grind standard tree stumps 6 to 12 inches (15 to 30 cm) below grade, completely pulverizing the central root core and major lateral root flares so the area can be turfed, paved, or landscaped smoothly.',
  },
  {
    q: 'What happens to the wood chips and mulch after grinding?',
    a: 'Grinding turns the solid stump into clean organic mulch. We can use the nutrient-rich wood chips to backfill the hole level with your lawn, or haul all debris away in our trucks if you prefer a completely clean surface.',
  },
  {
    q: 'Can you grind stumps near walls, fences, or concrete driveways?',
    a: 'Yes. Our specialized compact hydraulic stump grinders maneuver into tight residential gates, narrow side alleys, and close to walls without cracking adjoining tiles, pipes, or retaining walls.',
  },
  {
    q: 'Why should I grind a tree stump instead of leaving it to rot?',
    a: 'Leaving a stump attracts subterranean termites, carpenter ants, and poisonous fungal spores into your yard. Decaying stumps also sprout unsightly sucker shoots and create dangerous tripping hazards for children and lawnmowers.',
  },
  {
    q: 'Can I replant grass or a new tree over the ground stump location?',
    a: 'Yes. Once the stump is ground down and the cavity is backfilled with topsoil and compost, you can lay new carpet grass, plant shrubs, or pave a patio right over the spot.',
  },
];

export default function StumpGrinding() {
  return (
    <>
      <Seo
        title="Professional Stump Grinding in KL & Selangor | Fast Removal Starts RM 500 | TreeCare"
        description="Fast, mechanical tree stump grinding services across KL & Selangor. Grinds 6-12 inches below ground, prevents termites & levels lawns. Starts from RM 500. Call +60 11-6383 5543."
      />

      {/* HERO WITH BACKGROUND IMAGE & TRUST POINTS */}
      <ServiceHero
        breadcrumbs={<><Link to="/">Home</Link> / <Link to="/services">Services</Link> / Stump Grinding</>}
        title="Professional Stump Grinding Services in KL & Selangor"
        description="Tired of an ugly, hazardous tree stump ruining your lawn, attracting termites, or blocking construction? We use heavy-duty commercial stump grinders to pulverize stumps 6–12 inches below ground level quickly, cleanly, and affordably."
        bgImage={stumpGrindingPhoto}
        priceHighlight="Call for Emergency service"
        priceHighlight1="Get a free quote in 5 min"
      />

      {/* VERIFIED REVIEWS SECTION */}
      <ReviewSection
        serviceKey="stump-grinding"
        title="Verified Stump Grinding Reviews in KL & Selangor"
        subtitle="Rated 4.9/5 stars based on 280+ real homeowners and commercial property managers across KL & Selangor."
      />

      {/* WHAT IS STUMP GRINDING */}
      <section className="section">
        <div className="container split">
          <Reveal className="img-frame">
            <img
              src={stumpGrindingPhoto}
              alt="Heavy duty stump grinder machine pulverizing a tree stump into wood chips in KL & Selangor"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
          <Reveal>
            <h2>Fast, Non-Invasive Mechanical Stump Removal</h2>
            <p>
              After a tree is cut down, the remaining stump and underground root mass can linger for decades. In Malaysia's warm, humid climate, decaying tree stumps quickly become breeding grounds for subterranean termites that can spread directly into your home's timber structures.
            </p>
            <p>
              Unlike destructive backhoe excavators that tear up entire lawns, fences, and drainage pipes, our high-torque mechanical stump grinders shave the wood down 6 to 12 inches below ground level with pinpoint surgical precision.
            </p>
            <ul className="check-list">
              <li><CheckIcon />Grinds stumps 6 to 12 inches beneath lawn grade level</li>
              <li><CheckIcon />Eliminates termite colonies, fungus &amp; snake hiding spots</li>
              <li><CheckIcon />No lawn or pipe damage — fits through standard garden gates</li>
              <li><CheckIcon />Leaves free rich organic mulch or full site debris haulage</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* EMERGENCY & RAPID HAZARD DISPATCH SECTION */}
      <EmergencySection
        title="Urgent Stump Grinding & Termite Prevention in KL & Selangor"
        subtitle="Found termites nesting in an old stump, or need a tripping hazard removed before property handover or concrete paving? We provide same-day rapid dispatch across all KL & Selangor districts."
        serviceType="urgent stump grinding & hazardous root removal"
      />

      {/* WHEN DO YOU NEED STUMP GRINDING */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <h2>Why Remove Old Tree Stumps Immediately?</h2>
            <p>Leaving a cut tree stump untreated leads to structural, aesthetic, and pest complications:</p>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Termite &amp; Pest Prevention</h3>
              <p>Rotting stumps are Malaysia's #1 nesting ground for termites, carpenter ants, hornets, and venomous snakes.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Safety &amp; Tripping Hazards</h3>
              <p>Concealed stumps and raised roots cause dangerous falls for children, seniors, and damage lawnmower blades.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><BoltIcon /></span>
              <h3>Lawn &amp; Driveway Reclaiming</h3>
              <p>Reclaim wasted square footage to lay fresh carpet grass, extend parking driveways, or build new home additions.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><ToolboxIcon /></span>
              <h3>Stop Regrowth &amp; Root Spreading</h3>
              <p>Prevents aggressive tree species from sprouting unwanted sapling shoots and cracking nearby drain culverts.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>Our 4-Step Stump Grinding Process</h2>
            <p>Clean, efficient, and damage-free stump eradication in under 2 hours.</p>
          </Reveal>
          <div className="process-grid">
            {[
              ['01', 'WhatsApp Photo & Diameter', 'Snap a photo of the stump with an estimate of its width. Get an upfront fixed quote starting from RM 500.'],
              ['02', 'Underground Utility Check', 'We inspect the surrounding zone for water pipes, electrical lines, and boundary walls for 100% safety.'],
              ['03', 'Mechanical Precision Grinding', 'Our high-powered tungsten-carbide teeth grind the trunk and root flare 6–12 inches below the surface.'],
              ['04', 'Leveling & Site Cleanup', 'We backfill the ground cavity with wood mulch or haul the chips away, leaving a smooth, level finish.'],
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
            <h2>Why Property Owners Choose Our Stump Grinding Service</h2>
            <ul className="check-list">
              <li><CheckIcon />Upfront pricing starting from RM 500 with zero surprise extras</li>
              <li><CheckIcon />Compact machinery that fits easily through narrow house side gates</li>
              <li><CheckIcon />15+ years experience protecting underground pipes and paving</li>
              <li><CheckIcon />Same-day &amp; weekend service across Kuala Lumpur and Selangor</li>
            </ul>
            <div style={{ marginTop: 24 }}>
              <a href={siteInfo.whatsappHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp for Instant Quote
              </a>
            </div>
          </Reveal>
          <Reveal className="img-frame">
            <img
              src={rootRemovalImage}
              alt="Tree roots and underground root mass removal"
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
            <h2>Why Choose Our KL &amp; Selangor Stump Grinding Crew?</h2>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Industrial-Grade Equipment</h3>
              <p>Equipped with commercial Vermeer and Honda stump grinders capable of tackling any hardwood tropical stump.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><LocationIcon /></span>
              <h3>Serving All KL &amp; Selangor</h3>
              <p>Fast response across Petaling Jaya, Shah Alam, Subang Jaya, Klang, Puchong, Cheras, Ampang, and beyond.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><PeopleIcon /></span>
              <h3>Complete Site Restoration</h3>
              <p>We leave your ground level, safe, and ready for immediate replanting, turfing, or construction work.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR RECENT PROJECTS (4x3 GALLERY) */}
      <ProjectGallery
        title="Our Recent Stump Grinding & Root Removal Projects"
        subtitle="Explore our 4x3 project portfolio showcasing successful stump grinding, root extraction, lawn leveling, and termite barrier clearouts across KL & Selangor."
      />

      {/* FAQS */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <Reveal className="section-head">
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <Reveal className="faq-list">
            {stumpFaqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section" id="service-area">
        <div className="container area-wrap">
          <Reveal>
            <h2>Stump Grinding in KL &amp; Selangor</h2>
            <p className="muted">We provide professional stump grinding and root removal services across Kuala Lumpur and all districts of Selangor.</p>
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
            <h2>Ready to Grind Down That Tree Stump Today?</h2>
            <p>Send us a photo of your stump on WhatsApp for an immediate quotation starting from RM 500.</p>
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
