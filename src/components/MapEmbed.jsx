import { siteInfo } from '../data/services.js';

export default function MapEmbed() {
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3787.0623052984974!2d101.63715069999999!3d3.0417891000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b4852782ec3%3A0x6b0f27f43358f0dd!2sJalan%20Tbk%201%2F10%2C%2047100%20Puchong%2C%20Selangor%2C%20Malaysia!5e1!3m2!1sen!2sbd!4v1786816710866!5m2!1sen!2sbd" width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    );
}