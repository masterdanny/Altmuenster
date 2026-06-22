"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { OFFICIAL_LINKS, OFFICIAL_NEWS } from "@/lib/data";

export function CommunityNews() {
  return (
    <section
      className="section-padding bg-primary text-primary-foreground"
      aria-labelledby="news-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="From the Municipality"
          title="What's Happening in Altmuenster"
          description="Latest news and events from the official Marktgemeinde Altmuenster — always up to date at altmuenster.at."
          className="[&_h2]:text-primary-foreground [&_p]:text-white/70"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {OFFICIAL_NEWS.map((item, i) => (
            <SectionReveal key={item.id} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="relative h-44">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">
                    {item.date}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
                    {item.summary}
                  </p>
                  <a
                    href={item.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                  >
                    Read on altmuenster.at
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="gold" asChild>
            <a
              href={OFFICIAL_LINKS.news}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              All municipality news
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}