"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { GALLERY_IMAGES, OFFICIAL_LINKS, YOUTUBE_VIDEO_ID } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImage =
    lightboxIndex !== null ? GALLERY_IMAGES[lightboxIndex] : null;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goTo = useCallback(
    (direction: 1 | -1) => {
      if (lightboxIndex === null) return;
      const next =
        (lightboxIndex + direction + GALLERY_IMAGES.length) %
        GALLERY_IMAGES.length;
      setLightboxIndex(next);
    },
    [lightboxIndex]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "ArrowLeft") goTo(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, goTo]);

  return (
    <section
      id="gallery"
      className="section-padding bg-muted/30"
      aria-labelledby="gallery-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Aerial Views"
          title="See It From Above"
          description="Soar over Traunsee and discover Altmünster from above — or check the live Gmundnerberg panorama camera from the municipality."
        />

        <div className="mb-6 flex justify-center">
          <Button variant="outline" asChild>
            <a
              href={OFFICIAL_LINKS.panorama}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Live panorama — Gmundnerberg camera
            </a>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionReveal>
            <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                title="Drone video of Altmünster am Traunsee and Lake Traunsee"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Play className="h-4 w-4 text-accent" aria-hidden="true" />
              Drone footage over Lake Traunsee & the Salzkammergut
            </p>
          </SectionReveal>

          <div className="grid auto-rows-[140px] grid-cols-3 gap-3 sm:auto-rows-[160px]">
            {GALLERY_IMAGES.map((img, i) => (
              <SectionReveal key={img.id} delay={i * 0.06}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openLightbox(i)}
                  className={cn(
                    "group relative h-full w-full overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    img.span
                  )}
                  aria-label={`View full image: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                </motion.button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
            role="dialog"
            aria-label="Image lightbox"
            aria-modal="true"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </motion.button>
            <p className="absolute top-7 left-1/2 -translate-x-1/2 text-xs text-white/50">
              ← → to navigate · Esc to close
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src.replace("w=600", "w=1200").replace("w=800", "w=1600")}
                alt={lightboxImage.alt}
                width={1600}
                height={1000}
                className="h-auto max-h-[85vh] w-auto object-contain"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm text-white/90">
                {lightboxImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}