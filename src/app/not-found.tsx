import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.glowOrb} />
      </div>

      <div className={styles.container}>
        <div className={styles.label}>
          <span>Signal Lost // 404</span>
        </div>

        <h1 className={styles.heading}>
          Out of the <span>Void.</span>
        </h1>

        <p className={styles.description}>
          The coordinates or project signal you are tracking does not exist in this archive. 
          Return to the main signal to explore active projects and engineering work.
        </p>

        <Link href="/" className={styles.ctaButton}>
          <ArrowLeft size={16} />
          <span>Return to Signal</span>
        </Link>
      </div>
    </div>
  );
}
