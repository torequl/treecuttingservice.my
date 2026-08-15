import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { siteInfo } from '../data/services.js';

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions | TreeCare Puchong"
        description="Terms and Conditions for the use of the TreeCare Puchong website and services."
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link to="/">Home</Link> / Terms &amp; Conditions</div>
          <h1>Terms &amp; Conditions</h1>
          <p className="lead">Last updated: 16 October 2023</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p>These Terms &amp; Conditions govern your use of this website and any enquiry submitted to {siteInfo.name} ("we", "us", "our").</p>

          <h2>Use of This Website</h2>
          <p>This website is provided to give general information about our tree cutting and property care services in Puchong and surrounding areas. Content is provided in good faith, but we do not guarantee it is complete, accurate or up to date at all times.</p>

          <h2>Quotes &amp; Services</h2>
          <p>Any quote provided is an estimate based on the information available at the time and may be subject to change following an on-site assessment. Actual services performed will be agreed with you before work begins.</p>

          <h2>No Guarantee of Response Time</h2>
          <p>While we aim to respond to enquiries, including emergency requests, as promptly as possible, response times may vary depending on demand, location and circumstances.</p>

          <h2>Limitation of Liability</h2>
          <p>To the extent permitted by law, {siteInfo.name} shall not be liable for any indirect or consequential loss arising from the use of this website. This does not affect liability for services performed under a separate service agreement.</p>

          <h2>Intellectual Property</h2>
          <p>All content on this website, including text, images and design, is owned by or licensed to {siteInfo.name} and may not be reproduced without permission.</p>

          <h2>Governing Law</h2>
          <p>These Terms are governed by the laws of Malaysia.</p>

          <h2>Contact Us</h2>
          <p>
            {siteInfo.name}<br />
            {siteInfo.address}<br />
            {siteInfo.phoneDisplay}
          </p>

          <p className="muted" style={{ marginTop: 32, fontSize: '0.88rem' }}>
            This is a placeholder Terms &amp; Conditions page. Please have it reviewed by a qualified professional before publishing.
          </p>
        </div>
      </section>
    </>
  );
}
