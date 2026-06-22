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

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeSection;
}