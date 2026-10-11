import { Section } from '../../components/Section/Section';
import { cv } from '../../data/cv';
import styles from './Profile.module.css';

export function Profile() {
  return (
    <Section id="profile" title="Profile">
      <div className={styles.summary}>
        {cv.profile.summary.map((paragraph) => (
          <p key={paragraph} data-reveal>
            {paragraph}
          </p>
        ))}
      </div>

      <dl className={styles.languages} data-reveal>
        {cv.languages.map((language) => (
          <div key={language.name}>
            <dt>{language.name}</dt>
            <dd>{language.level}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
