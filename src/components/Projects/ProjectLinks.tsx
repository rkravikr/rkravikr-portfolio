import Link from 'next/link';
import { ExternalLink, Github, ArrowRight, ArrowLeft } from 'lucide-react';
import styles from './ProjectDetails.module.scss';

interface ProjectLinksProps {
  repo: string;
  live?: string;
  title: string;
  caseStudyHref?: string;
  caseStudyLabel?: string;
  showBackLink?: boolean;
}

export default function ProjectLinks({
  repo,
  live,
  title,
  caseStudyHref,
  caseStudyLabel = 'Read Case Study',
  showBackLink = false,
}: ProjectLinksProps) {
  return (
    <div className={styles.linksBar}>
      {showBackLink && (
        <Link href="/#work" className={styles.backLink}>
          <ArrowLeft size={15} />
          <span>Back to Projects</span>
        </Link>
      )}

      <div className={styles.actionGroup}>
        {caseStudyHref && (
          <Link href={caseStudyHref} className={styles.primaryAction}>
            <span>{caseStudyLabel}</span>
            <ArrowRight size={15} />
          </Link>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveAction}
            aria-label={`Open ${title} live demo`}
          >
            <ExternalLink size={15} />
            <span>Live Demo</span>
          </a>
        )}

        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sourceAction}
          aria-label={`View ${title} source code on GitHub`}
        >
          <Github size={15} />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  );
}
