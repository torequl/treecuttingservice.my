import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TreeIcon, CloseIcon, WhatsappIcon } from '../data/icons.jsx';
import { siteInfo } from '../data/services.js';

export default function MobileNav({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div
      className={`mobile-nav ${open ? 'open' : ''}`}
      aria-hidden={!open}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="mobile-nav-panel">
        <div className="mobile-nav-top">
          <span className="brand">
            <span className="brand-mark"><TreeIcon /></span>
            {siteInfo.name}
          </span>
          <button className="mobile-nav-close" aria-label="Close menu" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className="mobile-nav-links">
          <NavLink to="/" end onClick={onClose}>Home</NavLink>
          <NavLink to="/about" onClick={onClose}>About</NavLink>
          <NavLink to="/services" onClick={onClose}>Services</NavLink>
          <NavLink to="/#why-choose-us" onClick={onClose}>Why Choose Us</NavLink>
          <NavLink to="/#service-area" onClick={onClose}>Service Areas</NavLink>
          <NavLink to="/contact" onClick={onClose}>Contact</NavLink>
        </div>

        <div className="mobile-nav-ctas">
          <a href={siteInfo.whatsappHref} className="btn btn-secondary btn-block" target="_blank" rel="noopener noreferrer">
            <WhatsappIcon />
            WhatsApp Us
          </a>
          <a href={siteInfo.phoneHref} className="btn btn-ghost btn-block">Call Now</a>
          <NavLink to="/contact" className="btn btn-primary btn-block" onClick={onClose}>Get a Free Quote</NavLink>
        </div>
      </div>
    </div>
  );
}
