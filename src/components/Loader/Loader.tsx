'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Loader.module.scss';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Simulate real loading milestones
    const milestones = [
      { target: 30, delay: 100 },
      { target: 60, delay: 300 },
      { target: 85, delay: 500 },
      { target: 100, delay: 800 },
    ];

    let current = 0;
    const timers: NodeJS.Timeout[] = [];

    milestones.forEach(({ target, delay }) => {
      const timer = setTimeout(() => {
        const counter = { val: current };
        gsap.to(counter, {
          val: target,
          duration: 0.4,
          ease: 'power2.out',
          onUpdate: () => {
            current = Math.round(counter.val);
            setProgress(current);
          },
        });
      }, delay);
      timers.push(timer);
    });

    // Exit animation
    const exitTimer = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => onComplete(),
      });

      timelineRef.current = tl;

      tl.to(loaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
      });
    }, 1400);
    timers.push(exitTimer);

    // Safety timeout — never block content more than 3s
    const safetyTimer = setTimeout(() => {
      onComplete();
    }, 3000);
    timers.push(safetyTimer);

    return () => {
      timers.forEach(clearTimeout);
      timelineRef.current?.kill();
    };
  }, [onComplete]);

  return (
    <div ref={loaderRef} className={styles.loader} aria-hidden="true">
      <div className={styles.content}>
        <div className={styles.label}>Entering</div>
        <div className={styles.counter}>
          <span className={styles.number}>{String(progress).padStart(3, '0')}</span>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.fill} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
