'use client';

import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { InterestEntry } from './InterestData';
import InterestPreview from './InterestPreview';
import styles from './BeyondInterface.module.scss';

interface InterestItemProps {
  entry: InterestEntry;
  isActive: boolean;
  isInView: boolean;
  onHover: (id: InterestEntry['id']) => void;
  onSelect: (id: InterestEntry['id']) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => void;
  index: number;
  buttonRef: (el: HTMLButtonElement | null) => void;
}

export default function InterestItem({
  entry,
  isActive,
  isInView,
  onHover,
  onSelect,
  onKeyDown,
  index,
  buttonRef,
}: InterestItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      role="listitem"
      className={`${styles.interestItem} ${isActive ? styles.activeItem : ''}`}
      onMouseEnter={() => onHover(entry.id)}
    >
      <button
        ref={buttonRef}
        type="button"
        className={styles.itemButton}
        onClick={() => onSelect(entry.id)}
        onFocus={() => onHover(entry.id)}
        onKeyDown={(e) => onKeyDown(e, index)}
        aria-expanded={isActive}
        aria-pressed={isActive}
      >
        <div className={styles.itemHeader}>
          <span className={styles.itemNumber}>{entry.number}</span>
          <h3 className={styles.itemTitle}>{entry.title}</h3>
          <span className={styles.itemLine} aria-hidden="true" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="details"
            className={styles.itemDetails}
            initial={
              prefersReducedMotion
                ? false
                : { height: 0, opacity: 0 }
            }
            animate={{ height: 'auto', opacity: 1 }}
            exit={
              prefersReducedMotion
                ? undefined
                : { height: 0, opacity: 0 }
            }
            transition={{
              duration: prefersReducedMotion ? 0 : 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className={styles.itemDetailsInner}>
              <p className={styles.itemDescription}>{entry.description}</p>
              <span className={styles.itemMeta}>{entry.metadata}</span>

              {/* Mobile inline visual preview inside expanded item */}
              <div className={styles.mobilePreview}>
                <InterestPreview entry={entry} isInView={isInView} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
