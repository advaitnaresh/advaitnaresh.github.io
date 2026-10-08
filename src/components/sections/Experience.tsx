"use client";

import { useEffect, useRef, useState } from "react";
import { EXPERIENCE } from "@/lib/data";

type JourneyStop = {
  year: string;
  place: string;
  title: string;
  org: string;
  detail: string;
  highlights: string[];
  side: "left" | "right";
  threshold: number;
  accent?: "india" | "flight" | "usa";
  logo?: string;
  logoAlt?: string;
  brandColor?: string;
  landmark?: "bits" | "visa" | "nyu" | "roc";
};

const STOPS: JourneyStop[] = [
  {
    year: "2020 — 2024",
    place: "Goa, India",
    title: "B.E. Computer Science",
    org: "BITS Pilani, Goa",
    detail: "Minor in Finance · GPA 4.0/4.0",
    highlights: [],
    side: "left",
    threshold: 0.03,
    accent: "india",
    logo: "/photos/bits-pilani-logo.png",
    logoAlt: "BITS Pilani",
    brandColor: "#1f2a78",
    landmark: "bits",
  },
  {
    year: "MAY — JUN 2023",
    place: "Bengaluru, India",
    title: "Data Engineer Intern",
    org: "Visa Inc.",
    detail: "The first professional stop.",
    highlights: EXPERIENCE[3].bullets.slice(0, 2),
    side: "right",
    threshold: 0.15,
    logo: "/photos/visa-logo.svg",
    logoAlt: "Visa",
    brandColor: "#1434cb",
    landmark: "visa",
  },
  {
    year: "JAN 2024 — AUG 2025",
    place: "Bengaluru, India",
    title: "Data Engineer",
    org: "Visa Inc.",
    detail: "From intern to production engineer.",
    highlights: EXPERIENCE[2].bullets.slice(0, 2),
    side: "left",
    threshold: 0.29,
    logo: "/photos/visa-logo.svg",
    logoAlt: "Visa",
    brandColor: "#1434cb",
    landmark: "visa",
  },
  {
    year: "AUG 2025",
    place: "Bengaluru → New York",
    title: "8,300 miles later",
    org: "A new chapter in the US",
    detail: "Packed the experience, crossed the Atlantic, and started again in New York.",
    highlights: [],
    side: "right",
    threshold: 0.44,
    accent: "flight",
  },
  {
    year: "2025 — 2027",
    place: "Brooklyn, New York",
    title: "M.S. Computer Science",
    org: "New York University",
    detail: "Data Engineering / Data Science · GPA 4.0/4.0",
    highlights: [],
    side: "left",
    threshold: 0.58,
    accent: "usa",
    logo: "/photos/nyu-logo.svg",
    logoAlt: "New York University",
    brandColor: "#57068c",
    landmark: "nyu",
  },
  {
    year: "DEC 2025 — PRESENT",
    place: "New York, NY",
    title: "Salesforce Assistant",
    org: "NYU Tandon Digital Learning",
    detail: "Building student-facing systems in Brooklyn.",
    highlights: EXPERIENCE[0].bullets.slice(0, 2),
    side: "right",
    threshold: 0.7,
    logo: "/photos/nyu-logo.svg",
    logoAlt: "New York University",
    brandColor: "#57068c",
    landmark: "nyu",
  },
  {
    year: "JUN — AUG 2026",
    place: "New York, NY",
    title: "Data Engineering Intern",
    org: "Return on Creators",
    detail: "Shipping across product, backend, and data.",
    highlights: EXPERIENCE[1].bullets.slice(0, 2),
    side: "left",
    threshold: 0.75,
    logo: "/photos/roc-logo.svg",
    logoAlt: "Return on Creators",
    brandColor: "#ff007f",
    landmark: "roc",
  },
];

const DESKTOP_PATHS = {
  india: "M 500 20 C 760 170 270 430 500 700 S 760 1080 500 1450",
  flight: "M 500 1450 C 150 1510 150 1810 500 1900",
  usa: "M 500 1900 C 260 2100 760 2350 500 2580 S 250 2940 500 3200 S 620 3460 500 3650",
};

const MOBILE_PATHS = {
  india: "M 70 20 C 110 300 35 700 70 1450",
  flight: "M 70 1450 C 170 1550 170 1800 70 1900",
  usa: "M 70 1900 C 25 2200 115 2700 70 3200 S 100 3460 70 3650",
};

function Vehicle({ stage }: { stage: "rickshaw" | "plane" | "car" }) {
  if (stage === "plane") {
    return (
      <svg width="46" height="46" viewBox="-24 -24 48 48" aria-hidden="true">
        <circle r="21" fill="#f4f2ee" stroke="#1a2340" strokeWidth="2" />
        <path d="M-15 2 15-9c4-1 7 0 7 3s-1 4-5 5L7 2 1 15l-6 2 2-13-9 3-5 6-4 1 2-9-2-8 4-1 6 5 9-3-8-11 5-2L7-5l10-4" fill="#1a2340" stroke="#1a2340" strokeLinejoin="round" />
      </svg>
    );
  }

  if (stage === "rickshaw") {
    return (
      <svg width="42" height="42" viewBox="-21 -21 42 42" aria-hidden="true">
        <circle r="19" fill="#f4f2ee" stroke="#30333a" strokeWidth="2" />
        <path d="M-10-13h20l5 12v13c0 3-2 5-5 5h-20c-3 0-5-2-5-5V-1z" fill="#1f6b4f" stroke="#17251f" strokeWidth="1.5" />
        <path d="M-10-13h20l3 8h-26z" fill="#f2c84b" />
        <path d="M-8-9H8l2 6h-20z" fill="#d9e5ee" />
        <circle cx="-10" cy="13" r="3" fill="#171717" />
        <circle cx="10" cy="13" r="3" fill="#171717" />
        <circle cx="0" cy="-15" r="2.5" fill="#171717" />
        <path d="M-7 4h14" stroke="#f2c84b" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="42" height="42" viewBox="-21 -21 42 42" aria-hidden="true">
      <circle r="19" fill="#f4f2ee" stroke="#1a2340" strokeWidth="2" />
      <rect x="-9" y="-15" width="18" height="30" rx="6" fill="#4868a8" />
      <rect x="-7" y="-9" width="14" height="7" rx="2" fill="#d9e5ee" />
      <rect x="-7" y="4" width="14" height="6" rx="2" fill="#d9e5ee" />
      <rect x="-12" y="-9" width="3" height="7" rx="1.5" fill="#0d0d0d" />
      <rect x="9" y="-9" width="3" height="7" rx="1.5" fill="#0d0d0d" />
      <rect x="-12" y="4" width="3" height="7" rx="1.5" fill="#0d0d0d" />
      <rect x="9" y="4" width="3" height="7" rx="1.5" fill="#0d0d0d" />
    </svg>
  );
}

function Landmark({
  kind,
  highlighted,
}: {
  kind: "bits" | "visa" | "nyu" | "roc" | "next";
  highlighted: boolean;
}) {
  if (kind === "bits") {
    return (
      <div
        className={`relative h-[94px] w-[132px] transition-all duration-500 ${
          highlighted ? "-translate-y-1 scale-105" : "opacity-70 scale-95"
        }`}
      >
        <img
          src="/photos/bits-campus.png"
          alt="BITS Pilani campus"
          className="absolute inset-x-0 bottom-1 w-full object-contain drop-shadow-[0_7px_5px_rgba(13,13,13,0.2)]"
        />
        <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-[#1f2a78] px-3 py-1 text-[8px] font-bold tracking-wide text-white whitespace-nowrap">
          BITS PILANI
        </span>
        <span
          className={`absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full ${
            highlighted ? "bg-[#1f2a78]" : "bg-[#a9a6a0]"
          }`}
        />
      </div>
    );
  }

  if (kind === "nyu") {
    return (
      <div
        className={`relative h-[100px] w-[142px] transition-all duration-500 ${
          highlighted
            ? "-translate-y-1 scale-105 drop-shadow-[0_8px_9px_rgba(87,6,140,0.32)]"
            : "opacity-70 scale-95"
        }`}
      >
        <img
          src="/photos/nyu-campus.png"
          alt="New York University campus"
          className="absolute inset-x-0 bottom-1 w-full object-contain drop-shadow-[0_7px_5px_rgba(13,13,13,0.18)]"
        />
        <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-[#57068c] px-3 py-1 text-[8px] font-bold tracking-wide text-white whitespace-nowrap">
          NEW YORK UNIVERSITY
        </span>
        <span
          className={`absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full ${
            highlighted ? "bg-[#57068c]" : "bg-[#a9a6a0]"
          }`}
        />
      </div>
    );
  }

  if (kind === "visa") {
    return (
      <div
        className={`relative h-[100px] w-[142px] transition-all duration-500 ${
          highlighted
            ? "-translate-y-1 scale-105 drop-shadow-[0_8px_9px_rgba(20,52,203,0.28)]"
            : "opacity-70 scale-95"
        }`}
      >
        <img
          src="/photos/visa-campus.png"
          alt="Visa Bengaluru office"
          className="absolute inset-x-0 bottom-1 w-full object-contain drop-shadow-[0_7px_5px_rgba(13,13,13,0.18)]"
        />
        <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-[#1434cb] px-3 py-1 text-[8px] font-bold tracking-wide text-white whitespace-nowrap">
          VISA
        </span>
        <span
          className={`absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full ${
            highlighted ? "bg-[#1434cb]" : "bg-[#a9a6a0]"
          }`}
        />
      </div>
    );
  }

  if (kind === "roc") {
    return (
      <div
        className={`relative h-[100px] w-[142px] transition-all duration-500 ${
          highlighted
            ? "-translate-y-1 scale-105 drop-shadow-[0_8px_9px_rgba(255,0,127,0.3)]"
            : "opacity-70 scale-95"
        }`}
      >
        <img
          src="/photos/roc-campus.png"
          alt="Return on Creators office"
          className="absolute inset-x-0 bottom-1 w-full object-contain drop-shadow-[0_7px_5px_rgba(13,13,13,0.2)]"
        />
        <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-[#111116] px-3 py-1 text-[8px] font-bold tracking-wide text-white whitespace-nowrap">
          RETURN ON CREATORS<span className="text-[#ff007f]">.</span>
        </span>
        <span
          className={`absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full ${
            highlighted ? "bg-[#ff007f]" : "bg-[#a9a6a0]"
          }`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative h-[100px] w-[142px] transition-all duration-500 ${
        highlighted
          ? "-translate-y-1 scale-105 drop-shadow-[0_8px_9px_rgba(26,35,64,0.25)]"
          : "opacity-70 scale-95"
      }`}
    >
      <img
        src="/photos/company-campus.png"
        alt="Future company office"
        className="absolute inset-x-0 bottom-1 w-full object-contain drop-shadow-[0_7px_5px_rgba(13,13,13,0.18)]"
      />
      <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-[#1a2340] px-3 py-1 text-[8px] font-bold tracking-wide text-white whitespace-nowrap">
        YOUR COMPANY?
      </span>
      <span
        className={`absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full ${
          highlighted ? "bg-[#1a2340]" : "bg-[#a9a6a0]"
        }`}
      />
    </div>
  );
}

function Traveler() {
  return (
    <img
      src="/photos/chibi-character.png"
      alt=""
      className="h-[48px] md:h-[54px] w-auto drop-shadow-[0_5px_5px_rgba(13,13,13,0.18)]"
      aria-hidden="true"
    />
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const indiaRef = useRef<SVGPathElement>(null);
  const flightRef = useRef<SVGPathElement>(null);
  const usaRef = useRef<SVGPathElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [marker, setMarker] = useState({ x: 500, y: 20, angle: 0 });
  const [checkpoints, setCheckpoints] = useState<Array<{ x: number; y: number } | null>>([]);
  const [arrivalPhase, setArrivalPhase] = useState<0 | 1>(0);
  const [parkedSceneVisible, setParkedSceneVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.52;
      const routeY = Math.max(20, Math.min(3650, viewportCenter - rect.top));

      let next = 0;
      if (routeY < 1450) {
        next = ((routeY - 20) / 1430) * 0.44;
      } else if (routeY < 1900) {
        next = 0.44 + ((routeY - 1450) / 450) * 0.14;
      } else {
        next = 0.58 + ((routeY - 1900) / 1750) * 0.28;
      }
      if (viewportCenter - rect.top > 3650) {
        next = 0.86 + Math.min(1, (viewportCenter - rect.top - 3650) / 100) * 0.14;
      }
      next = Math.max(0, Math.min(1, next));
      setProgress(next);

      let path = indiaRef.current;
      if (routeY >= 1450 && routeY < 1900) {
        path = flightRef.current;
      } else if (routeY >= 1900) {
        path = usaRef.current;
      }
      if (path) {
        const length = path.getTotalLength();
        let low = 0;
        let high = length;
        for (let index = 0; index < 18; index += 1) {
          const middle = (low + high) / 2;
          if (path.getPointAtLength(middle).y < routeY) {
            low = middle;
          } else {
            high = middle;
          }
        }
        const at = (low + high) / 2;
        const point = path.getPointAtLength(at);
        const before = path.getPointAtLength(Math.max(0, at - 2));
        const after = path.getPointAtLength(Math.min(length, at + 2));
        const angle = Math.atan2(after.y - before.y, after.x - before.x) * 180 / Math.PI - 90;
        setMarker({ x: point.x, y: point.y, angle });
      }
    };
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    let frame = 0;
    const syncCheckpoints = () => {
      const points = STOPS.map((stop) => {
        let path = indiaRef.current;
        let local = stop.threshold / 0.44;
        if (stop.threshold >= 0.44 && stop.threshold < 0.58) {
          path = flightRef.current;
          local = (stop.threshold - 0.44) / 0.14;
        } else if (stop.threshold >= 0.58) {
          path = usaRef.current;
          local = (stop.threshold - 0.58) / 0.28;
        }
        if (!path) return null;
        const length = path.getTotalLength();
        const point = path.getPointAtLength(length * Math.max(0, Math.min(1, local)));
        return { x: point.x, y: point.y };
      });
      setCheckpoints(points);
    };
    frame = requestAnimationFrame(syncCheckpoints);
    window.addEventListener("resize", syncCheckpoints);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", syncCheckpoints);
    };
  }, [isMobile]);

  const paths = isMobile ? MOBILE_PATHS : DESKTOP_PATHS;
  const indiaProgress = Math.min(1, progress / 0.44);
  const flightProgress = Math.max(0, Math.min(1, (progress - 0.44) / 0.14));
  const usaProgress = Math.max(0, Math.min(1, (progress - 0.58) / 0.28));
  const stage = progress < 0.44 ? "rickshaw" : progress < 0.58 ? "plane" : "car";
  const hasArrived = progress >= 0.86;
  const isWalkingToBuilding = arrivalPhase >= 1;

  useEffect(() => {
    if (hasArrived) {
      setParkedSceneVisible(true);
      setArrivalPhase(0);
      const walkTimer = window.setTimeout(() => setArrivalPhase(1), 350);
      return () => window.clearTimeout(walkTimer);
    }

    setArrivalPhase(0);
    const hideTimer = window.setTimeout(() => setParkedSceneVisible(false), 1100);
    return () => window.clearTimeout(hideTimer);
  }, [hasArrived]);

  return (
    <section id="experience" className="relative bg-paper overflow-hidden py-[clamp(96px,14vh,160px)]">
      <div className="px-[var(--gutter)]">
        <div className="container-wide mb-20 md:mb-28 text-center">
          <span className="font-mono text-sm text-mute">04 — The journey</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">
            How I got <span className="font-instrument italic font-normal">here.</span>
          </h2>
          <p className="text-ink-2 mt-5 max-w-lg mx-auto leading-relaxed">
            From Goa to Bengaluru, across the Atlantic, and into New York.
          </p>
        </div>
      </div>

      <div ref={containerRef} className="relative h-[3940px] max-w-[1180px] mx-auto px-[var(--gutter)]">
        {[
          { year: "2024", top: 850, side: "right" },
          { year: "2025", top: 1510, side: "left" },
          { year: "2026", top: 2590, side: "right" },
        ].map(({ year, top, side }) => (
          <div
            key={year}
            aria-hidden="true"
            className={`hidden md:block absolute z-0 text-[clamp(6rem,11vw,10rem)] font-bold tracking-[-0.08em] leading-none text-[#1a2340]/10 ${
              side === "left" ? "left-[7%]" : "right-[7%]"
            }`}
            style={{ top }}
          >
            {year}
          </div>
        ))}

        <svg
          className="absolute inset-0 z-[1] w-full h-full overflow-visible"
          viewBox="0 0 1000 3940"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* India road */}
          <path d={paths.india} fill="none" stroke="#d6d1c8" strokeWidth="34" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          <path d={paths.india} fill="none" stroke="#30333a" strokeWidth="25" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          <path d={paths.india} fill="none" stroke="#f4f2ee" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeDasharray="14 16" />
          <path
            ref={indiaRef}
            d={paths.india}
            pathLength="1"
            fill="none"
            stroke="#f2c84b"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="1"
            strokeDashoffset={1 - indiaProgress}
          />

          {/* Transatlantic flight */}
          <path d={paths.flight} fill="none" stroke="#a5a099" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeDasharray="4 12" strokeLinecap="round" />
          <path
            ref={flightRef}
            d={paths.flight}
            pathLength="1"
            fill="none"
            stroke="#1a2340"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="1"
            strokeDashoffset={1 - flightProgress}
          />
          <circle cx={isMobile ? 70 : 500} cy="1450" r="7" fill="#1a2340" />
          <circle cx={isMobile ? 70 : 500} cy="1900" r="7" fill="#57068c" />
          {!isMobile && (
            <>
              <text x="455" y="1422" textAnchor="end" fill="#77756f" fontSize="14" fontFamily="monospace">INDIA · BLR</text>
              <text x="540" y="1880" fill="#57068c" fontSize="14" fontFamily="monospace">USA · JFK</text>
            </>
          )}

          {/* New York road */}
          <path d={paths.usa} fill="none" stroke="#d6d1c8" strokeWidth="34" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          <path d={paths.usa} fill="none" stroke="#30333a" strokeWidth="25" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          <path d={paths.usa} fill="none" stroke="#f4f2ee" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeDasharray="14 16" />
          <path
            ref={usaRef}
            d={paths.usa}
            pathLength="1"
            fill="none"
            stroke="#f2c84b"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="1"
            strokeDashoffset={1 - usaProgress}
          />
        </svg>

        {STOPS.map((stop, index) => {
          const checkpoint = checkpoints[index];
          if (!stop.landmark || !checkpoint) return null;
          const nearby = Math.abs(progress - stop.threshold) < 0.065;
          return (
            <div
              key={`checkpoint-${stop.year}-${stop.title}`}
              className="absolute z-[8] pointer-events-none"
              style={{
                left: `${checkpoint.x / 10}%`,
                top: `${(checkpoint.y / 3940) * 100}%`,
                transform: isMobile
                  ? "translate(-50%, -92%)"
                  : `translate(calc(-50% + ${stop.side === "left" ? 72 : -72}px), -92%)`,
              }}
              aria-hidden="true"
            >
              <div className="origin-bottom scale-[0.58] md:scale-100">
                <Landmark kind={stop.landmark} highlighted={nearby} />
              </div>
            </div>
          );
        })}

        <div
          className="absolute z-[15] pointer-events-none"
          style={{
            left: isMobile ? "7%" : "50%",
            top: `${(3650 / 3940) * 100}%`,
            transform: isMobile
              ? "translate(calc(-50% + 82px), -92%)"
              : "translate(calc(-50% + 132px), -92%)",
          }}
          aria-hidden="true"
        >
          <div className="origin-bottom scale-[0.68] md:scale-100">
            <Landmark kind="next" highlighted={hasArrived} />
          </div>
        </div>

        <div
          className={`absolute z-20 pointer-events-none transition-opacity duration-300 ${
            parkedSceneVisible ? "opacity-0" : "opacity-100"
          }`}
          style={{
            left: `${marker.x / 10}%`,
            top: `${(marker.y / 3940) * 100}%`,
            transform: `translate(-50%, -50%) rotate(${marker.angle}deg)`,
          }}
          aria-hidden="true"
        >
          <Vehicle stage={stage} />
        </div>

        <div
          className={`absolute z-20 pointer-events-none flex items-end gap-4 md:gap-6 transition-opacity duration-500 ${
            parkedSceneVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: isMobile ? "7%" : "50%",
            top: `${(3650 / 3940) * 100}%`,
            transform: isMobile ? "translate(-22%, -100%)" : "translate(-42%, -100%)",
          }}
          aria-hidden="true"
        >
          <div className="shrink-0 rotate-[-4deg]">
            <Vehicle stage="car" />
          </div>
          <div className={`transition-all duration-1000 ease-[var(--ease)] ${
            !parkedSceneVisible
              ? "-translate-x-8 scale-75 opacity-0"
              : isWalkingToBuilding
                ? "translate-x-[72px] scale-90 opacity-100"
                : "translate-x-0 scale-100 opacity-100"
          }`}>
            <Traveler />
          </div>
        </div>

        <div className="relative z-10">
          {STOPS.map((stop) => {
            const revealLead = stop.landmark === "nyu" ? 0.045 : 0.012;
            const active = progress >= stop.threshold - revealLead;
            const nearby = Math.abs(progress - stop.threshold) < 0.065;
            const nyuNearby = nearby && stop.landmark === "nyu";
            return (
              <article
                key={`${stop.year}-${stop.title}`}
                className={`relative h-[430px] flex items-center pl-16 md:pl-0 ${
                  stop.side === "left" ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`relative w-full md:w-[41%] bg-white/95 backdrop-blur-sm border rounded-[22px] p-6 md:p-8 transition-all duration-700 ${
                    stop.logoAlt === "New York University" ? "border-[#57068c]/25" : "border-ink/10"
                  } ${
                    active ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"
                  } ${
                    nyuNearby
                      ? "shadow-[0_22px_70px_-26px_rgba(87,6,140,0.55)] ring-2 ring-[#57068c]/35"
                      : nearby
                        ? "shadow-[0_22px_65px_-30px_rgba(13,13,13,0.55)]"
                        : "shadow-[0_18px_50px_-38px_rgba(13,13,13,0.65)]"
                  }`}
                  style={stop.brandColor ? {
                    borderTopColor: stop.brandColor,
                    borderTopWidth: 3,
                  } : undefined}
                >
                  {stop.logo && (
                    <div
                      className={`mb-6 inline-flex h-14 items-center rounded-xl border px-4 ${
                        stop.logoAlt === "Return on Creators"
                          ? "bg-[#0a0a0a] border-[#ff007f]/30"
                          : stop.logoAlt === "Visa"
                            ? "bg-[#1434cb]/[0.04] border-[#1434cb]/15"
                            : stop.logoAlt === "New York University"
                              ? "bg-[#57068c]/[0.04] border-[#57068c]/15"
                              : "bg-[#1f2a78]/[0.04] border-[#1f2a78]/15"
                      }`}
                    >
                      <img
                        src={stop.logo}
                        alt={stop.logoAlt ?? ""}
                        className={`block object-contain object-left ${
                          stop.logoAlt === "Return on Creators"
                            ? "h-10 w-10"
                            : stop.logoAlt === "Visa"
                              ? "h-7 w-auto"
                              : stop.logoAlt === "New York University"
                                ? "h-8 w-auto"
                                : "h-10 max-w-[210px]"
                        }`}
                      />
                      {stop.logoAlt === "Return on Creators" && (
                        <span className="ml-3 text-sm font-semibold text-white whitespace-nowrap">
                          Return on Creators<span className="text-[#ff007f]">.</span>
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className="font-mono text-[10px] tracking-[0.12em] text-mute">{stop.year}</span>
                    <span className="text-[11px] text-ink-2 text-right">{stop.place}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">{stop.title}</h3>
                  <h4 className="text-base font-medium text-ink-2 mt-2">{stop.org}</h4>
                  <p className="text-sm text-mute mt-2 leading-relaxed">{stop.detail}</p>
                  {stop.highlights.length > 0 && (
                    <ul className="mt-5 pt-5 border-t border-line space-y-3">
                      {stop.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#1a2340] shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {stop.accent === "flight" && (
                    <div className="mt-6 flex items-center gap-3 text-xs font-mono text-[#1a2340]">
                      <span className="h-px bg-[#1a2340]/25 flex-1" />
                      BLR&nbsp;&nbsp;✈&nbsp;&nbsp;JFK
                      <span className="h-px bg-[#1a2340]/25 flex-1" />
                    </div>
                  )}
                </div>
              </article>
            );
          })}

          <div className="h-[140px]" aria-hidden="true" />

          <div className="h-[440px] pt-[60px] flex items-start justify-center pl-14 md:pl-0">
            <div
              className={`relative w-full max-w-[540px] bg-[#1a2340] text-white rounded-[26px] p-7 md:p-9 text-center transition-all duration-700 ${
                progress > 0.82 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-8"
              }`}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/45">THE NEXT STOP</span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
                Your company <span className="font-instrument italic font-normal">next?</span>
              </h3>
              <p className="text-white/60 mt-4 mb-7">The route is still being written.</p>
              <button
                onClick={() => window.scrollToTarget?.("#contact")}
                className="inline-flex items-center justify-center rounded-full bg-white text-[#1a2340] px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-transform"
              >
                Plan the next stop
              </button>
            </div>
          </div>

          <div className="h-[350px]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
