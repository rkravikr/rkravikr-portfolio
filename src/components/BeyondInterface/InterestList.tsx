'use client';

import { useRef } from 'react';
import { InterestEntry } from './InterestData';
import InterestItem from './InterestItem';
import styles from './BeyondInterface.module.scss';

interface InterestListProps {
  entries: InterestEntry[];
  activeId: InterestEntry['id'] | null;
  isInView: boolean;
  onHover: (id: InterestEntry['id']) => void;
  onSelect: (id: InterestEntry['id']) => void;
}

export default function InterestList({
  entries,
  activeId,
  isInView,
  onHover,
  onSelect,
}: InterestListProps) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (index + 1) % entries.length;
      buttonRefs.current[next]?.focus();
      onHover(entries[next].id);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (index - 1 + entries.length) % entries.length;
      buttonRefs.current[prev]?.focus();
      onHover(entries[prev].id);
    }
  };

  return (
    <div className={styles.interestList} role="list">
      {entries.map((entry, index) => (
        <InterestItem
          key={entry.id}
          entry={entry}
          index={index}
          isActive={activeId === entry.id}
          isInView={isInView}
          onHover={onHover}
          onSelect={onSelect}
          onKeyDown={handleKeyDown}
          buttonRef={(el) => {
            buttonRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
}
