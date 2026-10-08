"use client";

import { useEffect, useRef, useState } from "react";
import { PROFILE } from "@/lib/data";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };
    tryPlay();

    // Pause when hero is less than 35% visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.35) {
          video.pause();
          setIsPlaying(false);
        } else {
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      },
      { threshold: [0.35] }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-[100svh] overflow-hidden flex items-center justify-center bg-paper"
    >
      {/* ── Layer 1: ADVAIT background text (furthest back) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        <span
          className="font-bold leading-none tracking-tighter whitespace-nowrap"
          style={{
            fontSize: "22vw",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(13,13,13,0.14)",
            marginTop: "-12vh",   /* shift upward */
          }}
        >
          ADVAIT
        </span>
      </div>

      {/* ── Layer 2: Character (video asset has a real alpha channel) ── */}
      <div
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <video
          ref={videoRef}
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          style={{
            height: "92svh",
            maxHeight: 960,
            width: "auto",
            objectFit: "contain",
            objectPosition: "bottom center",
            display: "block",
            background: "transparent",
          }}
        >
          <source src="/videos/hero.webm?v=mask-repair-1" type="video/webm" />
          <source src="/videos/hero.mp4?v=mask-repair-1" type="video/mp4" />
        </video>
      </div>

      {/* ── Layer 3: Controls top-right ── */}
      <div
        className="absolute top-24 right-[var(--gutter)] flex items-center gap-3"
        style={{ zIndex: 10 }}
      >
        {/* Sound */}
        <button
          onClick={toggleSound}
          className="w-10 h-10 rounded-full border border-ink/20 bg-white/80 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-white transition-all"
          aria-label={isMuted ? "Enable sound" : "Mute"}
        >
          {isMuted ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z"/>
              <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          )}
        </button>

        {/* Play / Pause */}
        <button
          onClick={togglePlayback}
          className="w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-lg"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3l14 9-14 9V3z"/>
            </svg>
          )}
        </button>
      </div>

      {/* ── Layer 4: Copy (bottom-left) ── */}
      <div
        className="absolute bottom-28 md:bottom-12 left-[var(--gutter)]"
        style={{ zIndex: 10, maxWidth: 480 }}
      >
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink/40 mb-4">
          Advait Jishnani
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.92] mb-5">
          Software &amp;<br />Data Engineer.
        </h1>
        <p className="text-base text-ink-2 leading-relaxed">
          Building scalable production systems, data pipelines,<br className="hidden md:block" /> and AI‑powered products.
        </p>
      </div>

      {/* ── Layer 5: Calls to action (bottom-right) ── */}
      <div
        className="absolute bottom-5 left-[var(--gutter)] right-[var(--gutter)] md:bottom-12 md:left-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-3"
        style={{ zIndex: 10 }}
      >
        <button onClick={() => window.scrollToTarget?.("#work")} className="btn-primary text-sm">
          Explore work
        </button>
        <div className="flex items-center gap-3">
          <button onClick={() => window.scrollToTarget?.("#contact")} className="btn-secondary text-sm">
            Let&apos;s talk
          </button>
          <a href={PROFILE.resumePath} download className="text-sm font-medium underline underline-offset-4 decoration-line hover:decoration-ink transition-colors">
            Résumé ↓
          </a>
        </div>
      </div>

      {/* Eyebrow top-left */}
      <div className="absolute top-28 left-[var(--gutter)]" style={{ zIndex: 10 }}>
        <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-ink/35">
          Software · Data · AI
        </p>
      </div>
    </section>
  );
}
