"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  mobileDescription?: string;
  align?: "center" | "left";
  className?: string;
  compactMobile?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  mobileDescription,
  align = "center",
  className,
  compactMobile = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        compactMobile ? "mb-8 max-w-3xl sm:mb-14" : "mb-10 max-w-3xl sm:mb-14",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent",
            compactMobile && "hidden sm:block"
          )}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "font-serif font-light tracking-tight text-foreground",
          compactMobile
            ? "text-2xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-5xl lg:text-6xl"
        )}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "mt-4 h-px w-12 bg-accent sm:mt-5 sm:w-16",
          align === "center" && "mx-auto"
        )}
      />
      {compactMobile && mobileDescription && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-sm leading-relaxed text-muted-foreground sm:hidden"
        >
          {mobileDescription}
        </motion.p>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={cn(
            "mt-4 leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg",
            compactMobile ? "hidden text-base sm:block" : "text-base"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}