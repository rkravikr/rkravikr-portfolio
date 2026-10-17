'use client';

import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { profile } from '@/data/portfolio';
import styles from './Hero.module.scss';

const Scene = dynamic(() => import('@/components/Canvas/Scene'), {
  ssr: false,
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 1.6, // After loader
        defaults: { ease: 'power3.out' },
      });

      // Headline reveal — word by word
      const words = headlineRef.current?.querySelectorAll(`.${styles.word}`);
      if (words) {
        tl.fromTo(
          words,
          { y: 100, opacity: 0, rotateX: -30 },
          { y: 0, opacity: 1, rotateX: 0, stagger: 0.1, duration: 1 }
        );
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      );

      // CTA
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
      );

      // Decorative element
      tl.fromTo(
        decorRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
        '-=1'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = profile.headline.split(' ');

  return (
    <section ref={sectionRef} className={styles.hero} id="hero">
      {/* Atmospheric 3D Canvas + gradient */}
      <div className={styles.atmosphere}>
        <Scene />
        <div className={styles.gradientOrb} ref={decorRef} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.chapterNum}>00</span>
            <span className={styles.chapterLabel}>The Signal</span>
          </div>

          <h1 ref={headlineRef} className={styles.headline}>
            {headlineWords.map((word, i) => (
              <span key={i} className={styles.wordWrap}>
                <span className={styles.word}>{word}</span>
              </span>
            ))}
          </h1>

          <p ref={subtitleRef} className={styles.subtitle}>
            {profile.subheadline}
          </p>

          <div ref={ctaRef} className={styles.cta}>
            <a
              href="#work"
              className={styles.ctaButton}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3L8 13M8 13L13 8M8 13L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeButton}
              aria-label="Download Ravi Kumar Verma's Resume"
            >
              <span>Download CV</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.scrollIndicator} aria-hidden="true">
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </div>
    </section>
  );
}
