"use client";

import { useState } from "react";
import { PROFILE } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentYear = new Date().getFullYear();
  const emailSubject = "Want to build something together?";
  const emailBody = `Hey Advait,

I'm [Your name], and I'd love to collaborate! Let's connect.

Best,
[Your name]`;
  const emailHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section id="contact" className="section-padding bg-paper flex flex-col min-h-screen relative overflow-hidden">
      <div className="container-wide flex-grow flex flex-col justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-end relative z-10">
          <div>
            <span className="font-mono text-sm text-mute block mb-8">06 — Contact</span>
            <h2 className="text-[clamp(3rem,8vw,8rem)] leading-[0.9] font-bold tracking-tighter uppercase group cursor-default">
              <span className="block hover:-translate-y-2 transition-transform duration-300">Let&apos;s build</span>
              <span className="block font-instrument italic font-normal text-ink-2 hover:-translate-y-2 transition-transform duration-300 delay-75">something</span>
              <span className="block hover:-translate-y-2 transition-transform duration-300 delay-150">together.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6 mb-4">
            <div className="flex items-center gap-4">
              <a 
                href={emailHref}
                className="text-2xl md:text-4xl font-medium tracking-tight underline decoration-line underline-offset-[8px] hover:decoration-ink transition-colors"
              >
                {PROFILE.email}
              </a>
              <button 
                onClick={handleCopy}
                className="px-4 py-2 rounded-full border border-line text-xs font-mono font-medium hover:bg-ink hover:text-white transition-colors"
                aria-live="polite"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>

            <div className="flex gap-6 mt-8">
              {PROFILE.github && (
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-lg font-medium text-mute hover:text-ink transition-colors">
                  GitHub
                </a>
              )}
              {PROFILE.linkedin && (
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-lg font-medium text-mute hover:text-ink transition-colors">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Circular Text Badge */}
        <div className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none w-[600px] h-[600px] animate-[spin_20s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
            <text className="font-mono text-[9px] font-bold tracking-widest uppercase">
              <textPath href="#circle" startOffset="0%">
                SAY HELLO · LET'S BUILD · SAY HELLO · LET'S BUILD · SAY HELLO · LET'S BUILD · 
              </textPath>
            </text>
          </svg>
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-32 pt-8 border-t border-line text-xs font-mono text-mute container-wide">
        <div>© {currentYear} {PROFILE.name}</div>
        <button onClick={() => window.scrollToTarget?.("body")} className="hover:text-ink transition-colors">
          Back to top ↑
        </button>
        <div>Built with Next.js</div>
      </footer>
    </section>
  );
}
