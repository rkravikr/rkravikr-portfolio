"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import styles from "./Contact.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.heading}`,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        `.${styles.description}`,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.description}`,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        `.${styles.linkCard}`,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.links}`,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.chapterNum}>04</span>
          <span>The Next Signal</span>
        </div>

        <h2 className={styles.heading}>
          Let&apos;s build <br />
          <span className={styles.accent}>something together.</span>
        </h2>

        <p className={styles.description}>
          I am interested in useful products, meaningful collaboration,
          real-world engineering experience, and opportunities to join a strong
          team. If you&apos;re working on something interesting, I&apos;d love
          to hear about it.
        </p>

        <div className={styles.links}>
          <a
            href={profile.links.email}
            className={styles.linkCard}
            aria-label="Send email"
          >
            <div className={styles.linkIcon}>
              <Mail size={24} />
            </div>
            <div className={styles.linkInfo}>
              <span className={styles.linkLabel}>Email</span>
              <span className={styles.linkValue}>ravi292002@gmail.com</span>
            </div>
            <ArrowUpRight size={16} className={styles.linkArrow} />
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
            aria-label="Visit GitHub profile"
          >
            <div className={styles.linkIcon}>
              <Github size={24} />
            </div>
            <div className={styles.linkInfo}>
              <span className={styles.linkLabel}>GitHub</span>
              <span className={styles.linkValue}>rkravikr</span>
            </div>
            <ArrowUpRight size={16} className={styles.linkArrow} />
          </a>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
            aria-label="Visit LinkedIn profile"
          >
            <div className={styles.linkIcon}>
              <Linkedin size={24} />
            </div>
            <div className={styles.linkInfo}>
              <span className={styles.linkLabel}>LinkedIn</span>
              <span className={styles.linkValue}>rkravikr</span>
            </div>
            <ArrowUpRight size={16} className={styles.linkArrow} />
          </a>
        </div>
      </div>

      {/* Atmospheric bottom gradient */}
      <div className={styles.bottomGlow} aria-hidden="true" />
    </section>
  );
}
