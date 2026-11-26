import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Project } from '@/data/portfolio';
import ProjectArchitecture from './ProjectArchitecture';
import ProjectLinks from './ProjectLinks';
import styles from './ProjectDetails.module.scss';

interface ProjectDetailsProps {
  project: Project;
  index: number;
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectDetails({
  project,
  index,
  prevProject,
  nextProject,
}: ProjectDetailsProps) {
  const { caseStudy } = project;
  const displayIndex = `0${index + 1}`;

  return (
    <article className={styles.page}>
      <div className={styles.container}>
        {/* Top Back Bar */}
        <div className={styles.topBar}>
          <Link href="/#work" className={styles.backToWork}>
            <ArrowLeft size={15} />
            <span>Back to The Work</span>
          </Link>
          <span className={styles.topMeta}>
            CASE STUDY {displayIndex} // {project.projectType.toUpperCase()}
          </span>
        </div>

        {/* 1. Project Overview */}
        <header className={styles.hero}>
          <div className={styles.badges}>
            <span className={styles.categoryBadge}>{project.category}</span>
            <span className={styles.statusBadge}>
              <span className={styles.statusDot} aria-hidden="true" />
              {project.status}
            </span>
          </div>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.description}</p>

          <div className={styles.overviewMeta}>
            <div className={styles.metaCell}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>{project.role}</span>
            </div>
            <div className={styles.metaCell}>
              <span className={styles.metaLabel}>Classification</span>
              <span className={styles.metaValue}>{project.projectType}</span>
            </div>
            <div className={styles.metaCell}>
              <span className={styles.metaLabel}>Year</span>
              <span className={styles.metaValue}>{project.year}</span>
            </div>
            <div className={styles.metaCell}>
              <span className={styles.metaLabel}>Stack</span>
              <span className={styles.metaValue}>{project.tech.join(' · ')}</span>
            </div>
          </div>

          <ProjectLinks
            repo={project.repo}
            live={project.live}
            title={project.title}
          />
        </header>

        {/* Primary Screenshot Walkthrough */}
        <section className={styles.screenshotSection} aria-label="Application preview">
          <div className={styles.screenshotFrame}>
            <Image
              src={project.image}
              alt={`${project.title} application interface screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className={styles.screenshotImage}
              priority
            />
          </div>
          <p className={styles.screenshotCaption}>
            {project.title} — Primary interface &amp; landing experience ({project.live || project.repo})
          </p>
        </section>

        {/* 2. The Problem & 3. The Solution */}
        <section className={styles.twoColSection}>
          <div className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNum}>01</span>
              <h2 className={styles.sectionTitle}>The Problem</h2>
            </div>
            <p className={styles.bodyCopy}>{caseStudy.problem.summary}</p>
            <p className={styles.audienceNote}>
              <strong>Target Users:</strong> {caseStudy.problem.audience}
            </p>
            <ul className={styles.bulletList}>
              {caseStudy.problem.painPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNum}>02</span>
              <h2 className={styles.sectionTitle}>The Solution</h2>
            </div>
            <p className={styles.bodyCopy}>{caseStudy.solution.summary}</p>
            <ul className={styles.bulletList}>
              {caseStudy.solution.designDecisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Key Features */}
        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>03</span>
            <h2 className={styles.sectionTitle}>Key Implemented Features</h2>
          </div>

          <div className={styles.featuresGrid}>
            {caseStudy.featureGroups.map((group) => (
              <div key={group.category} className={styles.featureCard}>
                <h3 className={styles.featureCategory}>{group.category}</h3>
                <ul className={styles.bulletList}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Technical Architecture */}
        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>04</span>
            <h2 className={styles.sectionTitle}>Technical Architecture</h2>
          </div>
          <ProjectArchitecture architecture={caseStudy.architecture} />
        </section>

        {/* 6. My Contribution */}
        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>05</span>
            <h2 className={styles.sectionTitle}>My Contribution</h2>
          </div>
          <div className={styles.contributionBox}>
            <ul className={styles.bulletList}>
              {caseStudy.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. Challenges & Engineering Decisions */}
        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>06</span>
            <h2 className={styles.sectionTitle}>Challenges &amp; Engineering Decisions</h2>
          </div>

          <div className={styles.challengesList}>
            {caseStudy.challenges.map((ch, idx) => (
              <div key={ch.title} className={styles.challengeCard}>
                <div className={styles.challengeHeader}>
                  <span className={styles.challengeNum}>0{idx + 1}</span>
                  <h3 className={styles.challengeTitle}>{ch.title}</h3>
                </div>
                <div className={styles.challengeGrid}>
                  <div>
                    <span className={styles.subLabel}>Problem</span>
                    <p className={styles.challengeText}>{ch.problem}</p>
                  </div>
                  <div>
                    <span className={styles.subLabel}>Approach</span>
                    <p className={styles.challengeText}>{ch.approach}</p>
                  </div>
                  <div>
                    <span className={styles.subLabel}>Outcome</span>
                    <p className={styles.challengeText}>{ch.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Project Links & Footer Nav */}
        <footer className={styles.caseFooter}>
          <ProjectLinks
            repo={project.repo}
            live={project.live}
            title={project.title}
            showBackLink
          />

          <div className={styles.pagination}>
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className={styles.pageLink}
              >
                <span className={styles.pageDir}>
                  <ArrowLeft size={14} /> Previous Project
                </span>
                <span className={styles.pageName}>{prevProject.title}</span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.id}`}
                className={`${styles.pageLink} ${styles.pageLinkRight}`}
              >
                <span className={styles.pageDir}>
                  Next Project <ArrowRight size={14} />
                </span>
                <span className={styles.pageName}>{nextProject.title}</span>
              </Link>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
}
