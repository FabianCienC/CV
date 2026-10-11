import { useEffect, useRef } from 'react';
import { createTimeline, splitText, stagger, utils } from 'animejs';
import { cv } from '../../data/cv';
import { motionEnabled } from '../../lib/motion';
import { FactList } from './FactList';
import { SliceFigure } from './SliceFigure';
import styles from './Hero.module.css';

export function Hero() {
  const { profile } = cv;
  const rootRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  // Intro: the name rises word by word, then the rest of the block fades in.
  useEffect(() => {
    const root = rootRef.current;
    const name = nameRef.current;
    if (!root || !name || !motionEnabled()) return;

    const split = splitText(name, { words: { wrap: 'clip' } });
    utils.set(name, { opacity: 1 });

    // Kept short on purpose: everything is readable in well under a second.
    const timeline = createTimeline({ defaults: { ease: 'outCubic', duration: 500 } })
      .add(split.words, { translateY: ['105%', '0%'], duration: 700, ease: 'outExpo', delay: stagger(60) })
      .add(
        root.querySelectorAll('[data-intro]'),
        { opacity: [0, 1], translateY: [10, 0], delay: stagger(50) },
        '-=550',
      );

    return () => {
      timeline.revert();
      split.revert();
    };
  }, []);

  return (
    <section id="top" ref={rootRef} className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h1 ref={nameRef} className={styles.name} data-reveal>
            {profile.name}
          </h1>
          <p className={styles.headline} data-reveal data-intro>
            {profile.headline}
          </p>
          <p className={styles.summary} data-reveal data-intro>
            {profile.summary}
          </p>
          <p className={styles.meta} data-reveal data-intro>
            {profile.location}
            {cv.languages.map((language) => (
              <span key={language.name}>
                {' · '}
                {language.name} ({language.level.toLowerCase()})
              </span>
            ))}
          </p>
          <ul className={styles.links} data-reveal data-intro>
            {profile.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  {/* On paper a bare label is useless, so the PDF shows the address. */}
                  <span className={styles.printUrl}>
                    : {decodeURI(link.href).replace(/^https:\/\/(www\.)?/, '')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <SliceFigure />
      </div>

      <div className="container">
        <FactList facts={cv.facts} />
      </div>
    </section>
  );
}
