"use client";

import { useEffect, useRef, useState } from "react";
import { PROFILE } from "@/lib/data";

export function About() {
  const [flipped, setFlipped] = useState(false);
  const velRef = useRef(0);
  const angleRef = useRef(0.035);
  const rafRef = useRef<number>(0);
  const [angle, setAngle] = useState(0.035);

  // A physical, damped swing: the badge settles at rest and only receives
  // new energy from pointer movement or the flip interaction.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      angleRef.current = 0;
      setAngle(0);
      return;
    }
    const K = 0.012;
    const D = 0.94;
    const tick = () => {
      velRef.current = (velRef.current - K * angleRef.current) * D;
      angleRef.current = Math.max(-0.085, Math.min(0.085, angleRef.current + velRef.current));
      setAngle(angleRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    velRef.current = Math.max(-0.012, Math.min(0.012, velRef.current + dx * 0.0015));
  };

  const toggleCard = () => {
    setFlipped(current => !current);
    velRef.current = Math.max(-0.018, Math.min(0.018, velRef.current + (angleRef.current <= 0 ? 0.009 : -0.009)));
  };

  return (
    <section id="about" className="about-section section-padding overflow-visible">
      <div className="container-wide relative">
        {/* Heading */}
        <div className="mb-16">
          <span className="font-mono text-sm text-mute">01 — About</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">
            More than <span className="font-instrument italic font-normal">code.</span>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_300px_minmax(0,1fr)] gap-16 md:gap-8 items-start"
          onMouseMove={handleMouseMove}
        >
          {/* LEFT */}
          <div className="flex flex-col gap-6 pt-8">
            <h3 className="text-2xl font-medium">Hi, I&apos;m Advait.</h3>
            <p className="text-ink-2 leading-relaxed text-sm max-w-md">{PROFILE.resumeSummary}</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a href={PROFILE.resumePath} download className="btn-primary py-2 px-5 text-sm">Résumé</a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn-secondary py-2 px-5 text-sm">GitHub ↗</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn-secondary py-2 px-5 text-sm">LinkedIn ↗</a>
            </div>
          </div>

          {/* CENTRE — ID CARD */}
          <div className="relative flex flex-col items-center" style={{ paddingTop: 174 }}>
            {/* Layer 1: woven lanyard, furthest back */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: 0, width: 34, height: 174, zIndex: 0 }}
            >
              <div
                className="w-full h-[145px] rounded-t-sm overflow-hidden relative"
                style={{
                  background: "repeating-linear-gradient(180deg,#17203b 0 17px,#26345e 17px 19px)",
                  boxShadow: "inset 3px 0 4px rgba(255,255,255,0.08), inset -4px 0 5px rgba(0,0,0,0.28), 0 4px 12px rgba(26,35,64,0.14)",
                }}
              >
                <div className="absolute inset-y-0 left-[4px] border-l border-dashed border-white/15" />
                <div className="absolute inset-y-0 right-[4px] border-r border-dashed border-white/15" />
                <div className="flex items-center justify-center h-full">
                  <span
                    className="font-mono text-[8px] text-white/30 uppercase tracking-[0.35em]"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    ENGINEER
                  </span>
                </div>
              </div>

              {/* Layer 2: metallic clip */}
              <div className="relative -mt-1 mx-auto" style={{ width: 40, zIndex: 30 }}>
                <div
                  className="h-6 rounded-b-lg mx-auto border border-black/15"
                  style={{
                    background: "linear-gradient(90deg,#858991 0%,#e7e8ea 24%,#a6aab1 55%,#f2f2f2 78%,#7b8089 100%)",
                    width: 40,
                    boxShadow: "0 5px 8px rgba(13,13,13,0.22)",
                  }}
                />
                <div
                  className="mx-auto rounded-full border-2 border-gray-300 -mt-3 relative"
                  style={{
                    width: 20,
                    height: 20,
                    background: "radial-gradient(circle at 35% 30%,#fff,#a4a8ae 68%,#70747b)",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.28), 0 3px 5px rgba(0,0,0,0.18)",
                  }}
                />
              </div>
            </div>

            {/* Layer 3: connector tab and laminated card holder */}
            <div
              className="relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 rounded-[24px]"
              style={{
                width: 292,
                perspective: 1400,
                transform: `rotateZ(${angle * 57.3}deg)`,
                transformOrigin: "top center",
                zIndex: 10,
                filter: "drop-shadow(0 24px 24px rgba(26,35,64,0.16))",
              }}
              onClick={toggleCard}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleCard();
                }
              }}
              tabIndex={0}
              aria-label="Flip Engineer ID card"
              aria-pressed={flipped}
            >
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-3 h-7 w-14 rounded-t-xl border border-black/10"
                style={{
                  background: "linear-gradient(180deg,rgba(255,255,255,0.82),rgba(214,218,225,0.74))",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 5px rgba(0,0,0,0.12)",
                  zIndex: 2,
                }}
              >
                <div className="w-6 h-2 rounded-full bg-black/20 mx-auto mt-1.5 shadow-inner" />
              </div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 402,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.72s cubic-bezier(0.2,0.75,0.2,1)",
                  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* ───── FRONT ───── */}
                <div
                  style={{
                    position: "absolute", inset: 0,
                    backfaceVisibility: "hidden",
                    borderRadius: 20,
                    overflow: "hidden",
                    background: "#ffffff",
                    border: "5px solid rgba(225,229,235,0.92)",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.9), 0 16px 38px -12px rgba(26,35,64,0.34)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* header */}
                  <div style={{ background: "#1a2340", padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 700, color: "#fff" }}>AJ</span>
                    </div>
                    <div>
                      <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em" }}>ENGINEER ID</div>
                      <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, fontFamily: "monospace" }}>Portfolio · 2026</div>
                    </div>
                  </div>

                  {/* photo */}
                  <div style={{ display: "flex", justifyContent: "center", padding: "20px 24px 12px" }}>
                    <div style={{ width: 168, height: 200, borderRadius: 12, overflow: "hidden", border: "3px solid #f0f0f0", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
                      <img
                        src="/photos/portrait-bust.webp"
                        alt="Advait Jishnani"
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                      />
                    </div>
                  </div>

                  {/* name */}
                  <div style={{ textAlign: "center", padding: "0 18px 6px" }}>
                    <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", color: "#1a2340" }}>ADVAIT JISHNANI</div>
                    <div style={{ fontSize: 11, color: "#77756f", marginTop: 2 }}>Software &amp; Data Engineer</div>
                  </div>

                  {/* barcode */}
                  <div style={{ padding: "8px 18px 14px", marginTop: "auto" }}>
                    <div style={{ borderTop: "1px solid #eee", paddingTop: 10 }}>
                      <div style={{ display: "flex", gap: 1.5, height: 28, alignItems: "flex-end" }}>
                        {Array.from({ length: 48 }, (_, i) => (
                          <div
                            key={i}
                            style={{
                              flex: 1,
                              background: "#1a2340",
                              height: `${(50 + Math.sin(i * 1.9) * 30 + Math.cos(i * 0.7) * 20).toFixed(2)}%`,
                              opacity: 0.75,
                            }}
                          />
                        ))}
                      </div>
                      <div style={{ textAlign: "center", fontSize: 9, fontFamily: "monospace", color: "#aaa", marginTop: 5 }}>
                        4001 · MS-CS · NYU · 2025-2027
                      </div>
                    </div>
                  </div>

                  {/* Laminate layer */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(118deg,rgba(255,255,255,0.16) 0%,rgba(255,255,255,0) 34%,rgba(255,255,255,0.08) 70%,rgba(255,255,255,0) 100%)",
                      boxShadow: "inset 0 0 20px rgba(255,255,255,0.16)",
                    }}
                  />
                </div>

                {/* ───── BACK ───── */}
                <div
                  style={{
                    position: "absolute", inset: 0,
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderRadius: 20,
                    overflow: "hidden",
                    background: "linear-gradient(155deg,#11182e 0%,#1a2340 58%,#202d53 100%)",
                    border: "5px solid rgba(211,216,226,0.82)",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 16px 38px -12px rgba(26,35,64,0.42)",
                    display: "flex",
                    flexDirection: "column",
                    padding: "22px 20px 18px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                    <div>
                      <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.4)", marginBottom: 5 }}>
                        CAREER DIRECTION
                      </div>
                      <div style={{ fontSize: 21, fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                        Roles I&apos;m targeting
                      </div>
                    </div>
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.22)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontFamily: "monospace",
                        fontSize: 10,
                      }}
                    >
                      AJ
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                    {[
                      { role: "Software Engineer", focus: "Backend & distributed systems" },
                      { role: "Data Engineer", focus: "Pipelines, streaming & MLOps" },
                      { role: "Data Platform Engineer", focus: "Cloud data infrastructure" },
                      { role: "Applied AI Engineer", focus: "Search, RAG & LLM systems" },
                    ].map((item, i) => (
                      <div
                        key={item.role}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "26px 1fr",
                          alignItems: "center",
                          gap: 10,
                          padding: "10px 11px",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 10,
                          background: i === 1 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.045)",
                          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                        }}
                      >
                        <span style={{ color: "rgba(255,255,255,0.34)", fontFamily: "monospace", fontSize: 9 }}>
                          0{i + 1}
                        </span>
                        <span>
                          <span style={{ display: "block", color: "#fff", fontSize: 12, fontWeight: 650, lineHeight: 1.25 }}>
                            {item.role}
                          </span>
                          <span style={{ display: "block", color: "rgba(255,255,255,0.48)", fontSize: 9.5, lineHeight: 1.35, marginTop: 2 }}>
                            {item.focus}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.36)" }}>
                      2027 OPPORTUNITIES
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.64)" }}>{PROFILE.email}</div>
                  </div>

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(122deg,rgba(255,255,255,0.08),transparent 32%,rgba(255,255,255,0.035) 70%,transparent)",
                    }}
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-[10px] font-mono text-mute">
              {flipped ? "Front side ↺" : "Flip for target roles ↻"}
            </p>
          </div>

          {/* RIGHT — QUICK FACTS */}
          <div className="flex flex-col gap-0 pt-8">
            <h3 className="font-mono text-[10px] tracking-widest uppercase text-mute mb-6">Quick Facts</h3>
            {[
              { label: "Based in",  value: PROFILE.location },
              { label: "Education", value: "NYU (MS CS) · BITS Pilani (BE CS)" },
              { label: "Focus",     value: "Distributed data platforms & Applied AI" },
              { label: "Contact",   value: PROFILE.email, href: `mailto:${PROFILE.email}` },
            ].map(({ label, value, href }) => (
              <div key={label} className="border-b border-line py-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-mute mb-1">{label}</div>
                {href
                  ? <a href={href} className="font-semibold text-sm hover:text-mute transition-colors break-all">{value}</a>
                  : <span className="font-semibold text-sm">{value}</span>
                }
              </div>
            ))}
            <p className="mt-8 font-instrument italic text-xl text-ink-2 leading-snug">
              &ldquo;Bridging raw data, robust infrastructure, and intelligent applications.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
