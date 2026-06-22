"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/locale-context";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  HERO_IMAGE,
  HERO_IMAGE_MOBILE,
  HERO_IMAGE_MOBILE_POSITION,
  HERO_IMAGE_POSITION,
} from "@/lib/data";

export function Hero() {
  const { t } = useLocale();
  const enableParallax = useMediaQuery(
    "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
  );
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden md:flex md:min-h-[100dvh] md:items-center md:justify-center md:pt-[calc(4.5rem+env(safe-area-inset-top,0px))]"
      aria-label="Hero"
    >
      {/* Mobile: portrait frame — no full-screen landscape crop */}
      <div className="md:hidden">
        <div className="hero-mobile-bleed relative">
          <div className="hero-mobile-ambient" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE_MOBILE}
              alt=""
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-50 blur-3xl"
              style={{ objectPosition: HERO_IMAGE_MOBILE_POSITION }}
            />
          </div>

          <div className="hero-mobile-photo relative mx-auto overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE_MOBILE}
              alt=""
              fetchPriority="high"
              decoding="async"
              draggable={false}
              className="h-full w-full object-cover"
              style={{ objectPosition: HERO_IMAGE_MOBILE_POSITION }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/15" />
          </div>
        </div>

        <div className="px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent"
          >
            {t.hero.region}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
          >
            <h1 className="mt-2 font-serif text-[2.35rem] font-light leading-[1.05] tracking-tight text-foreground">
              Altmünster
            </h1>
            <p className="mt-1 font-serif text-xl italic text-muted-foreground">
              am Traunsee
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.a
            href="#welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary"
            aria-label={t.hero.scrollDown}
          >
            <span>{t.hero.explore}</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-4 w-4" strokeWidth={2} />
            </motion.span>
          </motion.a>
        </div>
      </div>

      {/* Desktop: full-bleed landscape hero */}
      <motion.div
        style={enableParallax ? { y } : undefined}
        className="absolute inset-0 hidden md:block"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt=""
          fetchPriority="high"
          decoding="async"
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
          style={{
            objectFit: "cover",
            objectPosition: HERO_IMAGE_POSITION,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" />
      </motion.div>

      <motion.div
        style={enableParallax ? { opacity } : undefined}
        className="relative z-10 hidden container-wide px-4 pb-16 text-center md:block sm:px-6 sm:pb-8 lg:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80"
        >
          {t.hero.region}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-6xl font-light tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Altmünster
          <span className="block text-4xl font-normal italic text-white/90 md:text-5xl">
            am Traunsee
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3"
        >
          {t.hero.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
            >
              <span className="font-serif text-sm font-semibold text-white">
                {fact.value}
              </span>
              <span className="ml-2 text-xs text-white/70">{fact.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Button variant="gold" size="lg" asChild>
            <a href="#welcome">{t.hero.explore}</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            asChild
          >
            <a href="#history">{t.hero.history}</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#welcome"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 z-10 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-white md:block"
        aria-label={t.hero.scrollDown}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.a>

      <span className="sr-only md:hidden">{t.hero.imageAlt}</span>
      <span className="sr-only hidden md:inline">{t.hero.imageAltDesktop}</span>
    </section>
  );
}