import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { Section } from '../../components/Section/Section';
import { cv } from '../../data/cv';
import { motionEnabled } from '../../lib/motion';
import { findSkillUsage } from './findSkillUsage';
import styles from './Skills.module.css';

const DEFAULT_SKILL = 'Python';

export function Skills() {
  const [selected, setSelected] = useState(DEFAULT_SKILL);
  const usage = findSkillUsage(cv, selected);
  const usageRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Re-animate the "where I've used it" panel each time the selection changes.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const panel = usageRef.current;
    if (!panel || !motionEnabled()) return;

    animate(panel.querySelectorAll('[data-usage-item]'), {
      opacity: [0, 1],
      translateX: [-8, 0],
      delay: stagger(60),
      duration: 450,
      ease: 'outCubic',
    });
  }, [selected]);

  return (
    <Section id="skills" title="Skills">
      <div className={styles.layout}>
        <dl className={styles.groups}>
          {cv.skills.map((group) => (
            <div key={group.name} className={styles.group} data-reveal>
              <dt>{group.name}</dt>
              <dd>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <button
                        type="button"
                        className={styles.skill}
                        aria-pressed={selected === skill}
                        onClick={() => setSelected(skill)}
                        onMouseEnter={() => setSelected(skill)}
                        onFocus={() => setSelected(skill)}
                      >
                        {skill}
                      </button>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>

        <div ref={usageRef} className={styles.usage} aria-live="polite" data-reveal data-print="hide">
          <p className={styles.usageHeading}>
            Where I’ve used <strong>{selected}</strong>
          </p>
          {usage.length > 0 ? (
            <ul className={styles.usageList}>
              {usage.map((item) => (
                <li key={item.label} data-usage-item>
                  <span className={styles.usageLabel}>{item.label}</span>
                  <span className={styles.usageContext}>{item.context}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.usageEmpty} data-usage-item>
              Studied and practised, not yet tied to a role or project listed here.
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
