'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/portfolio';
import { Camera, Download } from 'lucide-react';
import styles from './About.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Section label
      gsap.fromTo(
        `.${styles.label}`,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Bio paragraphs
      gsap.fromTo(
        `.${styles.paragraph}`,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${styles.bio}`,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Aspiration card
      gsap.fromTo(
        `.${styles.aspiration}`,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${styles.aspiration}`,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Portrait card
      gsap.fromTo(
        `.${styles.portraitCard}`,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${styles.portraitCard}`,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Details list
      gsap.fromTo(
        `.${styles.detailItem}`,
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${styles.details}`,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.chapterNum}>01</span>
          <span>The Person</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.main}>
            <h2 className={styles.heading}>
              A developer who <br />
              <span className={styles.accent}>thinks beyond code.</span>
            </h2>

            <div className={styles.bio}>
              {profile.bio.map((text, i) => (
                <p key={i} className={styles.paragraph}>
                  {text}
                </p>
              ))}
            </div>

            <div className={styles.aspiration}>
              <div className={styles.aspirationBorder} />
              <p className={styles.aspirationText}>{profile.aspiration}</p>
            </div>
          </div>

          <aside className={styles.sidebar}>
            {/* Art-Directed Personal Portrait Card */}
            <div className={styles.portraitCard}>
              <div className={`${styles.cornerMarker} ${styles.topLeft}`} />
              <div className={`${styles.cornerMarker} ${styles.topRight}`} />
              <div className={`${styles.cornerMarker} ${styles.bottomLeft}`} />
              <div className={`${styles.cornerMarker} ${styles.bottomRight}`} />

              <div className={styles.portraitImageWrapper}>
                {!imgError ? (
                  <Image
                    src="/images/ravi-portrait.jpg"
                    alt={`${profile.name} — ${profile.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className={styles.portraitImage}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className={styles.portraitPlaceholder}>
                    <div className={styles.placeholderHeader}>
                      <span className={styles.metaBadge}>Identity // Signal</span>
                      <span className={styles.coords}>12.97° N, 77.59° E</span>
                    </div>

                    <div className={styles.placeholderCenter}>
                      <div className={styles.silhouetteRing}>
                        <Camera size={26} strokeWidth={1.5} />
                      </div>
                      <span className={styles.placeholderName}>{profile.name}</span>
                      <span className={styles.placeholderRole}>{profile.title}</span>
                    </div>

                    <div className={styles.placeholderFooter}>
                      <span className={styles.placeholderHint}>
                        Drop photo into: /public/images/ravi-portrait.jpg
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.portraitMeta}>
                <div className={styles.portraitTitleBlock}>
                  <span className={styles.portraitName}>{profile.name}</span>
                  <span className={styles.portraitCaption}>Bengaluru, Karnataka, India</span>
                </div>

                <a
                  href={profile.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.resumeBtnSmall}
                  aria-label="Download Curriculum Vitae (PDF)"
                >
                  <Download size={13} />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Location</span>
                <span className={styles.detailValue}>{profile.location}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Education</span>
                <span className={styles.detailValue}>{profile.education.degree}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Institution</span>
                <span className={styles.detailValue}>{profile.education.institution}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Graduation</span>
                <span className={styles.detailValue}>{profile.education.expectedGraduation}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Focus</span>
                <span className={styles.detailValue}>{profile.title}</span>
              </div>
            </div>

            <div className={styles.techSnapshot}>
              <h4 className={styles.techTitle}>Core Technologies</h4>
              <div className={styles.techGrid}>
                {profile.skills.frontend.slice(0, 5).map((skill) => (
                  <span key={skill} className={styles.techTag}>
                    {skill}
                  </span>
                ))}
                {profile.skills.backend.slice(0, 3).map((skill) => (
                  <span key={skill} className={styles.techTag}>
                    {skill}
                  </span>
                ))}
                {profile.skills.databases.slice(0, 3).map((skill) => (
                  <span key={skill} className={styles.techTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
