import { animate, stagger } from 'animejs';

/**
 * Motion is enabled in main.tsx by adding `js-motion` to <html>, unless the
 * visitor asked for reduced motion. Without that class every element is
 * rendered in its final state and these helpers do nothing.
 */
export function motionEnabled(): boolean {
  return document.documentElement.classList.contains('js-motion');
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Fade + lift used for most content as it scrolls into view. */
export function revealIn(targets: Element[]) {
  return animate(targets, {
    opacity: [0, 1],
    translateY: [12, 0],
    duration: 500,
    delay: stagger(50),
    ease: 'outCubic',
  });
}

/** Counts an element's text from 0 up to `to`. */
export function countUp(element: HTMLElement, to: number, decimals = 0) {
  const counter = { value: 0 };
  return animate(counter, {
    value: to,
    duration: 1000,
    ease: 'outQuart',
    onUpdate: () => {
      element.textContent = counter.value.toFixed(decimals);
    },
  });
}

/**
 * Calls `callback` once, the first time `element` enters the viewport.
 * Returns a cleanup function.
 */
export function onFirstView(element: Element, callback: () => void, rootMargin = '0px 0px -15% 0px') {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      callback();
    },
    { rootMargin },
  );
  observer.observe(element);
  return () => observer.disconnect();
}
