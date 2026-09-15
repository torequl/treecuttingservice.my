import Reveal from './Reveal.jsx';
import img01 from '../asset/01.jpeg';
import img02 from '../asset/02.jpeg';
import img03 from '../asset/03.jpeg';
import img04 from '../asset/04.jpeg';
import img05 from '../asset/05.jpeg';
import img06 from '../asset/06.jpeg';
import img07 from '../asset/07.jpeg';
import img08 from '../asset/08.jpeg';
import img09 from '../asset/09.jpeg';
import img10 from '../asset/10.jpeg';
import img11 from '../asset/11.jpeg';
import img12 from '../asset/12.jpeg';

const defaultProjects = [
  { id: 1, img: img01, alt: 'Tree cutting and removal work in KL & Selangor' },
  { id: 2, img: img02, alt: 'Tree trimming and shaping work in KL & Selangor' },
  { id: 3, img: img03, alt: 'Land clearing and ground clearing project in KL & Selangor' },
  { id: 4, img: img04, alt: 'Garden and lawn landscaping project in KL & Selangor' },
  { id: 5, img: img05, alt: 'Branch pruning and tree care in KL & Selangor' },
  { id: 6, img: img06, alt: 'Large tree trunk removal in KL & Selangor' },
  { id: 7, img: img07, alt: 'Grass cutting and garden maintenance in KL & Selangor' },
  { id: 8, img: img08, alt: 'Hazardous tree removal in KL & Selangor' },
  { id: 9, img: img09, alt: 'Tree planting and landscaping in KL & Selangor' },
  { id: 10, img: img10, alt: 'Stump and root removal in KL & Selangor' },
  { id: 11, img: img11, alt: 'Emergency storm tree clearance in KL & Selangor' },
  { id: 12, img: img12, alt: 'Canopy thinning and branch trimming in KL & Selangor' },
];

export default function ProjectGallery({ title = 'Our Recent Projects', subtitle = 'Browse our recent tree cutting, trimming, and landscaping work completed around KL & Selangor.' }) {
  return (
    <section className="section section-gallery" id="recent-projects">
      <div className="container">
        <Reveal className="section-head">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Reveal>

        <div className="gallery-grid-4x3">
          {defaultProjects.map((project) => (
            <Reveal key={project.id} className="gallery-item-card">
              <div className="gallery-img-wrapper">
                <img
                  src={project.img}
                  alt={project.alt}
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
