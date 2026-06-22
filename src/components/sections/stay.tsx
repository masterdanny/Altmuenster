"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { useInquiry } from "@/context/inquiry-context";
import { ACCOMMODATIONS, OFFICIAL_LINKS } from "@/lib/data";

export function Stay() {
  const { openInquiry } = useInquiry();

  return (
    <section
      id="stay"
      className="section-padding bg-background"
      aria-labelledby="stay-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Accommodation"
          title="Where to Stay"
          description="Verified guesthouses, hotels, and pensions listed by the municipality of Altmünster — book directly with each property."
        />

        <div className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-4 snap-x snap-mandatory lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0 xl:grid-cols-4">
          {ACCOMMODATIONS.map((acc, i) => (
            <SectionReveal key={acc.id} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-xl lg:w-auto"
              >
                <div className="image-hover-zoom relative h-48">
                  <Image
                    src={acc.image}
                    alt={acc.imageAlt}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    {acc.type}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-semibold leading-tight">
                    {acc.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {acc.description}
                  </p>
                  <p className="mt-3 flex items-start gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {acc.address}
                  </p>
                  {acc.phone && (
                    <a
                      href={`tel:${acc.phone.replace(/\s/g, "")}`}
                      className="mt-2 flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      {acc.phone}
                    </a>
                  )}
                  <div className="mt-4 flex flex-col gap-2">
                    {acc.website && (
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a
                          href={acc.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          Visit website
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      onClick={() =>
                        openInquiry({
                          message: `I'm interested in ${acc.name} (${acc.address}).`,
                        })
                      }
                    >
                      Ask for help booking
                    </Button>
                  </div>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <a
              href={OFFICIAL_LINKS.accommodations}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View all 11 official listings
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}