"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "welcome",
  "history",
  "map",
  "whats-on",
] as const;

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const rootMargin = isMobile
      ? "-25% 0px -55% 0px"
      : "-40% 0px -50% 0px";

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin, threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeSection;
}