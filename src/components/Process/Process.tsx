'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/portfolio';
import styles from './Process.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.heading}`,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      const steps = sectionRef.current?.querySelectorAll(`.${styles.step}`);
      steps?.forEach((step, i) => {
        gsap.fromTo(
          step,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Animate connecting line
      gsap.fromTo(
        `.${styles.connector}`,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: `.${styles.steps}`,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.process} id="process">
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.chapterNum}>03</span>
          <span>The Process</span>
        </div>

        <h2 className={styles.heading}>
          How I think <span className={styles.accent}>&amp; build.</span>
        </h2>

        <div className={styles.layout}>
          <div className={styles.steps}>
            <div className={styles.connectorWrap}>
              <div className={styles.connector} />
            </div>
            {profile.process.map((item) => (
              <div key={item.step} className={styles.step}>
                <div className={styles.stepDot} />
                <div className={styles.stepContent}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNum}>{item.step}</span>
                    <h3 className={styles.stepTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.stepDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.skills}>
            <h4 className={styles.skillsTitle}>Technical Profile</h4>

            {Object.entries(profile.skills).map(([category, items]) => (
              <div key={category} className={styles.skillGroup}>
                <span className={styles.skillCategory}>{category}</span>
                <div className={styles.skillList}>
                  {items.map((skill) => (
                    <span key={skill} className={styles.skillItem}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <p className={styles.disclaimer}>
              This is a practical technology profile, not a claim of expert-level proficiency in every listed tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
