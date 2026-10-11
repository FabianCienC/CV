import { Section } from '../../components/Section/Section';
import { cv } from '../../data/cv';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className={styles.groups}>
        {cv.skills.map((group) => (
          <div key={group.name} className={styles.group} data-reveal>
            <dt>{group.name}</dt>
            <dd>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
