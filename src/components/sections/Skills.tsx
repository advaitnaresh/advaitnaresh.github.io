"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SKILL_GROUPS } from "@/lib/data";

// Restrained tonal shifts distinguish families without breaking the site's neutral palette.
const CATEGORY_STYLE: Record<string, { bg: string; text: string }> = {
  "Languages":              { bg: "#1a2340", text: "#f4f2ee" },
  "Software & Backend":     { bg: "#242b3d", text: "#f4f2ee" },
  "Data Engineering":       { bg: "#333338", text: "#f4f2ee" },
  "Databases & Storage":    { bg: "#2c2a33", text: "#f4f2ee" },
  "Cloud & Infrastructure": { bg: "#293431", text: "#f4f2ee" },
  "AI & Analytics":         { bg: "#312c36", text: "#f4f2ee" },
  "Robotics & Media":       { bg: "#383633", text: "#f4f2ee" },
};

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null | undefined>(undefined);
  const [hoveredSkill, setHoveredSkill] = useState<{
    id: string; name: string; category: string; symbol: string; icon?: string;
  } | null>(null);
  const [autoIndex, setAutoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [failedIcons, setFailedIcons] = useState<Set<string>>(() => new Set());

  const allSkills = useMemo(
    () => SKILL_GROUPS.flatMap(g => g.skills.map(s => ({ ...s, category: g.category }))),
    []
  );
  const focusedCategory = hoveredCategory !== undefined ? hoveredCategory : activeCategory;
  const cyclingSkills = useMemo(
    () => focusedCategory ? allSkills.filter(skill => skill.category === focusedCategory) : allSkills,
    [focusedCategory, allSkills]
  );
  const autoSkill = cyclingSkills[autoIndex % cyclingSkills.length];
  const focusedSkill = hoveredSkill ?? autoSkill;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAutoIndex(0);
  }, [focusedCategory]);

  useEffect(() => {
    if (!isVisible || cyclingSkills.length < 2) return;
    const interval = window.setInterval(
      () => setAutoIndex(index => (index + 1) % cyclingSkills.length),
      1400
    );
    return () => window.clearInterval(interval);
  }, [cyclingSkills.length, isVisible]);

  const markIconFailed = (id: string) => {
    setFailedIcons(current => {
      if (current.has(id)) return current;
      const next = new Set(current);
      next.add(id);
      return next;
    });
  };

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-[#f8f7f4] overflow-hidden">
      <div className="container-wide">
        <div className="mb-12">
          <span className="font-mono text-sm text-mute">02 — Engineering stack</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">
            The engineering <span className="font-instrument italic font-normal">stack.</span>
          </h2>
          <p className="text-ink-2 mt-4 max-w-xl">
            {allSkills.length} elements in {SKILL_GROUPS.length} families. Watch the stack cycle automatically, or pick a family to focus it.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            onMouseEnter={() => setHoveredCategory(null)}
            onMouseLeave={() => setHoveredCategory(undefined)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all ${
              focusedCategory === null ? "bg-ink text-paper border-ink" : "text-mute border-line hover:border-ink hover:text-ink"
            }`}
          >
            ALL
          </button>
          {SKILL_GROUPS.map(g => {
            return (
              <button
                key={g.category}
                onClick={() => setActiveCategory(g.category)}
                onMouseEnter={() => setHoveredCategory(g.category)}
                onMouseLeave={() => setHoveredCategory(undefined)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all ${
                  focusedCategory === g.category
                    ? "bg-[#1a2340] text-paper border-[#1a2340]"
                    : "bg-white/60 text-mute border-line hover:border-ink hover:text-ink"
                }`}
              >
                {g.category}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Tile Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {allSkills.map((skill, idx) => {
                const style = CATEGORY_STYLE[skill.category] ?? { bg: "#1a2340", text: "#f4f2ee" };
                const isFaded = focusedCategory && focusedCategory !== skill.category;
                const isHighlighted = focusedSkill?.id === skill.id;
                const tileText = isHighlighted ? "#1a2340" : style.text;

                return (
                  <div
                    key={skill.id}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`relative aspect-square rounded-xl flex flex-col items-start justify-between p-2 cursor-default transition-all duration-300 group select-none ${
                      isFaded ? "opacity-25" : "opacity-100"
                    } ${isHighlighted ? "scale-110 z-10 shadow-xl" : ""}`}
                    style={{
                      background: isHighlighted ? "#f4f2ee" : style.bg,
                      boxShadow: isHighlighted
                        ? "0 16px 40px -12px rgba(13,13,13,0.4)"
                        : "0 2px 8px rgba(13,13,13,0.08)",
                      transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    {/* index */}
                    <span className="font-mono text-[9px] leading-none opacity-40" style={{ color: tileText }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* symbol — big */}
                    <div className="self-stretch flex flex-col items-center justify-center flex-1">
                      {isHighlighted && skill.icon && !failedIcons.has(skill.id) ? (
                        <img
                          src={`https://cdn.simpleicons.org/${skill.icon}/1a2340`}
                          alt={skill.name}
                          className="w-7 h-7 object-contain"
                          onError={() => markIconFailed(skill.id)}
                        />
                      ) : (
                        <span
                          className="font-bold text-xl md:text-2xl leading-none tracking-tight"
                          style={{ color: tileText }}
                        >
                          {skill.symbol}
                        </span>
                      )}
                    </div>

                    {/* name */}
                    <span
                      className="font-mono text-[8px] md:text-[9px] uppercase tracking-wide truncate w-full leading-none"
                      style={{ color: tileText, opacity: 0.7 }}
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inspector Panel */}
          <div className="w-full md:w-72 md:sticky md:top-32">
            <div
              className="rounded-2xl border border-line p-6 min-h-[300px] flex flex-col transition-all duration-500"
              style={{ background: "#1a2340" }}
            >
              {(() => {
                return (
                  <>
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: "rgba(255,255,255,0.1)" }}>
                      {focusedSkill.icon && !failedIcons.has(focusedSkill.id) ? (
                        <img
                          src={`https://cdn.simpleicons.org/${focusedSkill.icon}/ffffff`}
                          alt={focusedSkill.name}
                          className="w-12 h-12 object-contain"
                          onError={() => markIconFailed(focusedSkill.id)}
                        />
                      ) : (
                        <span className="text-4xl font-bold text-paper">{focusedSkill.symbol}</span>
                      )}
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight mb-1 text-white">{focusedSkill.name}</h4>
                    <p className="font-mono text-xs uppercase tracking-widest mb-auto text-paper/55">
                      {focusedSkill.category}
                    </p>
                    <p className="text-sm mt-6 text-white/60 border-t border-white/10 pt-4">
                      Used in production infrastructure &amp; technical projects.
                    </p>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
