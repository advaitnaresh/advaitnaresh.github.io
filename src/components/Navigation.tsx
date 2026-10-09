"use client";

import { useEffect, useState, useRef } from "react";
import { NAV, PROFILE } from "@/lib/data";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavHidden, setMobileNavHidden] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 40);

      const scrollDelta = scrollPos - lastScrollRef.current;
      if (Math.abs(scrollDelta) > 8) {
        setMobileNavHidden(scrollDelta > 0 && scrollPos > 120);
        lastScrollRef.current = scrollPos;
      }

      // Scroll progress
      if (progressRef.current) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollPos / docHeight : 0;
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisible = 0;
        let mostVisible = "";
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio > maxVisible) {
              maxVisible = entry.intersectionRatio;
              mostVisible = entry.target.id;
            }
          }
        });
        if (mostVisible) setActiveSection(mostVisible);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    NAV.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (window.scrollToTarget) {
      window.scrollToTarget(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-line z-50">
        <div
          ref={progressRef}
          className="h-full bg-ink origin-left scale-x-0 transition-transform duration-100 ease-out"
        />
      </div>

      {/* Header Container */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-[var(--gutter)] pt-[calc(env(safe-area-inset-top)+0.75rem)] pb-3 md:py-6 flex items-center justify-between pointer-events-none transition-transform duration-300 ${
          mobileNavHidden ? "-translate-y-full md:translate-y-0" : "translate-y-0"
        }`}
      >
        {/* Left: Initials / Name */}
        <div className="flex items-center gap-4 pointer-events-auto group cursor-pointer" onClick={() => scrollTo("body")}>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm transition-all duration-500 group-hover:rotate-[360deg] ${
              scrolled
                ? "bg-ink text-paper border border-ink"
                : "border border-ink text-ink bg-transparent"
            }`}
          >
            {PROFILE.initials}
          </div>
          <span
            className={`font-medium tracking-tight transition-opacity duration-300 ${
              scrolled ? "opacity-0 invisible" : "opacity-100"
            }`}
          >
            {PROFILE.name}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center p-1.5 rounded-full pointer-events-auto transition-all duration-300 ${
            scrolled ? "bg-white/70 backdrop-blur-md shadow-sm border border-line" : "bg-transparent"
          }`}
        >
          <ul className="flex items-center relative">
            {NAV.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label} className="relative z-10">
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      isActive ? "text-paper" : "text-ink hover:text-ink/70"
                    }`}
                  >
                    {item.label}
                  </button>
                  {isActive && (
                    <div
                      className="absolute inset-0 bg-ink rounded-full -z-10"
                      style={{
                        viewTransitionName: "active-nav",
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden pointer-events-auto flex items-center gap-2 bg-ink text-paper px-4 py-2 rounded-full text-sm font-medium"
        >
          Menu
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-paper transition-all duration-500 flex flex-col justify-center px-[var(--gutter)] ${
          menuOpen ? "opacity-100 visible clip-circle-open" : "opacity-0 invisible clip-circle-close"
        }`}
        style={{
          clipPath: menuOpen ? "circle(150% at calc(100% - 2rem) 2rem)" : "circle(0% at calc(100% - 2rem) 2rem)",
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-[var(--gutter)] w-10 h-10 rounded-full border border-ink flex items-center justify-center text-ink hover:bg-ink hover:text-paper transition-colors"
        >
          <X size={20} />
        </button>
        
        <ul className="flex flex-col gap-6">
          {NAV.map((item, i) => (
            <li
              key={item.label}
              className="overflow-hidden"
            >
              <button
                onClick={() => scrollTo(item.href)}
                className="text-4xl md:text-6xl font-medium tracking-tight flex items-center gap-6 group text-left w-full"
                style={{
                  transform: menuOpen ? "translateY(0)" : "translateY(100%)",
                  transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.05}s`,
                }}
              >
                <span className="text-sm font-mono text-mute mb-4 group-hover:text-ink transition-colors">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="font-instrument italic opacity-0 group-hover:opacity-100 transition-opacity -ml-8 mr-2 text-ink">
                  /
                </span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
