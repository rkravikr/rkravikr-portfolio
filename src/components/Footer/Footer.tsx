import { profile } from '@/data/portfolio';
import styles from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.name}>{profile.name}</span>
          <span className={styles.title}>{profile.title}</span>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {year} {profile.name}. All rights reserved.
          </span>
          <div className={styles.footerLinks}>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              style={{ color: '#B5A6FF' }}
            >
              Resume ↗
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a href={profile.links.email} aria-label="Email">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
