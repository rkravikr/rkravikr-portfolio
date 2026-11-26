'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data/portfolio';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.sectionHeading}`,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      const cards = sectionRef.current?.querySelectorAll(`.${styles.projectCard}`);
      cards?.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.projects} id="work">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.chapterNum}>02</span>
            <span>The Work</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Things I&apos;ve <span className={styles.accent}>built.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`${styles.projectCard} ${index === 0 ? styles.featured : ''}`}
            >
              {/* Project Screenshot Preview */}
              <Link
                href={`/projects/${project.id}`}
                className={styles.visual}
                aria-label={`Open ${project.title} case study`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.tagline}`}
                  fill
                  sizes={
                    index === 0
                      ? '(max-width: 768px) 100vw, 800px'
                      : '(max-width: 768px) 100vw, 640px'
                  }
                  className={styles.projectImage}
                  priority={index === 0}
                />
                <div
                  className={styles.visualOverlay}
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 40%, rgba(8, 9, 11, 0.72) 100%)',
                  }}
                />
                <span className={styles.projectIndex}>0{index + 1}</span>
                <span className={styles.projectStatus}>{project.status}</span>
              </Link>

              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardCategory}>
                    {project.category} · {project.projectType}
                  </span>
                  <span className={styles.cardYear}>{project.year}</span>
                </div>

                <h3 className={styles.cardTitle}>
                  <Link href={`/projects/${project.id}`} className={styles.titleLink}>
                    {project.title}
                  </Link>
                </h3>
                <p className={styles.cardTagline}>{project.tagline}</p>
                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.insights}>
                  <div className={styles.insightRow}>
                    <span className={styles.insightLabel}>Problem</span>
                    <p className={styles.insightText}>{project.problemSummary}</p>
                  </div>
                  <div className={styles.insightRow}>
                    <span className={styles.insightLabel}>Contribution</span>
                    <p className={styles.insightText}>{project.contributionSummary}</p>
                  </div>
                </div>

                <div className={styles.techStack}>
                  {project.tech.slice(0, 5).map((t) => (
                    <span key={t} className={styles.techItem}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.cardLinks}>
                  <Link
                    href={`/projects/${project.id}`}
                    className={`${styles.cardLink} ${styles.caseStudyLink}`}
                  >
                    <span>
                      {project.hasFullCaseStudy ? 'Case Study' : 'Details'}
                    </span>
                    <ArrowRight size={14} />
                  </Link>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.cardLink} ${styles.liveLinkStyle}`}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github size={14} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
