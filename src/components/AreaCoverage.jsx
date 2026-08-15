import Reveal from './Reveal.jsx';
import { CheckIcon } from '../data/icons.jsx';
import { serviceAreas } from '../data/services.js';

export default function AreaCoverage({ eyebrow = 'Full Coverage List', title = 'Area Coverage' }) {
  return (
    <div className="area-coverage-wrap">
      {(eyebrow || title) && (
        <Reveal className="section-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2>{title}</h2>}
        </Reveal>
      )}
      <div className="area-coverage">
        {Object.entries(serviceAreas).map(([region, areas]) => (
          <Reveal className="area-region" key={region}>
            <h3>{region}</h3>
            <div className="area-region-list">
              {areas.map((area) => (
                <span className="area-check-item" key={area}>
                  <CheckIcon />
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
