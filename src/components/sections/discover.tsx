"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EXPERIENCES, type ExperienceCard } from "@/lib/data";
import { cn } from "@/lib/utils";

const GRID_SPANS = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-2",
];

export function Discover() {
  const [selected, setSelected] = useState<ExperienceCard | null>(null);

  return (
    <section
      id="discover"
      className="section-padding bg-muted/30"
      aria-labelledby="discover-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Experiences"
          title="Discover the Magic"
          description="Six worlds await on the shores of Traunsee — from sun-drenched lake days to summit trails and centuries of alpine heritage."
        />

        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-3 md:gap-5">
          {EXPERIENCES.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <SectionReveal
                key={exp.id}
                delay={i * 0.08}
                className={cn("min-h-[220px]", GRID_SPANS[i])}
              >
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelected(exp)}
                  className="group relative h-full w-full overflow-hidden rounded-2xl text-left shadow-md transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`Learn more about ${exp.title}`}
                >
                  <Image
                    src={exp.image}
                    alt={exp.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity group-hover:from-black/90" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">
                      {exp.shortDescription}
                    </p>
                  </div>
                </motion.button>
              </SectionReveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
            <DialogContent className="max-w-2xl p-0 overflow-hidden">
              <div className="relative h-56 sm:h-72">
                <Image
                  src={selected.image}
                  alt={selected.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-3xl">{selected.title}</DialogTitle>
                  <DialogDescription className="text-base leading-relaxed">
                    {selected.details}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selected.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <Button
                  className="mt-6 w-full"
                  variant="gold"
                  onClick={() => setSelected(null)}
                >
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}