import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { siteInfo } from '../data/services.js';

export default function NotFound() {
    return (
        <>
            <Seo
                title="Page Not Found | TreeCare Puchong"
                description="The page you're looking for doesn't exist."
            />

            <section className="section" style={{ textAlign: 'center', padding: '120px 0' }}>
                <div className="container">
                    <span className="eyebrow">Error 404</span>
                    <h1>Page Not Found</h1>
                    <p className="lead" style={{ margin: '0 auto 32px', maxWidth: 480 }}>
                        Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
                    </p>
                    <div className="hero-ctas" style={{ justifyContent: 'center' }}>
                        <Link to="/" className="btn btn-primary">Back to Home</Link>
                        <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    );
}