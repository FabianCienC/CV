import { cv } from '../../data/cv';
import styles from './SiteFooter.module.css';

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className={styles.footer} data-print="hide">
      <div className={`container ${styles.inner}`}>
        <p>
          © {year} {cv.profile.name} / v{__APP_VERSION__}
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
