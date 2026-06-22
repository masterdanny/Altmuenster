"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { EVENTS, OFFICIAL_LINKS, OFFICIAL_NEWS } from "@/lib/data";

export function WhatsOn() {
  return (
    <section
      id="whats-on"
      className="section-padding bg-background"
      aria-labelledby="whats-on-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Calendar"
          title="What's On"
          description="Upcoming events and news from the municipality — full listings always on altmuenster.at."
        />

        <div className="mb-12">
          <h3 className="mb-5 font-serif text-2xl font-light">Upcoming events</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {EVENTS.map((event, i) => (
              <SectionReveal key={event.id} delay={i * 0.06}>
                <motion.a
                  href={event.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-primary/5 px-3 py-2 text-center">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {event.month}
                    </span>
                    <span className="font-serif text-2xl font-light text-primary">
                      {event.day}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif text-lg font-semibold leading-tight">
                      {event.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" aria-hidden="true" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </motion.a>
              </SectionReveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-2xl font-light">Municipality news</h3>
          <div className="grid gap-5 md:grid-cols-3">
            {OFFICIAL_NEWS.map((item, i) => (
              <SectionReveal key={item.id} delay={i * 0.08}>
                <motion.a
                  href={item.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative h-36">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {item.date}
                    </p>
                    <h4 className="mt-2 font-serif text-lg font-semibold leading-tight">
                      {item.title}
                    </h4>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {item.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Read more
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </motion.a>
              </SectionReveal>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button variant="outline" asChild>
            <a
              href={OFFICIAL_LINKS.events}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Full event calendar
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button variant="outline" asChild>
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