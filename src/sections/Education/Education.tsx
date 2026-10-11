import { Section } from '../../components/Section/Section';
import { cv } from '../../data/cv';
import styles from './Education.module.css';

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className={styles.degrees}>
        {cv.education.map((degree) => (
          <li key={degree.title} className={styles.degree} data-reveal>
            <div className={styles.heading}>
              <h3>{degree.title}</h3>
              <p className={styles.period}>{degree.period}</p>
            </div>
            <p className={styles.institution}>
              {degree.institution} · {degree.location}
            </p>
            <ul className={styles.notes}>
              {degree.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className={styles.columns}>
        <div data-reveal>
          <h3 className={styles.subheading}>Certifications &amp; training</h3>
          <ul className={styles.list}>
            {cv.certifications.map((certification) => (
              <li key={certification.name}>
                <span className={styles.itemTitle}>{certification.name}</span>
                <span className={styles.itemMeta}>
                  {certification.issuer}, {certification.year}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <h3 className={styles.subheading}>Awards</h3>
          <ul className={styles.list}>
            {cv.awards.map((award) => (
              <li key={award}>
                <span className={styles.itemTitle}>{award}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
