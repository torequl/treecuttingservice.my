import { useState } from 'react';
import Header from './Header.jsx';
import MobileNav from './MobileNav.jsx';
import Footer from './Footer.jsx';
import MobileCtaBar from './MobileCtaBar.jsx';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="has-mobile-bar">
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>{children}</main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
