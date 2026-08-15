# TreeCare Puchong — React Website

A Vite + React (JavaScript) rebuild of the TreeCare Puchong marketing site, using React Router for multi-page navigation.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     Header, MobileNav, Footer, ServiceCard, ContactForm, FaqItem, Reveal, etc.
  pages/          Home, About, Services, TreeRemoval, Contact, Privacy, Terms
  data/           services.js (service/FAQ/testimonial content), icons.jsx (inline SVG icons)
  index.css       Global design system (colors, type, layout, responsive rules)
```

## Notes

- All images currently use placeholder URLs from `placehold.co` — replace the `src`/`image` values in `src/data/services.js` and each page with real photos.
- Business name, phone number, WhatsApp link and address live in `src/data/services.js` (`siteInfo`) — update once, and it updates everywhere.
- **Desktop header:** logo, nav links, and a single "Call Now" button.
- **Mobile header:** logo and hamburger menu only. Call/WhatsApp/quote actions live in the mobile nav drawer and the sticky bottom bar.
- Service cards use a photo instead of an icon, sourced from `src/data/services.js`.
- The map card is a static placeholder — swap in a real Google Maps embed (with an API key) when ready.
