import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { Section } from '../../components/Section/Section';
import { TagList } from '../../components/TagList/TagList';
import { cv } from '../../data/cv';
import { motionEnabled, onFirstView } from '../../lib/motion';
import styles from './Experience.module.css';

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);

  // The vertical rule is drawn top to bottom when the timeline comes into view.
  useEffect(() => {
    const timeline = timelineRef.current;
    const rail = railRef.current;
    if (!timeline || !rail || !motionEnabled()) return;

    rail.style.transform = 'scaleY(0)';
    return onFirstView(timeline, () => {
      animate(rail, { scaleY: [0, 1], duration: 1600, ease: 'inOutQuad' });
    });
  }, []);

  return (
    <Section id="experience" title="Experience">
      <div ref={timelineRef} className={styles.timeline}>
        <span ref={railRef} className={styles.rail} aria-hidden="true" />
        <ol className={styles.list}>
          {cv.experience.map((role) => (
            <li key={`${role.title}-${role.organization}`} className={styles.role} data-reveal>
              <p className={styles.period}>{role.period}</p>
              <div>
                <h3 className={styles.title}>{role.title}</h3>
                <p className={styles.organization}>
                  {role.organization}
                  <span className={styles.location}> · {role.location}</span>
                </p>
                <ul className={styles.highlights}>
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <TagList tags={role.tags} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
