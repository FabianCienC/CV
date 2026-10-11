import { Section } from '../../components/Section/Section';
import { cv } from '../../data/cv';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <ul className={styles.links} data-reveal>
        {cv.profile.links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <span className={styles.label}>{link.label}</span>
              <span className={styles.url}>{decodeURI(link.href).replace(/^https:\/\/(www\.)?/, '')}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
