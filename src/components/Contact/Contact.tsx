"use client";

import { useRef, useEffect, useState, FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  MapPin,
  Copy,
  Check,
  Send,
  AlertCircle,
} from "lucide-react";
import styles from "./Contact.module.scss";

gsap.registerPlugin(ScrollTrigger);

type SubmitStatus = "idle" | "submitting" | "success" | "error" | "unconfigured";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const emailAddress = profile.links.email.replace("mailto:", "");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

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

      gsap.fromTo(
        `.${styles.formCard}`,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.formCard}`,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = profile.links.email;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (botcheck) return;

    if (!accessKey) {
      setStatus("unconfigured");
      setFeedback(
        "Direct form delivery requires NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. Please email directly or configure the key.",
      );
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: `Portfolio Signal from ${name.trim()}`,
          from_name: "Ravi Kumar Verma Portfolio",
          botcheck: false,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFeedback("Signal received. I'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setFeedback(
          result.message || "Could not send message. Please try emailing directly.",
        );
      }
    } catch {
      setStatus("error");
      setFeedback("Network error while sending. Please try emailing directly.");
    }
  };

  return (
    <section ref={sectionRef} className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.chapterNum}>05</span>
          <span>The Next Signal</span>
        </div>

        <h2 className={styles.heading}>
          Let&apos;s build <br />
          <span className={styles.accent}>something together.</span>
        </h2>

        <div className={styles.splitGrid}>
          {/* Left Column — Original Editorial Copy + 3 Link Cards */}
          <div className={styles.leftCol}>
            <div className={styles.metaRow}>
              <span className={styles.statusBadge}>
                <span className={styles.statusDot} aria-hidden="true" />
                <span>Open to Engineering Roles &amp; Collaborations</span>
              </span>
              <span className={styles.locationRow}>
                <MapPin size={14} />
                <span>{profile.location}</span>
              </span>
            </div>

            <p className={styles.description}>
              I am interested in useful products, meaningful collaboration,
              real-world engineering experience, and opportunities to join a
              strong team. If you&apos;re working on something interesting,
              I&apos;d love to hear about it.
            </p>

            <div className={styles.links}>
              <a
                href={profile.links.email}
                className={`${styles.linkCard} ${styles.emailCard}`}
                aria-label="Send email"
              >
                <div className={styles.linkIcon}>
                  <Mail size={18} />
                </div>
                <div className={styles.linkInfo}>
                  <span className={styles.linkLabel}>Email</span>
                  <span className={styles.linkValue}>{emailAddress}</span>
                </div>
                <div className={styles.emailActions}>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={styles.copyBtn}
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                  <ArrowUpRight size={15} className={styles.linkArrow} />
                </div>
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
                aria-label="Visit GitHub profile"
              >
                <div className={styles.linkIcon}>
                  <Github size={18} />
                </div>
                <div className={styles.linkInfo}>
                  <span className={styles.linkLabel}>GitHub</span>
                  <span className={styles.linkValue}>rkravikr</span>
                </div>
                <ArrowUpRight size={15} className={styles.linkArrow} />
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
                aria-label="Visit LinkedIn profile"
              >
                <div className={styles.linkIcon}>
                  <Linkedin size={18} />
                </div>
                <div className={styles.linkInfo}>
                  <span className={styles.linkLabel}>LinkedIn</span>
                  <span className={styles.linkValue}>rkravikr</span>
                </div>
                <ArrowUpRight size={15} className={styles.linkArrow} />
              </a>
            </div>
          </div>

          {/* Right Column — Web3Forms Message Card */}
          <div className={styles.formCard}>
            <div className={`${styles.corner} ${styles.topLeft}`} />
            <div className={`${styles.corner} ${styles.topRight}`} />
            <div className={`${styles.corner} ${styles.bottomLeft}`} />
            <div className={`${styles.corner} ${styles.bottomRight}`} />

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <input
                type="checkbox"
                name="botcheck"
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
                className={styles.honeypot}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.fieldLabel}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className={styles.input}
                  disabled={status === "submitting"}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.fieldLabel}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={styles.input}
                  disabled={status === "submitting"}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.fieldLabel}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's on your mind?"
                  className={styles.textarea}
                  disabled={status === "submitting"}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={
                  status === "submitting" ||
                  !name.trim() ||
                  !email.trim() ||
                  !message.trim()
                }
              >
                <span>
                  {status === "submitting"
                    ? "Transmitting..."
                    : "Transmit Message"}
                </span>
                <Send size={14} />
              </button>

              {feedback && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`${styles.statusMessage} ${
                    status === "success"
                      ? styles.statusSuccess
                      : styles.statusError
                  }`}
                >
                  {status === "success" ? (
                    <Check size={15} />
                  ) : (
                    <AlertCircle size={15} />
                  )}
                  <span>{feedback}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Atmospheric bottom gradient */}
      <div className={styles.bottomGlow} aria-hidden="true" />
    </section>
  );
}
