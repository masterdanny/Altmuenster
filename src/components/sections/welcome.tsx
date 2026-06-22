"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import { STATS } from "@/lib/data";

function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useAnimatedCounter(stat.value, inView);

  return (
    <SectionReveal delay={index * 0.1}>
      <motion.div
        ref={ref}
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group rounded-2xl border border-border/60 bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
      >
        <p className="font-serif text-4xl font-light text-primary transition-colors group-hover:text-accent">
          {stat.prefix}
          {count}
          {stat.suffix}
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-foreground">
          {stat.label}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{stat.sublabel}</p>
      </motion.div>
    </SectionReveal>
  );
}

export function Welcome() {
  return (
    <section
      id="welcome"
      className="section-padding bg-background"
      aria-labelledby="welcome-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Welcome"
          title="Welcome to Altmuenster"
          description="Nestled on the western shore of Lake Traunsee, within the protected landscapes of Naturpark Attersee-Traunsee, Altmuenster offers a gentler rhythm of life — where alpine peaks meet crystal waters, and every path leads to wonder. A peaceful alternative to bustling Gmunden, yet close enough to explore the entire Salzkammergut."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}