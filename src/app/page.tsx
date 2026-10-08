"use client";

import { useEffect } from "react";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    // Global Reveal Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px", threshold: 0 }
    );

    document.querySelectorAll(".rv, .rv-mask").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}
