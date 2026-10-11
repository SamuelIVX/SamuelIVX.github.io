import { honors } from '../content/portfolio.js';
import { Highlight } from './ui/Highlight.jsx';

export default function Honors() {
  return (
    <section className="section honors" id="honors">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Recognition</p>
        <h2>Honors &amp; scholarships.</h2>
      </div>
      <div className="honors-grid">
        {honors.map(award => (
          <article key={award.title} className={`honor-card${award.featured ? ' honor-featured' : ''}`} data-reveal>
            <p className="honor-meta">
              {award.issuer}<span>{award.date}</span>
            </p>
            <h3>{award.title}</h3>
            <p className="honor-amount">{award.amount}</p>
            <p className="honor-distinction">
              <strong>{award.distinction}</strong>
            </p>
            <p className="honor-description">
              <Highlight text={award.description} phrase={award.highlight} />
            </p>
            {award.association && <p className="honor-association">{award.association}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
