import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../data/icons.jsx';
import Reveal from './Reveal.jsx';

export default function ServiceCard({ service, id }) {
  const isInternalRoute = !service.link.includes('#');

  return (
    <Reveal className="service-card" id={id}>
      <div className="service-card-img">
        <img src={service.image} alt={service.imageAlt} loading="lazy" width="640" height="400" />
      </div>
      <div className="service-card-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        {isInternalRoute ? (
          <Link to={service.link} className="card-link">
            {service.linkLabel} <ArrowRightIcon />
          </Link>
        ) : (
          <a href={service.link} className="card-link">
            {service.linkLabel} <ArrowRightIcon />
          </a>
        )}
      </div>
    </Reveal>
  );
}
