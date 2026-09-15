import { siteInfo } from '../data/services.js';

export default function MiniHeader() {
    const promoWhatsAppHref = `${siteInfo.whatsappHref}?text=${encodeURIComponent(
        "Hi TreeCare, I saw the 'Get 50% OFF Today' promotion. I would like to request a quote."
    )}`;

    return (
        <aside className="mini-header-bar" aria-label="Limited-time promotion">
            <a
                href={promoWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mini-header-link"
                title="Claim 50% OFF Today on WhatsApp"
            >
                <div className="mini-header-inner">
                    {/* <span className="mini-header-badge">
                        <span className="mini-header-dot" aria-hidden="true" />
                        SPECIAL OFFER
                    </span> */}

                    <span className="mini-header-title">Get 50% OFF Today</span>

                    {/* <span className="mini-header-sub">
                        Fast 5-Min WhatsApp Estimate • KL &amp; Selangor
                    </span> */}

                    {/* <span className="mini-header-cta">
                        <span>Claim Offer</span>
                        <span className="mini-header-arrow" aria-hidden="true">→</span>
                    </span> */}
                </div>
            </a>
        </aside>
    );
}
