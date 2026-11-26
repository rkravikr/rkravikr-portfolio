'use client';

import { useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'motion/react';
import { InterestEntry } from './InterestData';
import styles from './BeyondInterface.module.scss';

interface InterestPreviewProps {
  entry: InterestEntry;
  isInView: boolean;
}

function AnimeVisual({ shouldAnimate }: { shouldAnimate: boolean }) {
  return (
    <div className={styles.visualCanvas}>
      <motion.div
        className={styles.animeScene}
        animate={
          shouldAnimate
            ? { scale: [1, 1.04, 1] }
            : { scale: 1 }
        }
        transition={
          shouldAnimate
            ? { duration: 14, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.3 }
        }
      >
        <div className={styles.animeSkyGlow} />
        <svg
          viewBox="0 0 800 450"
          preserveAspectRatio="xMidYMid slice"
          className={styles.visualSvg}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="animeSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#08090B" />
              <stop offset="52%" stopColor="#171626" />
              <stop offset="82%" stopColor="#2A2444" />
              <stop offset="100%" stopColor="#12131A" />
            </linearGradient>
            <radialGradient id="animeHorizon" cx="62%" cy="64%" r="38%">
              <stop offset="0%" stopColor="#B5A6FF" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#B5A6FF" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#08090B" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="450" fill="url(#animeSky)" />
          <rect width="800" height="450" fill="url(#animeHorizon)" />
          {/* Distant stars */}
          <circle cx="140" cy="88" r="1" fill="#F1F0EB" opacity="0.45" />
          <circle cx="265" cy="54" r="1.2" fill="#B5A6FF" opacity="0.5" />
          <circle cx="490" cy="72" r="1" fill="#F1F0EB" opacity="0.35" />
          <circle cx="670" cy="110" r="1.3" fill="#B5A6FF" opacity="0.55" />
          <circle cx="380" cy="120" r="0.9" fill="#F1F0EB" opacity="0.3" />
          {/* Crescent / twilight moon */}
          <circle cx="505" cy="155" r="24" fill="#F1F0EB" opacity="0.14" />
          <circle cx="505" cy="155" r="16" fill="#F1F0EB" opacity="0.22" />
          {/* Far mountain ridge */}
          <path
            d="M0 320 L115 268 L220 296 L355 238 L475 284 L610 245 L725 276 L800 256 L800 450 L0 450 Z"
            fill="#11121A"
            opacity="0.88"
          />
          {/* Mid ridge */}
          <path
            d="M0 360 L150 325 L290 348 L430 308 L575 342 L700 315 L800 335 L800 450 L0 450 Z"
            fill="#0C0D12"
          />
          {/* Foreground overlook + lone silhouette */}
          <path
            d="M0 405 Q220 378 460 398 T800 385 L800 450 L0 450 Z"
            fill="#08090B"
          />
          {/* Distant quiet silhouette */}
          <path
            d="M235 384 L237 368 C237 365 241 365 241 368 L243 384 Z"
            fill="#08090B"
          />
          <circle cx="239" cy="363" r="3" fill="#08090B" />
        </svg>
      </motion.div>
      <div className={styles.filmGrain} aria-hidden="true" />
    </div>
  );
}

function GamingVisual({ shouldAnimate }: { shouldAnimate: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const midX = useSpring(rawX, { stiffness: 90, damping: 24 });
  const midY = useSpring(rawY, { stiffness: 90, damping: 24 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!shouldAnimate || e.pointerType !== 'mouse' || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(nx * 18);
    rawY.set(ny * 12);
  };

  const handlePointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className={styles.visualCanvas}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.gamingBackdrop} />
      <motion.div
        className={styles.gamingParallaxLayer}
        style={shouldAnimate ? { x: midX, y: midY } : undefined}
      >
        <svg
          viewBox="0 0 800 450"
          preserveAspectRatio="xMidYMid slice"
          className={styles.visualSvg}
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="gamingMist" cx="50%" cy="55%" r="55%">
              <stop offset="0%" stopColor="#FF3B46" stopOpacity="0.16" />
              <stop offset="48%" stopColor="#B5A6FF" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#08090B" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="fogBand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#15161B" stopOpacity="0" />
              <stop offset="50%" stopColor="#B5A6FF" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#08090B" stopOpacity="0.92" />
            </linearGradient>
          </defs>
          <rect width="800" height="450" fill="url(#gamingMist)" />
          {/* Distant dark fantasy monoliths */}
          <path
            d="M170 330 L185 170 L212 155 L228 330 Z"
            fill="#12131A"
            opacity="0.85"
          />
          <path
            d="M540 340 L558 130 L595 112 L615 340 Z"
            fill="#101117"
            opacity="0.9"
          />
          <path
            d="M360 350 L376 215 L402 204 L416 350 Z"
            fill="#15161E"
            opacity="0.7"
          />
          {/* Atmospheric fog layers */}
          <rect x="0" y="230" width="800" height="220" fill="url(#fogBand)" />
          <path
            d="M0 375 L140 330 L285 362 L440 318 L610 358 L800 322 L800 450 L0 450 Z"
            fill="#08090B"
          />
        </svg>
      </motion.div>
      <motion.div
        className={styles.gamingFogDrift}
        animate={
          shouldAnimate
            ? { opacity: [0.35, 0.6, 0.35], x: [-10, 10, -10] }
            : { opacity: 0.4 }
        }
        transition={
          shouldAnimate
            ? { duration: 11, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.3 }
        }
        aria-hidden="true"
      />
      <div className={styles.filmGrain} aria-hidden="true" />
    </div>
  );
}

function MusicVisual({ shouldAnimate }: { shouldAnimate: boolean }) {
  const bars = [
    18, 28, 42, 24, 56, 68, 38, 82, 48, 92, 64, 44, 76, 52, 86, 40, 62, 34, 50,
    26, 44, 22, 32, 16,
  ];

  return (
    <div className={styles.visualCanvas}>
      <div className={styles.musicBackdrop} />
      <div className={styles.musicStage} aria-hidden="true">
        {/* Thin horizontal frequency lines */}
        <div className={styles.frequencyGrid}>
          <span />
          <span />
          <span />
        </div>

        {/* Minimal glowing waveform */}
        <div className={styles.waveformBars}>
          {bars.map((height, idx) => (
            <motion.span
              key={idx}
              className={styles.waveBar}
              style={{ height: `${height}%` }}
              animate={
                shouldAnimate
                  ? {
                      scaleY: [0.45, 1, 0.55, 0.9, 0.45],
                      opacity: [0.35, 0.9, 0.45, 0.8, 0.35],
                    }
                  : { scaleY: 0.75, opacity: 0.65 }
              }
              transition={
                shouldAnimate
                  ? {
                      duration: 3.6 + (idx % 5) * 0.45,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: idx * 0.08,
                    }
                  : { duration: 0.3 }
              }
            />
          ))}
        </div>

        <svg
          viewBox="0 0 600 120"
          className={styles.waveCurve}
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 60 Q75 18 150 60 T300 60 T450 60 T600 60"
            fill="none"
            stroke="rgba(181, 166, 255, 0.45)"
            strokeWidth="1.2"
            animate={
              shouldAnimate
                ? {
                    d: [
                      'M0 60 Q75 18 150 60 T300 60 T450 60 T600 60',
                      'M0 60 Q75 98 150 60 T300 60 T450 60 T600 60',
                      'M0 60 Q75 18 150 60 T300 60 T450 60 T600 60',
                    ],
                  }
                : undefined
            }
            transition={
              shouldAnimate
                ? { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }
                : undefined
            }
          />
        </svg>
      </div>
    </div>
  );
}

function CuriosityVisual({ shouldAnimate }: { shouldAnimate: boolean }) {
  const nodes = [
    { cx: 180, cy: 140, r: 3.5 },
    { cx: 310, cy: 105, r: 2.5 },
    { cx: 430, cy: 165, r: 4 },
    { cx: 560, cy: 115, r: 2.5 },
    { cx: 630, cy: 245, r: 3.5 },
    { cx: 470, cy: 310, r: 3 },
    { cx: 295, cy: 285, r: 4 },
    { cx: 165, cy: 265, r: 2.5 },
  ];

  return (
    <div className={styles.visualCanvas}>
      <div className={styles.curiosityBackdrop} />
      <svg
        viewBox="0 0 800 450"
        className={styles.visualSvg}
        aria-hidden="true"
      >
        {/* Geometric orbital rings */}
        <motion.circle
          cx="400"
          cy="225"
          r="138"
          fill="none"
          stroke="rgba(181, 166, 255, 0.16)"
          strokeWidth="1"
          strokeDasharray="6 8"
          animate={shouldAnimate ? { rotate: 360 } : undefined}
          style={{ transformOrigin: '400px 225px' }}
          transition={
            shouldAnimate
              ? { duration: 48, repeat: Infinity, ease: 'linear' }
              : undefined
          }
        />
        <motion.circle
          cx="400"
          cy="225"
          r="86"
          fill="none"
          stroke="rgba(241, 240, 235, 0.14)"
          strokeWidth="1"
          animate={shouldAnimate ? { rotate: -360 } : undefined}
          style={{ transformOrigin: '400px 225px' }}
          transition={
            shouldAnimate
              ? { duration: 36, repeat: Infinity, ease: 'linear' }
              : undefined
          }
        />

        {/* Connected constellation lines */}
        <g stroke="rgba(181, 166, 255, 0.24)" strokeWidth="1">
          <line x1="180" y1="140" x2="310" y2="105" />
          <line x1="310" y1="105" x2="430" y2="165" />
          <line x1="430" y1="165" x2="560" y2="115" />
          <line x1="430" y1="165" x2="630" y2="245" />
          <line x1="430" y1="165" x2="470" y2="310" />
          <line x1="470" y1="310" x2="295" y2="285" />
          <line x1="295" y1="285" x2="180" y2="140" />
          <line x1="295" y1="285" x2="165" y2="265" />
          <line x1="295" y1="285" x2="430" y2="165" />
        </g>

        {/* Drifting generative particles */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={i % 2 === 0 ? '#B5A6FF' : '#F1F0EB'}
            animate={
              shouldAnimate
                ? {
                    cy: [node.cy - 5, node.cy + 5, node.cy - 5],
                    opacity: [0.45, 0.95, 0.45],
                  }
                : { opacity: 0.75 }
            }
            transition={
              shouldAnimate
                ? {
                    duration: 4.5 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
                : { duration: 0.3 }
            }
          />
        ))}
      </svg>
    </div>
  );
}

export default function InterestPreview({
  entry,
  isInView,
}: InterestPreviewProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = Boolean(isInView && !prefersReducedMotion);

  const renderVisual = () => {
    switch (entry.visualType) {
      case 'anime':
        return <AnimeVisual shouldAnimate={shouldAnimate} />;
      case 'gaming':
        return <GamingVisual shouldAnimate={shouldAnimate} />;
      case 'music':
        return <MusicVisual shouldAnimate={shouldAnimate} />;
      case 'curiosity':
        return <CuriosityVisual shouldAnimate={shouldAnimate} />;
    }
  };

  return (
    <div className={styles.previewFrame} aria-label={`${entry.title} visual preview`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={entry.id}
          className={styles.previewMotion}
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {renderVisual()}
        </motion.div>
      </AnimatePresence>

      <div className={styles.previewCaption}>
        <span className={styles.previewIndex}>{entry.number}</span>
        <span className={styles.previewMeta}>{entry.metadata}</span>
      </div>
    </div>
  );
}
