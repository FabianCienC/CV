import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import type { Fact } from '../../types/cv';
import { countUp, motionEnabled, onFirstView } from '../../lib/motion';
import styles from './Hero.module.css';

interface FactListProps {
  facts: Fact[];
}

export function FactList({ facts }: FactListProps) {
  const listRef = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !motionEnabled()) return;

    return onFirstView(list, () => {
      animate(list.querySelectorAll('[data-reveal]'), {
        opacity: [0, 1],
        translateY: [12, 0],
        delay: stagger(60, { start: 300 }),
        duration: 500,
        ease: 'outCubic',
      });

      list.querySelectorAll<HTMLElement>('[data-count-to]').forEach((element) => {
        countUp(element, Number(element.dataset.countTo), Number(element.dataset.decimals ?? 0));
      });
    });
  }, []);

  return (
    <dl ref={listRef} className={styles.facts} data-print="hide">
      {facts.map((fact) => (
        <div key={fact.label} className={styles.fact} data-reveal>
          <dt>{fact.label}</dt>
          <dd>
            {typeof fact.value === 'number' ? (
              <span data-count-to={fact.value} data-decimals={fact.decimals ?? 0}>
                {fact.value.toFixed(fact.decimals ?? 0)}
              </span>
            ) : (
              <span className={styles.factText}>{fact.value}</span>
            )}
            {fact.suffix && <span className={styles.suffix}>{fact.suffix}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
