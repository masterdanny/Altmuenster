"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    const id = href.replace("#", "");
    return activeSection === id;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          isScrolled ? "glass-nav shadow-sm" : "bg-transparent"
        )}
      >
        <nav
          className="container-wide flex h-[4.5rem] items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <Link
            href="#hero"
            className="group flex items-center gap-2.5"
            aria-label="Altmuenster am Traunsee — Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Mountain className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div className="hidden sm:block">
              <span
                className={cn(
                  "font-serif text-lg font-semibold tracking-tight transition-colors",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                Altmuenster
              </span>
              <span
                className={cn(
                  "block text-[10px] uppercase tracking-[0.15em] transition-colors",
                  isScrolled ? "text-muted-foreground" : "text-white/70"
                )}
              >
                am Traunsee
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white",
                  isActive(link.href) &&
                    (isScrolled ? "text-primary" : "text-white")
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-accent"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.altmuenster.at"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden text-xs font-medium uppercase tracking-wider transition-colors md:block",
                isScrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/60 hover:text-white"
              )}
            >
              DE
            </a>
            <ThemeToggle
              className={cn(
                !isScrolled && "text-white hover:text-white hover:bg-white/10"
              )}
            />
            <Button variant="gold" size="sm" className="hidden sm:inline-flex" asChild>
              <a
                href="https://www.altmuenster.at"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Site
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn("lg:hidden", !isScrolled && "text-white hover:text-white hover:bg-white/10")}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl font-semibold">
                  Altmuenster
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-muted",
                        isActive(link.href) && "bg-muted text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto space-y-3">
                <a
                  href="https://www.altmuenster.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-muted-foreground"
                >
                  Official German site →
                </a>
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <a
                    href="https://www.altmuenster.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    Official Site
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}