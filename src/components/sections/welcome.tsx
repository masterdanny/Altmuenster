"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShowMore } from "@/components/show-more";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { useLocale } from "@/context/locale-context";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import { STATS } from "@/lib/data";

function StatCard({
  stat,
  label,
  sublabel,
  index,
}: {
  stat: (typeof STATS)[number];
  label: string;
  sublabel: string;
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
        className="group rounded-2xl border border-border/60 bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-lg sm:p-8"
      >
        <p className="font-serif text-3xl font-light text-primary transition-colors group-hover:text-accent sm:text-4xl">
          {stat.prefix}
          {count}
          {stat.suffix}
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-foreground">
          {label}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{sublabel}</p>
      </motion.div>
    </SectionReveal>
  );
}

export function Welcome() {
  const { t } = useLocale();

  const statsGrid = (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
      {STATS.map((stat, i) => (
        <StatCard
          key={stat.label}
          stat={stat}
          label={t.welcome.stats[i].label}
          sublabel={t.welcome.stats[i].sublabel}
          index={i}
        />
      ))}
    </div>
  );

  return (
    <section
      id="welcome"
      className="section-padding bg-background"
      aria-labelledby="welcome-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow={t.welcome.eyebrow}
          title={t.welcome.title}
          description={t.welcome.description}
          mobileDescription={t.welcome.shortDescription}
          compactMobile
        />

        <div className="hidden sm:block">{statsGrid}</div>

        <div className="sm:hidden">
          <ShowMore
            label={t.welcome.showStats}
            labelLess={t.common.showLess}
            contentClassName="mt-2"
          >
            {statsGrid}
          </ShowMore>
        </div>
      </div>
    </section>
  );
}