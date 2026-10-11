import { useEffect, useState } from 'react';
import { navigation } from '../../app/navigation';
import { cv } from '../../data/cv';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './SiteHeader.module.css';

const sectionIds = navigation.map((item) => item.id);

export function SiteHeader() {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} data-print="hide">
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          {cv.profile.shortName}
        </a>

        <nav aria-label="Sections" className={styles.nav}>
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? styles.active : undefined}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" className={styles.print} onClick={() => window.print()}>
          Print / PDF
        </button>
      </div>
    </header>
  );
}
