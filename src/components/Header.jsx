import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TreeIcon, PhoneIcon, MenuIcon } from '../data/icons.jsx';
import { siteInfo } from '../data/services.js';

export default function Header({ onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <NavLink to="/" className="brand">
          <span className="brand-mark">
            <TreeIcon />
          </span>
          <span>
            {siteInfo.name}
            <small>{siteInfo.tagline}</small>
          </span>
        </NavLink>

        <nav className="main-nav" aria-label="Primary">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/#why-choose-us">Why Choose Us</NavLink>
          <NavLink to="/#service-area">Service Areas</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header-actions">
          <a href={siteInfo.phoneHref} className="btn btn-secondary">
            <PhoneIcon />
            Call Now
          </a>
          <button className="menu-toggle" aria-label="Open menu" onClick={onOpenMenu}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
