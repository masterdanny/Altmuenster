"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { DINING, OFFICIAL_LINKS } from "@/lib/data";

export function Dining() {
  return (
    <section
      id="dining"
      className="section-padding bg-muted/30"
      aria-labelledby="dining-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Local Flavours"
          title="Taste the Salzkammergut"
          description="A selection of restaurants and cafés from the official Altmuenster gastronomy directory — 25 venues across the municipality."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DINING.map((spot, i) => (
            <SectionReveal key={spot.id} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="image-hover-zoom relative h-44">
                  <Image
                    src={spot.image}
                    alt={spot.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start gap-2">
                    <UtensilsCrossed
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {spot.cuisine}
                      </p>
                      <h3 className="font-serif text-lg font-semibold leading-tight">
                        {spot.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {spot.description}
                  </p>
                  <p className="mt-3 flex items-start gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {spot.address}
                  </p>
                  {spot.phone && (
                    <a
                      href={`tel:${spot.phone.replace(/\s/g, "")}`}
                      className="mt-2 flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      {spot.phone}
                    </a>
                  )}
                  <a
                    href={spot.website ?? spot.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    {spot.website ? "Visit website" : "Official listing"}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <a
              href={OFFICIAL_LINKS.gastronomy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Browse all 25 restaurants & cafés
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}