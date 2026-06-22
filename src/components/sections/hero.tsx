"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/locale-context";
import { useMediaQuery } from "@/hooks/use-media-query";

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
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-[calc(4.5rem+env(safe-area-inset-top,0px))]"
      aria-label="Hero"
    >
      <motion.div
        style={enableParallax ? { y } : undefined}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          alt={t.hero.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" />
      </motion.div>

      <motion.div
        style={enableParallax ? { opacity } : undefined}
        className="relative z-10 container-wide px-4 pb-16 text-center sm:px-6 sm:pb-8 lg:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/80 sm:mb-4 sm:text-sm sm:tracking-[0.3em]"
        >
          {t.hero.region}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-4xl font-light tracking-tight text-white xs:text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Altmünster
          <span className="block text-2xl font-normal italic text-white/90 sm:text-4xl md:text-5xl">
            am Traunsee
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg md:text-xl"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mx-auto mt-6 grid max-w-md grid-cols-1 gap-2 sm:mt-8 sm:max-w-3xl sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3"
        >
          {t.hero.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md sm:py-2"
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
          className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4"
        >
          <Button variant="gold" size="lg" className="h-12 w-full sm:w-auto" asChild>
            <a href="#welcome">{t.hero.explore}</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 w-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto"
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
        className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 z-10 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-white sm:block"
        aria-label={t.hero.scrollDown}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.a>
    </section>
  );
}