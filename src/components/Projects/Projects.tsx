'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Section header
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

      // Each project card
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
              className={`${styles.projectCard} ${index < 2 ? styles.featured : ''}`}
            >
              {/* Abstract visual placeholder */}
              <div
                className={styles.visual}
                style={{
                  background: `linear-gradient(135deg, ${project.color}10, ${project.color}05, transparent)`,
                }}
              >
                <div className={styles.visualInner}>
                  <span className={styles.projectInitial}>
                    {project.title.charAt(0)}
                  </span>
                  <div className={styles.visualGrid}>
                    {project.features.slice(0, 4).map((f, i) => (
                      <span key={i} className={styles.visualFeature}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardCategory}>{project.category}</span>
                  <span className={styles.cardYear}>{project.year}</span>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardTagline}>{project.tagline}</p>
                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techItem}>
                      {t}
                    </span>
                  ))}
                </div>

                <p className={styles.narrative}>{project.narrative}</p>

                <div className={styles.cardLinks}>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={`View ${project.title} source on GitHub`}
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.cardLink} ${styles.liveLinkStyle}`}
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
