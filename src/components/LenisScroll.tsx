"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      gestureOrientation: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Provide a way to scroll to targets programmatically if needed
    window.scrollToTarget = (target: string | HTMLElement) => {
      lenis.scrollTo(target);
    };

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    scrollToTarget?: (target: string | HTMLElement) => void;
  }
}
