"use client";

import { Mountain, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { useLocale } from "@/context/locale-context";
import { OFFICIAL_CONTACT, OFFICIAL_LINKS, SOCIAL_LINKS } from "@/lib/data";

export function Footer() {
  const { t } = useLocale();

  const navLinks = useMemo(
    () => [
      { href: "#welcome", label: t.nav.welcome },
      { href: "#history", label: t.nav.history },
      { href: "#map", label: t.nav.map },
      { href: "#whats-on", label: t.nav.whatsOn },
    ],
    [t]
  );

  return (
    <footer
      className="border-t border-border/60 bg-primary text-primary-foreground"
      role="contentinfo"
    >
      <div className="container-wide section-padding !py-10 sm:!py-16">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Mountain className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-serif text-xl font-semibold">Altmünster</p>
                <p className="text-xs uppercase tracking-[0.15em] text-white/60">
                  am Traunsee
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {t.footer.tagline}{" "}
              <a
                href={OFFICIAL_CONTACT.website}
                className="underline underline-offset-2 hover:text-white"
              >
                altmuenster.at
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              {t.footer.explore}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              {t.footer.municipality}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <address className="not-italic">
                  {OFFICIAL_CONTACT.address}
                  <br />
                  {OFFICIAL_CONTACT.postalCode} {OFFICIAL_CONTACT.locality}
                  <br />
                  {t.common.country}
                </address>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${OFFICIAL_CONTACT.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {OFFICIAL_CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${OFFICIAL_CONTACT.email}`}
                  className="transition-colors hover:text-white"
                >
                  {OFFICIAL_CONTACT.email}
                </a>
              </li>
            </ul>
            <a
              href={OFFICIAL_LINKS.openingHours}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-white/60 transition-colors hover:text-white"
            >
              {t.common.openingHours}
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              {t.common.officialSite}
            </h3>
            <a
              href={OFFICIAL_CONTACT.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              altmuenster.at
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-accent"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:mt-12 sm:gap-4 sm:pt-8 sm:text-left sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {OFFICIAL_CONTACT.name}. {t.footer.copyright}
          </p>
          <p className="text-xs text-white/40">{t.common.regionLine}</p>
        </div>
      </div>
    </footer>
  );
}