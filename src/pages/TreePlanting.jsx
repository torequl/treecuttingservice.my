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
import treePlantingHeroBg from '../asset/21.webp';
import treePlantingImage1 from '../asset/21.webp';
import treePlantingImage2 from '../asset/22.webp';

const plantingFaqs = [
  {
    q: 'How much does tree planting cost in KL & Selangor?',
    a: 'Tree planting packages start from RM 500 depending on tree species, sapling maturity/height, excavation ground conditions, soil conditioning, and root barrier installation. WhatsApp us your location and preferences for a direct, itemised quote.',
  },
  {
    q: 'What types of trees are best for residential homes in Malaysia?',
    a: 'We recommend non-invasive, storm-resilient species such as Bucida Molineti (Madagascar Almond), Tecoma (Malaysia Cherry Blossom), Tabebuia Rosea, Yellow Flame, Royal Palms, and popular fruit trees like Mango, Rambutan, or Calamansi.',
  },
  {
    q: 'Will the tree roots damage my house foundation or underground drain pipes?',
    a: 'No, because our specialists evaluate safe planting distances and install commercial underground root barriers that guide roots downward rather than sideways into your driveway, pipes, or walls.',
  },
  {
    q: 'Do you supply the trees or can you plant trees I already purchased?',
    a: 'Both! We source premium Grade-A nursery saplings of all sizes with healthy root balls, or our team can expertly excavate, plant, fertilize, and stake trees you have already bought.',
  },
  {
    q: 'What is included in your complete tree planting package?',
    a: 'Our service includes site assessment, mechanical or manual hole excavation, rich organic soil conditioning with root hormones, root ball placement, heavy-duty bamboo/timber staking, organic mulching, and deep initial hydration.',
  },
  {
    q: 'How do I care for my new tree after planting?',
    a: 'We provide simple, clear watering and fertilizing guidelines tailored to your specific tree species, and our specialists remain available on WhatsApp for any post-planting advice.',
  },
];

export default function TreePlanting() {
  return (
    <>
      <Seo
        title="Professional Tree Planting Services in KL & Selangor | Starts from RM 500 | TreeCare"
        description="Expert tree planting, transplanting & garden greening in KL & Selangor. Healthy shade trees, ornamental palms & fruit trees. Starts from RM 500. Call +60 11-6383 5543."
      />

      {/* HERO WITH BACKGROUND IMAGE & TRUST POINTS */}
      <ServiceHero
        breadcrumbs={<><Link to="/">Home</Link> / <Link to="/services">Services</Link> / Tree Planting</>}
        title="Professional Tree Planting Services in KL & Selangor"
        description="Looking to add natural shade, privacy, and property value to your home or commercial grounds? We provide expert tree selection, non-invasive root barrier installation, precision planting, and soil conditioning across KL & Selangor."
        bgImage={treePlantingHeroBg}
        priceHighlight="Call for Emergency service"
        priceHighlight1="Get a free quote in 5 min"
      />

      {/* VERIFIED REVIEWS SECTION */}
      <ReviewSection
        serviceKey="tree-planting"
        title="Verified Tree Planting Reviews in KL & Selangor"
        subtitle="Rated 4.9/5 stars based on 280+ homeowners, landscape designers, and residential developments."
      />

      {/* WHAT IS TREE PLANTING */}
      <section className="section">
        <div className="container split">
          <Reveal className="img-frame">
            <img
              src={treePlantingImage1}
              alt="Tree planting specialist planting a healthy ornamental tree in KL & Selangor"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
          <Reveal>
            <h2>Expert Tree Planting with Lifelong Root Health</h2>
            <p>
              Planting a tree correctly requires more than digging a quick hole. In Malaysia's tropical climate, proper soil drainage, organic root fertilization, depth precision, and storm-resistant staking determine whether a tree thrives or struggles.
            </p>
            <p>
              Our tree planting specialists source healthy, disease-free nursery stock and employ certified arboricultural planting methods. We protect your home with root control systems that prevent cracked foundations and broken drainage pipes.
            </p>
            <ul className="check-list">
              <li><CheckIcon />Premium nursery stock selection &amp; delivery</li>
              <li><CheckIcon />Soil enrichment with organic compost &amp; root stimulators</li>
              <li><CheckIcon />Underground root barrier protection for house foundations</li>
              <li><CheckIcon />Heavy-duty windproof timber staking &amp; mulching</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* EMERGENCY & RAPID REPLACEMENT SECTION */}
      <EmergencySection
        title="Post-Tree Removal Replanting in KL & Selangor"
        subtitle="Just had an old, dangerous, or diseased tree removed? We provide fast stump replacement planting with lush, non-invasive ornamental and shade species to restore your garden canopy."
        serviceType="tree replacement & garden replanting"
      />

      {/* WHEN DO YOU NEED TREE PLANTING */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <h2>Why Invest in Professional Tree Planting?</h2>
            <p>Trees are a lasting investment that upgrade your living space, privacy, and outdoor environment:</p>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><HouseShieldIcon /></span>
              <h3>Natural Shade &amp; Cooling</h3>
              <p>Well-placed shade trees significantly reduce ambient heat on roofs, patios, and driveways, lowering energy costs.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Perimeter Privacy Screening</h3>
              <p>Dense ornamental trees and hedges shield your windows, swimming pools, and balconies from neighbouring views.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><BoltIcon /></span>
              <h3>Property Value Enhancement</h3>
              <p>A professionally landscaped garden with mature, attractive trees elevates curb appeal and market value immediately.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><ToolboxIcon /></span>
              <h3>Commercial &amp; Developer Greening</h3>
              <p>Complete tree planting packages for commercial office lots, factory perimeters, show houses, and road reserves.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>Our 4-Step Tree Planting Process</h2>
            <p>We ensure optimal root establishment and long-term vitality through methodical planting standards.</p>
          </Reveal>
          <div className="process-grid">
            {[
              ['01', 'Species & Site Consultation', 'We evaluate sunlight, underground utilities, boundary lines, and soil drainage to select the perfect tree.'],
              ['02', 'Excavation & Soil Conditioning', 'We dig an optimal wide planting pit and blend nutrient-dense organic compost and root stimulators.'],
              ['03', 'Placement & Root Barrier Setup', 'The tree root ball is positioned at exact grade level with protective root barriers installed where needed.'],
              ['04', 'Staking, Mulching & Hydration', 'We anchor the tree with secure timber stakes, apply moisture-retaining mulch, and perform deep watering.'],
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
            <h2>Why Homeowners Choose Our Tree Planting Team</h2>
            <ul className="check-list">
              <li><CheckIcon />Transparent pricing starting from RM 500 with zero hidden contractor surcharges</li>
              <li><CheckIcon />Careful selection of non-invasive root species safe for home compounds</li>
              <li><CheckIcon />Sourced exclusively from certified Malaysian agricultural nurseries</li>
              <li><CheckIcon />Comprehensive aftercare and watering advice provided with every job</li>
            </ul>
            <div style={{ marginTop: 24 }}>
              <a href={siteInfo.whatsappHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                WhatsApp for Instant Quote
              </a>
            </div>
          </Reveal>
          <Reveal className="img-frame">
            <img
              src={treePlantingImage2}
              alt="Neatly landscaped yard with newly planted healthy trees and garden beds"
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
            <h2>Why Choose Our KL &amp; Selangor Tree Planting Crew?</h2>
          </Reveal>
          <div className="benefit-grid">
            <Reveal className="benefit-card">
              <span className="icon-badge"><ShieldIcon /></span>
              <h3>Root-Safe Guarantee</h3>
              <p>We specialize in root barrier technology to ensure your walkways, walls, and pipes remain 100% damage-free.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><LocationIcon /></span>
              <h3>Local Soil &amp; Climate Expertise</h3>
              <p>15+ years planting tropical trees suited to KL &amp; Selangor clay and loam soils for maximum survival rates.</p>
            </Reveal>
            <Reveal className="benefit-card">
              <span className="icon-badge"><PeopleIcon /></span>
              <h3>Complete End-to-End Service</h3>
              <p>From sapling transport and heavy digging to final compound sweep-up, we handle every step seamlessly.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR RECENT PROJECTS (4x3 GALLERY) */}
      <ProjectGallery
        title="Our Recent Tree Planting & Garden Projects"
        subtitle="Explore our 4x3 project portfolio showcasing successful tree plantings, palm transplants, shade canopies, and garden greening across KL & Selangor."
      />

      {/* FAQS */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <Reveal className="section-head">
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <Reveal className="faq-list">
            {plantingFaqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section" id="service-area">
        <div className="container area-wrap">
          <Reveal>
            <h2>Tree Planting in KL &amp; Selangor</h2>
            <p className="muted">We supply and plant healthy trees across Kuala Lumpur and all districts of Selangor.</p>
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
            <h2>Ready to Plant Beautiful Trees on Your Property?</h2>
            <p>Tell us what kind of trees you need or send photos of your garden for an instant quotation starting from RM 500.</p>
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
