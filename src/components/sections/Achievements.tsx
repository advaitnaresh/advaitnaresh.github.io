"use client";

import { useEffect, useRef } from "react";
import { CERTIFICATIONS } from "@/lib/data";

const CERT_VISUALS: Record<string, {
  accent: string;
  wash: string;
  logo: string;
  logoAlt: string;
  technology?: string;
  technologyAlt?: string;
  visaUniversity?: boolean;
}> = {
  "spark-advanced": {
    accent: "#1434cb",
    wash: "linear-gradient(135deg, #eef2ff 0%, #dce7ff 58%, #f4c95d 140%)",
    logo: "/photos/visa-logo.svg",
    logoAlt: "Visa",
    technology: "https://cdn.simpleicons.org/apachespark/E25A1C",
    technologyAlt: "Apache Spark",
    visaUniversity: true,
  },
  "hive-advanced": {
    accent: "#1434cb",
    wash: "linear-gradient(135deg, #eef2ff 0%, #dbe5ff 55%, #f6d34b 135%)",
    logo: "/photos/visa-logo.svg",
    logoAlt: "Visa",
    technology: "https://cdn.simpleicons.org/apachehive/FDEE21",
    technologyAlt: "Apache Hive",
    visaUniversity: true,
  },
  "trading-ml-gcp": {
    accent: "#0056d2",
    wash: "linear-gradient(135deg, #eaf3ff 0%, #d8eaff 60%, #ffffff 100%)",
    logo: "https://cdn.simpleicons.org/coursera/0056D2",
    logoAlt: "Coursera",
    technology: "https://cdn.simpleicons.org/googlecloud/4285F4",
    technologyAlt: "Google Cloud",
  },
  "postman-api": {
    accent: "#ff6c37",
    wash: "linear-gradient(135deg, #fff0e9 0%, #ffd8c8 65%, #fff8f4 100%)",
    logo: "https://cdn.simpleicons.org/postman/FF6C37",
    logoAlt: "Postman",
  },
  "python-crash-course": {
    accent: "#0056d2",
    wash: "linear-gradient(135deg, #edf5ff 0%, #dcecff 62%, #ffe99d 130%)",
    logo: "https://cdn.simpleicons.org/coursera/0056D2",
    logoAlt: "Coursera",
    technology: "https://cdn.simpleicons.org/python/3776AB",
    technologyAlt: "Python",
  },
  "competitive-programming": {
    accent: "#1f2a78",
    wash: "linear-gradient(135deg, #eef0ff 0%, #dedff1 65%, #fff4d8 120%)",
    logo: "/photos/bits-pilani-logo.png",
    logoAlt: "BITS Pilani",
    technology: "https://cdn.simpleicons.org/cplusplus/00599C",
    technologyAlt: "C++",
  },
  robotics: {
    accent: "#1f2a78",
    wash: "linear-gradient(135deg, #edf0ff 0%, #d9def3 62%, #e6f4ef 115%)",
    logo: "/photos/bits-pilani-logo.png",
    logoAlt: "BITS Pilani",
    technology: "https://cdn.simpleicons.org/ros/22314E",
    technologyAlt: "Robotics",
  },
  "cpp-programming": {
    accent: "#a435f0",
    wash: "linear-gradient(135deg, #f7edff 0%, #ead5ff 65%, #fff 110%)",
    logo: "https://cdn.simpleicons.org/udemy/A435F0",
    logoAlt: "Udemy",
    technology: "https://cdn.simpleicons.org/cplusplus/00599C",
    technologyAlt: "C++",
  },
  "academic-advisor": {
    accent: "#167d69",
    wash: "linear-gradient(135deg, #e7f8f3 0%, #cfeee5 65%, #fff 115%)",
    logo: "",
    logoAlt: "Success Infinity",
  },
  "python-basics": {
    accent: "#0056d2",
    wash: "linear-gradient(135deg, #edf5ff 0%, #dcecff 62%, #ffe99d 130%)",
    logo: "https://cdn.simpleicons.org/coursera/0056D2",
    logoAlt: "Coursera",
    technology: "https://cdn.simpleicons.org/python/3776AB",
    technologyAlt: "Python",
  },
};

function CredentialVisual({ id, index }: { id: string; index: number }) {
  const visual = CERT_VISUALS[id];

  return (
    <div className="relative h-[38%] overflow-hidden border-b border-ink/10 bg-[#f5f5f2] p-6">
      <div className="relative z-10 flex h-full items-center justify-between gap-6">
        <div className="flex min-w-0 items-center gap-4">
          {visual.logo ? (
            <img
              src={visual.logo}
              alt={visual.logoAlt}
              className={`shrink-0 object-contain object-left ${
                visual.logoAlt === "BITS Pilani" ? "h-10 w-[145px]" : "h-8 w-10"
              }`}
            />
          ) : (
            <span
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white"
              style={{ backgroundColor: visual.accent }}
            >
              {id === "academic-advisor" ? "SI" : "BITS"}
            </span>
          )}
          {visual.logoAlt !== "BITS Pilani" && (
            <div className="min-w-0">
              <p className="text-base font-semibold leading-tight">
                {visual.visaUniversity ? "Visa University" : visual.logoAlt}
              </p>
              <p className="mt-1 text-xs text-mute">Certificate issuer</p>
            </div>
          )}
        </div>

        {visual.technology && (
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-2">
            <img src={visual.technology} alt="" className="h-5 w-5 object-contain" />
            <span className="hidden text-[11px] text-ink-2 sm:inline">{visual.technologyAlt}</span>
          </div>
        )}
      </div>
      <div className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: visual.accent }} />
      <span className="absolute right-5 top-4 font-mono text-[9px] text-mute/60">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate progress of sticky container
      // 0 when top hits top of viewport, 1 when bottom hits bottom of viewport
      const start = 0;
      const end = rect.height - window.innerHeight;
      const current = -rect.top;
      
      const p = Math.max(0, Math.min(1, current / end));
      
      // Move track horizontally
      const maxScroll = trackRef.current.scrollWidth - window.innerWidth;
      if (maxScroll > 0) {
        trackRef.current.style.transform = `translateX(-${p * maxScroll}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="certifications" className="bg-ink text-paper relative" ref={containerRef} style={{ height: "500svh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        <div className="absolute top-12 md:top-24 left-[var(--gutter)]">
          <span className="font-mono text-sm text-mute/60">05 — Credentials</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">
            Certified to <span className="font-instrument italic font-normal text-white">build.</span>
          </h2>
        </div>

        <div className="w-full pl-[var(--gutter)] mt-28">
          <div ref={trackRef} className="flex gap-6 w-fit items-center will-change-transform pr-[var(--gutter)]">
            
            {CERTIFICATIONS.map((certification, idx) => (
              <a
                key={certification.id}
                href={certification.credentialUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${certification.title} certificate`}
                className="w-[clamp(350px,40vw,500px)] h-[clamp(350px,46vh,390px)] bg-card text-ink rounded-[20px] overflow-hidden flex flex-col shrink-0 border border-white/10 hover:-translate-y-1 hover:shadow-[0_22px_60px_-34px_rgba(255,255,255,0.28)] transition-all duration-300 group relative"
              >
                <CredentialVisual id={certification.id} index={idx} />

                <div className="flex flex-1 flex-col justify-between p-6 md:p-7 relative z-10">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <p className="text-xs text-mute">
                        Verified credential
                      </p>
                      <p className="font-mono text-[9px] tracking-[0.12em] text-mute whitespace-nowrap">
                        Issued {certification.issued}
                      </p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                      {certification.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between gap-5 pt-4">
                    <p className="text-[10px] text-mute truncate">
                      ID&nbsp; {certification.credentialId}
                    </p>
                    <span className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-lg shrink-0 transition-all duration-300 group-hover:bg-ink group-hover:text-paper group-hover:rotate-45">
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}

            {/* End Card */}
            <div className="w-[clamp(280px,30vw,400px)] h-[clamp(260px,36vh,310px)] flex items-center justify-center shrink-0 pl-12 pr-24">
              <h3 className="text-3xl md:text-5xl font-instrument italic opacity-50 tracking-tight whitespace-nowrap">
                always learning →
              </h3>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
