"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { ShowMore } from "@/components/show-more";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/locale-context";
import { EVENTS, OFFICIAL_LINKS, OFFICIAL_NEWS } from "@/lib/data";

function EventCard({
  event,
  localized,
  index,
}: {
  event: (typeof EVENTS)[number];
  localized: {
    title?: string;
    description?: string;
    date?: string;
    location?: string;
  } | undefined;
  index: number;
}) {
  return (
    <SectionReveal delay={index * 0.06}>
      <motion.a
        href={event.officialUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3 }}
        className="flex gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-sm transition-shadow hover:shadow-md sm:gap-4 sm:p-5"
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
            {localized?.title ?? event.title}
          </h4>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {localized?.description ?? event.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              {localized?.date ?? event.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {localized?.location ?? event.location}
            </span>
          </div>
        </div>
      </motion.a>
    </SectionReveal>
  );
}

function NewsCard({
  item,
  localized,
  index,
  readMore,
}: {
  item: (typeof OFFICIAL_NEWS)[number];
  localized: {
    date?: string;
    title?: string;
    summary?: string;
    imageAlt?: string;
  } | undefined;
  index: number;
  readMore: string;
}) {
  return (
    <SectionReveal delay={index * 0.08}>
      <motion.a
        href={item.officialUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3 }}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="relative h-40 sm:h-36">
          <Image
            src={item.image}
            alt={localized?.imageAlt ?? item.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">
            {localized?.date ?? item.date}
          </p>
          <h4 className="mt-2 font-serif text-lg font-semibold leading-tight">
            {localized?.title ?? item.title}
          </h4>
          <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3 sm:line-clamp-none">
            {localized?.summary ?? item.summary}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
            {readMore}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>
      </motion.a>
    </SectionReveal>
  );
}

export function WhatsOn() {
  const { t } = useLocale();

  const eventsList = EVENTS.map((event, i) => {
    const localized =
      t.whatsOn.events[event.id as keyof typeof t.whatsOn.events];
    return (
      <EventCard
        key={event.id}
        event={event}
        localized={localized}
        index={i}
      />
    );
  });

  const newsList = OFFICIAL_NEWS.map((item, i) => {
    const localized =
      t.whatsOn.news[item.id as keyof typeof t.whatsOn.news];
    return (
      <NewsCard
        key={item.id}
        item={item}
        localized={localized}
        index={i}
        readMore={t.common.readMore}
      />
    );
  });

  return (
    <section
      id="whats-on"
      className="section-padding bg-background"
      aria-labelledby="whats-on-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow={t.whatsOn.eyebrow}
          title={t.whatsOn.title}
          description={t.whatsOn.description}
          mobileDescription={t.whatsOn.shortDescription}
          compactMobile
        />

        <div className="mb-8 sm:mb-12">
          <h3 className="mb-4 font-serif text-xl font-light sm:mb-5 sm:text-2xl">
            {t.whatsOn.eventsTitle}
          </h3>

          <div className="hidden gap-4 sm:grid sm:grid-cols-2">
            {eventsList}
          </div>

          <div className="sm:hidden">
            <div className="grid gap-4">{eventsList.slice(0, 1)}</div>
            <ShowMore
              label={t.whatsOn.showAllEvents}
              labelLess={t.common.showLess}
              contentClassName="mt-4 grid gap-4"
            >
              {eventsList.slice(1)}
            </ShowMore>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-xl font-light sm:mb-5 sm:text-2xl">
            {t.whatsOn.newsTitle}
          </h3>

          <div className="hidden gap-4 sm:grid sm:gap-5 md:grid-cols-3">
            {newsList}
          </div>

          <div className="sm:hidden">
            <div className="grid gap-4">{newsList.slice(0, 1)}</div>
            <ShowMore
              label={t.whatsOn.showAllNews}
              labelLess={t.common.showLess}
              contentClassName="mt-4 grid gap-4"
            >
              {newsList.slice(1)}
            </ShowMore>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <a
              href={OFFICIAL_LINKS.events}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              {t.whatsOn.fullCalendar}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <a
              href={OFFICIAL_LINKS.news}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              {t.whatsOn.allNews}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}