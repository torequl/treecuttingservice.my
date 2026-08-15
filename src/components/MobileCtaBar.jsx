import { WhatsappIcon, PhoneIcon } from '../data/icons.jsx';
import { siteInfo } from '../data/services.js';

export default function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar">
      <div className="row">
        <a href={siteInfo.whatsappHref} className="wa" target="_blank" rel="noopener noreferrer">
          <WhatsappIcon />
          WhatsApp
        </a>
        <a href={siteInfo.phoneHref} className="call">
          <PhoneIcon />
          Call Now
        </a>
      </div>
    </div>
  );
}
