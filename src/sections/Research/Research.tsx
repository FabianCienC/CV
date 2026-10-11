import { Section } from '../../components/Section/Section';
import { cv } from '../../data/cv';
import styles from './Research.module.css';

const orcid = cv.profile.links.find((link) => link.label === 'ORCID');

export function Research() {
  return (
    <Section id="research" title="Research">
      <p className={styles.statement} data-reveal>
        {cv.researchStatement}
      </p>

      <h3 className={styles.subheading} data-reveal>
        Selected publications
      </h3>
      <ol className={styles.publications}>
        {cv.publications.map((publication, index) => (
          <li key={publication.title} className={styles.publication} data-reveal>
            <span className={styles.index}>[{index + 1}]</span>
            <div>
              <p className={styles.title}>
                {publication.url ? (
                  <a href={publication.url} target="_blank" rel="noreferrer">
                    {publication.title}
                  </a>
                ) : (
                  publication.title
                )}
              </p>
              <p className={styles.meta}>
                <em>{publication.venue}</em>, {publication.year}
                {publication.details && <>. {publication.details}</>}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {orcid && (
        <p className={styles.orcid} data-reveal>
          Full record on{' '}
          <a href={orcid.href} target="_blank" rel="noreferrer">
            ORCID
          </a>
          .
        </p>
      )}
    </Section>
  );
}
