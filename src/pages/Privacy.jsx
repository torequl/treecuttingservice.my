import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { siteInfo } from '../data/services.js';

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | TreeCare Puchong"
        description="Privacy Policy for TreeCare Puchong, describing how we collect and use information submitted through this website."
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link to="/">Home</Link> / Privacy Policy</div>
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: 16 October 2023</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p>This Privacy Policy explains how {siteInfo.name} ("we", "us", "our") collects, uses and protects information submitted through this website.</p>

          <h2>Information We Collect</h2>
          <p>When you contact us through the contact form, phone or WhatsApp, we may collect information such as your name, phone number, email address, property location and details of the service you are enquiring about.</p>

          <h2>How We Use Your Information</h2>
          <p>We use the information you provide only to respond to your enquiry, prepare a quote, and communicate with you about the tree or property services you have requested.</p>

          <h2>Information Sharing</h2>
          <p>We do not sell your personal information. Information is not shared with third parties except where necessary to deliver the requested service or where required by law.</p>

          <h2>Data Retention</h2>
          <p>We retain enquiry information only for as long as needed to respond to your request and maintain necessary business records.</p>

          <h2>Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information by contacting us using the details below.</p>

          <h2>Contact Us</h2>
          <p>
            {siteInfo.name}<br />
            {siteInfo.address}<br />
            {siteInfo.phoneDisplay}
          </p>

          <p className="muted" style={{ marginTop: 32, fontSize: '0.88rem' }}>
            This is a placeholder Privacy Policy. Please have it reviewed by a qualified professional before publishing, and update it to reflect your actual data practices and applicable Malaysian data protection law (PDPA).
          </p>
        </div>
      </section>
    </>
  );
}
