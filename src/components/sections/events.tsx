"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { EVENTS, OFFICIAL_LINKS } from "@/lib/data";

export function Events() {
  return (
    <section
      id="events"
      className="section-padding bg-background"
      aria-labelledby="events-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Calendar"
          title="Events & Highlights"
          description="Upcoming events from the official Altmünster Veranstaltungskalender — lakeside yoga, village festivals, and summer programmes."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event, i) => (
            <SectionReveal key={event.id} delay={i * 0.08}>
              <motion.a
                href={event.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex gap-5 rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-primary/5 px-4 py-3 text-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {event.month}
                  </span>
                  <span className="font-serif text-3xl font-light text-primary">
                    {event.day}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {event.category}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-semibold leading-tight">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {event.location}
                    </span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Details on altmuenster.at
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </motion.a>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
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
        </div>
      </div>
    </section>
  );
}