import { useEffect, useRef } from 'react';
import { motionEnabled } from '../../lib/motion';
import type { SliceScene } from './SliceScene';
import styles from './Hero.module.css';

function cssColor(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export function SliceFigure() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    let scene: SliceScene | undefined;
    let cancelled = false;
    const resizeObserver = new ResizeObserver(() => scene?.resize());
    const visibilityObserver = new IntersectionObserver(([entry]) => scene?.setRunning(entry.isIntersecting));

    // three.js is loaded on demand so the text of the page doesn't wait for it.
    import('./SliceScene').then(({ SliceScene }) => {
      if (cancelled) return;
      try {
        scene = new SliceScene(container, {
          ink: cssColor('--color-ink'),
          accent: cssColor('--color-accent'),
          animated: motionEnabled(),
        });
      } catch {
        // No WebGL available: the figure simply stays empty.
        return;
      }
      resizeObserver.observe(container);
      visibilityObserver.observe(container);
    });

    return () => {
      cancelled = true;
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      scene?.dispose();
    };
  }, []);

  return (
    <figure className={styles.figure} data-reveal data-intro data-print="hide">
      <div ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <figcaption className={styles.caption}>
        <span>Fig. 1.</span> Point-sampled surface of an irregular mass with a slice plane sweeping through
        it, the kind of view I work with when segmenting medical images.
      </figcaption>
    </figure>
  );
}
