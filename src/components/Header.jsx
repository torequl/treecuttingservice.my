import { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TreeIcon, PhoneIcon, MenuIcon, ChevronDownIcon } from '../data/icons.jsx';
import { siteInfo } from '../data/services.js';
import MiniHeader from './MiniHeader.jsx';

export default function Header({ onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [prevKey, setPrevKey] = useState(location.key);
  if (prevKey !== location.key) {
    setPrevKey(location.key);
    setDropdownOpen(false);
  }

  // Handle outside click & escape key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const isServiceActive =
    location.pathname.startsWith('/services') ||
    location.pathname.startsWith('/tree-removal') ||
    location.pathname.startsWith('/tree-cutting') ||
    location.pathname.startsWith('/landscaping');

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <NavLink to="/" className="brand" onClick={() => setDropdownOpen(false)}>
          <span className="brand-mark">
            <TreeIcon />
          </span>
          <span>
            {siteInfo.name}
            <small>{siteInfo.tagline}</small>
          </span>
        </NavLink>

        <nav className="main-nav" aria-label="Primary">
          <NavLink to="/" end onClick={() => setDropdownOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setDropdownOpen(false)}>
            About
          </NavLink>

          {/* Service Dropdown */}
          <div
            className="nav-dropdown-wrapper"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`nav-dropdown-toggle ${isServiceActive ? 'active' : ''} ${dropdownOpen ? 'open' : ''}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDownIcon className={`nav-dropdown-chevron ${dropdownOpen ? 'rotate' : ''}`} />
            </button>

            <div className={`nav-dropdown-menu ${dropdownOpen ? 'show' : ''}`} role="menu">
              <div className="nav-dropdown-links-grid">
                <NavLink
                  to="/tree-cutting"
                  className="nav-dropdown-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="dropdown-link-dot tree-dot"></span>
                  <span>Tree Cutting</span>
                </NavLink>

                <NavLink
                  to="/tree-removal"
                  className="nav-dropdown-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="dropdown-link-dot tree-dot"></span>
                  <span>Tree Removal</span>
                </NavLink>

                <NavLink
                  to="/stump-grinding"
                  className="nav-dropdown-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="dropdown-link-dot tree-dot"></span>
                  <span>Stump Grinding</span>
                </NavLink>

                <NavLink
                  to="/grass-cutting"
                  className="nav-dropdown-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="dropdown-link-dot landscape-dot"></span>
                  <span>Grass Cutting</span>
                </NavLink>

                <NavLink
                  to="/tree-planting"
                  className="nav-dropdown-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="dropdown-link-dot landscape-dot"></span>
                  <span>Tree Planting</span>
                </NavLink>

                <NavLink
                  to="/landscaping"
                  className="nav-dropdown-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="dropdown-link-dot landscape-dot"></span>
                  <span>Landscaping</span>
                </NavLink>

                <a
                  href="/services#tree-trimming"
                  className="nav-dropdown-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="dropdown-link-dot"></span>
                  <span>Tree Trimming</span>
                </a>

                <a
                  href="/services#tree-roots-removal"
                  className="nav-dropdown-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="dropdown-link-dot"></span>
                  <span>Tree Roots Removal</span>
                </a>

                <a
                  href="/services#land-clearing"
                  className="nav-dropdown-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="dropdown-link-dot"></span>
                  <span>Land Clearing</span>
                </a>

                <a
                  href="/services#emergency-tree-care"
                  className="nav-dropdown-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="dropdown-link-dot"></span>
                  <span>Emergency Tree Care</span>
                </a>
              </div>
            </div>
          </div>

          <NavLink to="/contact" onClick={() => setDropdownOpen(false)}>
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <a href={siteInfo.phoneHref} className="btn btn-secondary">
            <PhoneIcon />
            +60 11-6383 5543
          </a>
          <button className="menu-toggle" aria-label="Open menu" onClick={onOpenMenu}>
            <MenuIcon />
          </button>
        </div>
      </div>
      <MiniHeader />
    </header>
  );
}

