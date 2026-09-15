import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TreeIcon, CloseIcon, WhatsappIcon, ChevronDownIcon } from '../data/icons.jsx';
import { siteInfo } from '../data/services.js';

export default function MobileNav({ open, onClose }) {
  const [serviceOpen, setServiceOpen] = useState(true);

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

        <div className="mobile-nav-scrollable">
          <div className="mobile-nav-links">
            <NavLink to="/" end onClick={onClose} className="mobile-nav-item">
              Home
            </NavLink>
            <NavLink to="/about" onClick={onClose} className="mobile-nav-item">
              About
            </NavLink>

            {/* Service Accordion */}
            <div className="mobile-accordion">
              <div className="mobile-accordion-header">
                <button
                  type="button"
                  className="mobile-accordion-toggle"
                  onClick={() => setServiceOpen((prev) => !prev)}
                  aria-expanded={serviceOpen}
                >
                  <span>Services</span>
                  <ChevronDownIcon className={`accordion-chevron ${serviceOpen ? 'rotate' : ''}`} />
                </button>
              </div>

              {serviceOpen && (
                <div className="mobile-accordion-content">
                  <div className="mobile-services-clean-list">
                    <NavLink to="/tree-cutting" onClick={onClose} className="mobile-service-link">
                      Tree Cutting
                    </NavLink>
                    <NavLink to="/tree-removal" onClick={onClose} className="mobile-service-link">
                      Tree Removal
                    </NavLink>
                    <NavLink to="/stump-grinding" onClick={onClose} className="mobile-service-link">
                      Stump Grinding
                    </NavLink>
                    <NavLink to="/grass-cutting" onClick={onClose} className="mobile-service-link">
                      Grass Cutting
                    </NavLink>
                    <NavLink to="/tree-planting" onClick={onClose} className="mobile-service-link">
                      Tree Planting
                    </NavLink>
                    <NavLink to="/landscaping" onClick={onClose} className="mobile-service-link">
                      Landscaping
                    </NavLink>
                    <a href="/services#tree-trimming" onClick={onClose} className="mobile-service-link">
                      Tree Trimming
                    </a>
                    <a href="/services#tree-roots-removal" onClick={onClose} className="mobile-service-link">
                      Tree Roots Removal
                    </a>
                    <a href="/services#land-clearing" onClick={onClose} className="mobile-service-link">
                      Land Clearing
                    </a>
                    <a href="/services#emergency-tree-care" onClick={onClose} className="mobile-service-link">
                      Emergency Tree Care
                    </a>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/contact" onClick={onClose} className="mobile-nav-item">
              Contact
            </NavLink>
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
    </div>
  );
}

