import { useState } from 'react';
import { CheckIcon } from '../data/icons.jsx';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form Data:', Object.fromEntries(formData.entries()));
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="contact-form-card">
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-field">
            <label htmlFor="service">Service Required</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>Select a service</option>
              <option>Tree Removal</option>
              <option>Tree Trimming</option>
              <option>Land Clearing</option>
              <option>Landscaping</option>
              <option>Tree Roots Removal</option>
              <option>Emergency Tree Care</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-field full">
            <label htmlFor="location">Property Location</label>
            <input type="text" id="location" name="location" placeholder="e.g. Puchong, Selangor" required />
          </div>
          <div className="form-field full">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell us about your tree or property service needs" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Request a Free Quote</button>
        <p className="form-note">We'll use your information only to respond to your enquiry.</p>
        <div className={`form-success ${submitted ? 'show' : ''}`}>
          <CheckIcon />
          Thanks — your enquiry has been received. We'll be in touch shortly.
        </div>
      </form>
    </div>
  );
}
