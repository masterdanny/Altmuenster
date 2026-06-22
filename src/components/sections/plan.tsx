"use client";

import {
  Bed,
  Car,
  CalendarDays,
  ExternalLink,
  Mail,
  MapPin,
  ParkingCircle,
  Phone,
  Train,
  Plane,
  UtensilsCrossed,
} from "lucide-react";
import {
  OFFICIAL_CONTACT,
  OFFICIAL_LINKS,
} from "@/lib/data";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";

const OFFICIAL_RESOURCES = [
  { label: "Accommodation (11 listings)", href: OFFICIAL_LINKS.accommodations },
  { label: "Restaurants & cafés (25 venues)", href: OFFICIAL_LINKS.gastronomy },
  { label: "Sights & attractions", href: OFFICIAL_LINKS.sights },
  { label: "Live Gmundnerberg panorama", href: OFFICIAL_LINKS.panorama },
  { label: "Event calendar", href: OFFICIAL_LINKS.events },
  { label: "Town hall opening hours", href: OFFICIAL_LINKS.openingHours },
] as const;

export function Plan() {
  return (
    <section
      id="plan"
      className="section-padding bg-muted/30"
      aria-labelledby="plan-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Practical Info"
          title="Plan Your Visit"
          description="Getting here, where to find official listings, and how to reach the municipality."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <SectionReveal className="md:col-span-2">
            <article className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Train className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-semibold">How to Get Here</h3>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <div className="flex gap-3">
                  <Train className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-foreground">By Train</p>
                    <p>
                      ÖBB from Vienna (~2.5h) and Linz (~45min) to
                      Altmuenster/Woerth. Change at Attnang-Puchheim for
                      international routes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Car className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-foreground">By Car</p>
                    <p>
                      A1 to Vöcklabruck, then B145 to Altmuenster. Gmunden is 15
                      min; Bad Ischl 30 min.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Plane className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-foreground">Nearest Airports</p>
                    <p>Linz (45 min), Salzburg (1.5h), Vienna (2.5h).</p>
                  </div>
                </div>
              </div>
            </article>
          </SectionReveal>

          <SectionReveal>
            <article className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <CalendarDays className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Best Time</h3>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">Summer:</strong> Swimming,
                  boating, festivals.
                </p>
                <p>
                  <strong className="text-foreground">Spring & Autumn:</strong>{" "}
                  Hiking and cycling, fewer crowds.
                </p>
                <p>
                  <strong className="text-foreground">Winter:</strong> Quiet lake
                  views and Advent markets.
                </p>
              </div>
            </article>
          </SectionReveal>

          <SectionReveal>
            <article className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <ParkingCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Parking</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Fees and zones on the official municipality site.</p>
                <a
                  href={OFFICIAL_LINKS.parking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                >
                  Parking info
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href="https://altmuenster.arivo.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-semibold text-primary hover:underline"
                >
                  Arivo parking app →
                </a>
              </div>
            </article>
          </SectionReveal>

          <SectionReveal className="md:col-span-2">
            <article className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Bed className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-semibold">
                  Official Listings
                </h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Hotels, restaurants, and sights are maintained by the
                municipality at altmuenster.at.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {OFFICIAL_RESOURCES.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-primary transition-colors hover:bg-muted"
                    >
                      {item.label.includes("Restaurant") ? (
                        <UtensilsCrossed className="h-4 w-4 shrink-0" aria-hidden="true" />
                      ) : (
                        <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                      )}
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </SectionReveal>

          <SectionReveal className="md:col-span-3">
            <article className="rounded-2xl border border-border/60 bg-primary p-8 text-primary-foreground shadow-sm">
              <h3 className="font-serif text-2xl font-semibold">
                Questions? Contact the municipality
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-white/75">
                For bookings, permits, and official information, reach the
                Marktgemeinde Altmuenster directly.
              </p>
              <ul className="mt-6 flex flex-wrap gap-6 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                  {OFFICIAL_CONTACT.address}, {OFFICIAL_CONTACT.postalCode}{" "}
                  {OFFICIAL_CONTACT.locality}
                </li>
                <li>
                  <a
                    href={`tel:${OFFICIAL_CONTACT.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 transition-opacity hover:opacity-80"
                  >
                    <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                    {OFFICIAL_CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${OFFICIAL_CONTACT.email}`}
                    className="flex items-center gap-2 transition-opacity hover:opacity-80"
                  >
                    <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                    {OFFICIAL_CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_CONTACT.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-accent transition-opacity hover:opacity-80"
                  >
                    altmuenster.at
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </article>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}