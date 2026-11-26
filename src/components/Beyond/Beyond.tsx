'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/portfolio';
import styles from './Beyond.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Beyond() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.leftCol}`,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );

      const items = sectionRef.current?.querySelectorAll(`.${styles.indexItem}`);
      if (items) {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: `.${styles.indexList}`,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.beyond} id="beyond">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Side — Personal Statement */}
          <div className={styles.leftCol}>
            <div className={styles.label}>
              <span className={styles.chapterNum}>04</span>
              <span>Beyond the Interface</span>
            </div>

            <h2 className={styles.heading}>
              Off the <span className={styles.accent}>clock.</span>
            </h2>

            <div className={styles.statement}>
              {profile.beyond.statement.map((line, i) => (
                <p
                  key={i}
                  className={`${styles.statementLine} ${
                    i === 0 ? styles.leadLine : ''
                  } ${i === profile.beyond.statement.length - 1 ? styles.closingLine : ''}`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side — Interactive Index */}
          <div className={styles.indexList} role="list">
            {profile.beyond.entries.map((entry) => {
              const isOpen = activeIndex === entry.index;
              return (
                <div
                  key={entry.index}
                  role="listitem"
                  className={`${styles.indexItem} ${isOpen ? styles.active : ''}`}
                  onMouseEnter={() => setActiveIndex(entry.index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <button
                    type="button"
                    className={styles.indexTrigger}
                    onClick={() =>
                      setActiveIndex(isOpen ? null : entry.index)
                    }
                    aria-expanded={isOpen}
                  >
                    <span className={styles.entryNumber}>{entry.index}</span>

                    <div className={styles.entryBody}>
                      <div className={styles.entryHeader}>
                        <h3 className={styles.entryTitle}>{entry.title}</h3>
                        <span className={styles.entryIndicator} aria-hidden="true" />
                      </div>
                      <p className={styles.entrySummary}>{entry.summary}</p>

                      <div className={styles.detailWrap}>
                        <div className={styles.detailInner}>
                          <p className={styles.entryDetail}>{entry.detail}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
