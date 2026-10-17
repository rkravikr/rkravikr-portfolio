'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { navigation, profile } from '@/data/portfolio';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      timelineRef.current = tl;

      tl.fromTo(
        menuRef.current,
        { clipPath: 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0 0 0% 0)', duration: 0.6, ease: 'power4.inOut' }
      );

      const links = menuRef.current.querySelectorAll(`.${styles.menuLink}`);
      tl.fromTo(
        links,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out' },
        '-=0.3'
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(menuRef.current, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.4,
        ease: 'power3.inOut',
      });
    }

    return () => {
      timelineRef.current?.kill();
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.inner}>
          <a href="#" className={styles.name} aria-label="Back to top">
            {profile.name}
          </a>

          <div className={styles.desktopLinks}>
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeLink}
              aria-label="Download Resume"
            >
              Resume ↗
            </a>
          </div>

          <button
            className={`${styles.toggle} ${isOpen ? styles.active : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        id="mobile-menu"
        className={styles.menu}
        aria-hidden={!isOpen}
      >
        <div className={styles.menuInner}>
          {navigation.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.menuLink}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              tabIndex={isOpen ? 0 : -1}
            >
              <span className={styles.menuIndex}>0{i + 1}</span>
              <span className={styles.menuLabel}>{item.label}</span>
            </a>
          ))}
          <div className={styles.menuFooter}>
            <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1} style={{ color: '#B5A6FF' }}>
              Resume ↗
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1}>
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
