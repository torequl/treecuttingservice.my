import { Link } from 'react-router-dom';
import { TreeIcon } from '../data/icons.jsx';
import { siteInfo } from '../data/services.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand">
              <span className="brand-mark"><TreeIcon /></span>
              {siteInfo.name}
            </span>
            <p>Professional tree cutting and property care services in Puchong, Selangor.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/#why-choose-us">Why Choose Us</Link></li>
              <li><Link to="/#faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/tree-removal">Tree Removal</Link></li>
              <li><Link to="/services#tree-trimming">Tree Trimming</Link></li>
              <li><Link to="/services#land-clearing">Land Clearing</Link></li>
              <li><Link to="/landscaping">Landscaping</Link></li>
              <li><Link to="/services#tree-roots-removal">Tree Roots Removal</Link></li>
              <li><Link to="/services#emergency-tree-care">Emergency Tree Care</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p className="addr">{siteInfo.address}</p>
            <p className="addr">{siteInfo.phoneDisplay}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 {siteInfo.name}. All Rights Reserved.</span>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
