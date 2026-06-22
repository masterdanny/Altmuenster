"use client";

import { motion } from "framer-motion";
import { BookOpen, Church, ExternalLink, Home, Trees } from "lucide-react";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { useLocale } from "@/context/locale-context";
import { OFFICIAL_LINKS } from "@/lib/data";

const ICONS = [Church, Home, Trees, BookOpen] as const;

const TIP_LINKS = [
  null,
  null,
  OFFICIAL_LINKS.accommodations,
  OFFICIAL_LINKS.events,
] as const;

export function History() {
  const { t } = useLocale();

  return (
    <section
      id="history"
      className="section-padding bg-muted/30"
      aria-labelledby="history-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow={t.history.eyebrow}
          title={t.history.title}
          description={t.history.description}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {t.history.highlights.map((item, i) => {
            const Icon = ICONS[i] ?? BookOpen;
            return (
              <SectionReveal key={item.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -3 }}
                  className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {item.era}
                    </p>
                  </div>
                  <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </motion.article>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-light">{t.history.goodToKnow}</h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {t.history.tips.map((tip, i) => {
                const href = TIP_LINKS[i];
                return (
                  <li key={tip.label} className="text-sm">
                    <p className="font-medium text-foreground">{tip.label}</p>
                    <p className="mt-1 text-muted-foreground">{tip.detail}</p>
                    {href && "linkLabel" in tip && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        {tip.linkLabel}
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}