import Reveal from './Reveal.jsx';
import { siteInfo } from '../data/services.js';
import { PhoneIcon, WhatsappIcon, BoltIcon, ShieldIcon, ClockIcon } from '../data/icons.jsx';

export default function EmergencySection({
  title = '24/7 Emergency Tree Service in KL & Selangor',
  subtitle = 'Immediate response for fallen trees, storm damage, and dangerous leaning branches threatening life or property.',
  serviceType = 'tree removal or hazard clearing',
}) {
  return (
    <section className="section emergency-section" id="emergency-service">
      <div className="container">
        <Reveal className="emergency-banner">
          <div className="emergency-header">
            <div className="emergency-tag-pulse">
              <span className="pulse-dot"></span>
              <BoltIcon />
              <span>24/7 Urgent Response</span>
            </div>
            <h2>{title}</h2>
            <p className="emergency-lead">{subtitle}</p>
          </div>

          <div className="emergency-features-grid">
            <div className="emergency-feature-card">
              <span className="emergency-icon-wrap">
                <ClockIcon />
              </span>
              <div>
                <h4>Fast Local Dispatch</h4>
                <p>On-site within 60–90 minutes across KL &amp; Selangor for hazardous trees, blocked driveways, or roof threats.</p>
              </div>
            </div>

            <div className="emergency-feature-card">
              <span className="emergency-icon-wrap">
                <ShieldIcon />
              </span>
              <div>
                <h4>Property &amp; Structure Protection</h4>
                <p>Equipped with specialized ropes, pulleys, cranes, and chainsaws for safe section-by-section dismantling.</p>
              </div>
            </div>

            <div className="emergency-feature-card">
              <span className="emergency-icon-wrap">
                <BoltIcon />
              </span>
              <div>
                <h4>Post-Storm Clear-Out</h4>
                <p>Immediate removal of fallen trunks, snapped limbs, and green waste to restore property safety.</p>
              </div>
            </div>
          </div>

          <div className="emergency-action-bar">
            <div className="emergency-cta-text">
              <strong>Facing an Urgent Hazard in KL &amp; Selangor?</strong>
              <span>Do not wait. Contact our emergency dispatch team immediately for fast assistance with {serviceType}.</span>
            </div>
            <div className="emergency-buttons">
              <a href={siteInfo.phoneHref} className="btn btn-emergency-call btn-lg">
                <PhoneIcon />
                Call Emergency: {siteInfo.phoneDisplay}
              </a>
              <a
                href={siteInfo.whatsappHref}
                className="btn btn-emergency-wa btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon />
                WhatsApp Urgent Photos
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
