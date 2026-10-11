import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

/** Standard CV section: heading in the left column, content on the right. */
export function Section({ id, title, children }: SectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section id={id} ref={ref} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={`container ${styles.grid}`}>
        <h2 id={`${id}-title`} className={styles.title} data-reveal>
          {title}
        </h2>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
