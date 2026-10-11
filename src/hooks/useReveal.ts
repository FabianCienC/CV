import { useEffect, useRef } from 'react';
import { motionEnabled, revealIn } from '../lib/motion';

/**
 * Animates every `[data-reveal]` element inside the returned ref as it
 * scrolls into view. Elements that enter together are staggered.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !motionEnabled()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target);
        if (visible.length === 0) return;
        visible.forEach((element) => observer.unobserve(element));
        revealIn(visible);
      },
      { rootMargin: '0px 0px -10% 0px' },
    );

    root.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return ref;
}
