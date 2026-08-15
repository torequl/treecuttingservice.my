import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import FaqItem from '../components/FaqItem.jsx';
import ContactForm from '../components/ContactForm.jsx';
import AreaCoverage from '../components/AreaCoverage.jsx';
import { services, faqs, testimonials, siteInfo } from '../data/services.js';
import {
  CheckIcon, WhatsappIcon, ShieldIcon, PeopleIcon, ToolboxIcon,
  LocationIcon, ClockIcon, HouseShieldIcon, StarIcon, PhoneIcon,
} from '../data/icons.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import heroImage from '../asset/08.jpeg';
import aboutImage from '../asset/17.jpeg';

export default function Home() {
  return (
    <>
      <Seo
        title="Tree Cutting & Tree Removal Services in Puchong | TreeCare Puchong"
        description="Professional tree cutting, tree removal, tree trimming, land clearing, landscaping, tree root removal and emergency tree care services in Puchong, Selangor. Call or WhatsApp today."
      />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-copy">
            <span className="eyebrow">Professional Tree Care Services in Puchong</span>
            <h1>Professional Tree Cutting &amp; Care Services in Puchong</h1>
            <p className="lead">From tree removal and trimming to land clearing, landscaping and emergency tree care, we provide professional tree services for residential and commercial properties across Puchong and surrounding areas.</p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
              <a href={siteInfo.whatsappHref} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon />
                WhatsApp Us
              </a>
            </div>
            <div className="trust-line">
              <span><CheckIcon />Fast Response</span>
              <span><CheckIcon />Professional Service</span>
              <span><CheckIcon />Safety First</span>
            </div>
          </div>

          <div className="hero-media">
            <div className="img-frame">
              <img
                src={heroImage}
                alt="Professional arborist safely cutting a large tree in Puchong"
                width="900"
                height="1125"
              />
            </div>
            <div className="floating-card">
              <span className="icon-badge"><LocationIcon /></span>
              <span>
                <strong>Professional Tree Care</strong>
                <span>Serving Puchong &amp; Surrounding Areas</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-item">
            <span className="icon-badge"><ShieldIcon /></span>
            <strong>Professional Tree Services</strong>
          </div>
          <div className="trust-item">
            <span className="icon-badge"><ShieldIcon /></span>
            <strong>Safety-Focused Work</strong>
          </div>
          <div className="trust-item">
            <span className="icon-badge"><HouseShieldIcon /></span>
            <strong>Residential &amp; Commercial</strong>
          </div>
          <div className="trust-item">
            <span className="icon-badge"><ClockIcon /></span>
            <strong>Fast Response Available</strong>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Our Tree &amp; Property Services</h2>
            <p>Complete tree care and property maintenance solutions delivered with safety, care and professionalism.</p>
          </Reveal>

          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section-alt">
        <div className="container split">
          <Reveal className="img-frame">
            <img
              src={aboutImage}
              alt="Tree care team working safely on a residential property in Puchong"
              loading="lazy"
              width="800"
              height="680"
            />
          </Reveal>
          <Reveal>
            <span className="eyebrow">About Our Tree Services</span>
            <h2>Professional Tree Care With Safety at the Core</h2>
            <p>We provide professional tree cutting and property care services for homeowners and businesses in Puchong and surrounding areas. Whether you need a dangerous tree removed, overgrown branches trimmed, unwanted roots cleared or land prepared for a new project, our team is ready to help.</p>
            <ul className="check-list">
              <li><CheckIcon />Careful &amp; Safety-Focused Work</li>
              <li><CheckIcon />Residential &amp; Commercial Services</li>
              <li><CheckIcon />Reliable Local Service</li>
            </ul>
            <Link to="/about" className="btn btn-ghost">Learn More About Us</Link>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" id="why-choose-us">
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

      {/* PROCESS */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>Simple, Professional &amp; Hassle-Free</h2>
          </Reveal>
          <div className="process-grid">
            {[
              ['01', 'Contact Us', 'Tell us what tree or property service you need.'],
              ['02', 'Site Assessment', 'We assess the work required and discuss the best solution.'],
              ['03', 'Get Your Quote', 'Receive a clear quote based on your project requirements.'],
              ['04', 'Professional Service', 'Our team completes the agreed work safely and professionally.'],
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

      {/* BEFORE / AFTER */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Real Results</span>
            <h2>See the Difference Professional Tree Care Can Make</h2>
          </Reveal>
          <div className="ba-grid">
            {[
              { title: 'Tree Removal', before: 'https://placehold.co/400x400/68736C/F7F8F4?text=Before', after: 'https://placehold.co/400x400/1F5D42/F7F8F4?text=After', desc: 'A large unwanted tree removed and the area left clean and cleared.', alt: 'tree removal' },
              { title: 'Tree Trimming', before: 'https://placehold.co/400x400/68736C/F7F8F4?text=Before', after: 'https://placehold.co/400x400/1F5D42/F7F8F4?text=After', desc: 'Overgrown branches trimmed into a neat, healthy and well-maintained tree.', alt: 'tree trimming' },
              { title: 'Land Clearing', before: 'https://placehold.co/400x400/68736C/F7F8F4?text=Before', after: 'https://placehold.co/400x400/1F5D42/F7F8F4?text=After', desc: 'Overgrown land cleared into a clean, usable space ready for the next step.', alt: 'land clearing' },
            ].map((item) => (
              <Reveal className="ba-card" key={item.title}>
                <div className="ba-images">
                  <figure>
                    <img src={item.before} alt={`Before ${item.alt} in Puchong`} loading="lazy" width="400" height="400" />
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure>
                    <img src={item.after} alt={`After ${item.alt} in Puchong`} loading="lazy" width="400" height="400" />
                    <figcaption>After</figcaption>
                  </figure>
                </div>
                <div className="ba-body">
                  <h3>{item.title}</h3>
                  <p className="muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section section-alt" id="service-area">
        <div className="container area-wrap">
          <Reveal>
            <span className="eyebrow">Where We Work</span>
            <h2>Tree Services in Puchong &amp; Surrounding Areas</h2>
            <p className="muted">We provide tree cutting, tree removal, trimming, land clearing, landscaping, tree root removal and emergency tree care services in Puchong and nearby areas throughout Selangor.</p>
            <div className="area-chips">
              <span className="area-chip primary"><LocationIcon />Puchong</span>
              <span className="area-chip"><LocationIcon />Taman Bukit Kinara</span>
              <span className="area-chip"><LocationIcon />Surrounding Selangor Areas</span>
            </div>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
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

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Customer Feedback</span>
            <h2>What Our Customers Say</h2>
          </Reveal>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <Reveal className="testimonial-card" key={t.name}>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="quote">{t.quote}</p>
                <div className="testimonial-author">
                  <span className="avatar-dot">{t.initials}</span>
                  <span>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="testimonial-note">Placeholder testimonials shown during development. To be replaced with verified customer reviews.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <Reveal className="faq-list">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
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

      {/* CONTACT */}
      <section className="section section-alt" id="contact">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Get In Touch</span>
            <h2>Get in Touch With Our Tree Care Team</h2>
          </Reveal>
          <div className="contact-wrap">
            <Reveal className="contact-info-card">
              <div className="contact-info-row">
                <span className="icon-badge"><LocationIcon /></span>
                <span><strong>Address</strong><p>{siteInfo.address}</p></span>
              </div>
              <div className="contact-info-row">
                <span className="icon-badge"><PhoneIcon /></span>
                <span><strong>Phone</strong><p>{siteInfo.phoneDisplay}</p></span>
              </div>
              <div className="contact-info-actions">
                <a href={siteInfo.phoneHref} className="btn btn-secondary btn-block">Call Now</a>
                <a href={siteInfo.whatsappHref} className="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </div>
            </Reveal>

            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
