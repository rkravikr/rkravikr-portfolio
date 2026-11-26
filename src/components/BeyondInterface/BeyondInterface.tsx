'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import {
  beyondInterfaceContent,
  interestEntries,
  InterestEntry,
} from './InterestData';
import InterestList from './InterestList';
import InterestPreview from './InterestPreview';
import styles from './BeyondInterface.module.scss';

export default function BeyondInterface() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  const [activeId, setActiveId] = useState<InterestEntry['id'] | null>(
    interestEntries[0].id
  );

  const activeEntry =
    interestEntries.find((item) => item.id === activeId) ?? interestEntries[0];

  const handleHover = (id: InterestEntry['id']) => {
    setActiveId(id);
  };

  const handleSelect = (id: InterestEntry['id']) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setActiveId((prev) => (prev === id ? null : id));
    } else {
      setActiveId(id);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="beyond"
      aria-labelledby="beyond-heading"
    >
      {/* Ambient background atmosphere (700ms transition) */}
      <motion.div
        className={styles.ambientGlow}
        aria-hidden="true"
        animate={{ background: activeEntry.ambientGradient }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: 'easeOut' }}
      />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT COLUMN — Editorial Framing */}
          <motion.div
            className={styles.leftColumn}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.eyebrow}>
              <span className={styles.chapterNum}>
                {beyondInterfaceContent.chapterNumber}
              </span>
              <span className={styles.chapterLabel}>
                {beyondInterfaceContent.chapterLabel}
              </span>
            </div>

            <h2 id="beyond-heading" className={styles.heading}>
              {beyondInterfaceContent.headingLead}
              <br />
              <span className={styles.accent}>
                {beyondInterfaceContent.headingAccent}
              </span>
            </h2>

            <div className={styles.copyBlock}>
              <p className={styles.openingStatement}>
                {beyondInterfaceContent.openingStatement}
              </p>
              <p className={styles.supportingCopy}>
                {beyondInterfaceContent.supportingCopy}
              </p>
            </div>

            <p className={styles.editorialCaption}>
              {beyondInterfaceContent.editorialCaption}
            </p>
          </motion.div>

          {/* RIGHT COLUMN — Interactive Entries + Dedicated Visual Preview */}
          <motion.div
            className={styles.rightColumn}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <InterestList
              entries={interestEntries}
              activeId={activeId}
              isInView={isInView}
              onHover={handleHover}
              onSelect={handleSelect}
            />

            <div className={styles.desktopPreview}>
              <InterestPreview entry={activeEntry} isInView={isInView} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
