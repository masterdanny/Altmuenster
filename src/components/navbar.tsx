"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLocale } from "@/context/locale-context";
import { useActiveSection } from "@/hooks/use-active-section";
import { OFFICIAL_CONTACT } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  const navLinks = useMemo(
    () => [
      { href: "#welcome", label: t.nav.welcome },
      { href: "#history", label: t.nav.history },
      { href: "#map", label: t.nav.map },
      { href: "#whats-on", label: t.nav.whatsOn },
    ],
    [t]
  );

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

  const onHero = activeSection === "hero" && !isScrolled;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500 safe-top",
          isScrolled
            ? "glass-nav shadow-sm"
            : onHero
              ? "max-md:bg-transparent max-md:backdrop-blur-none md:bg-black/20 md:backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
              : "bg-black/20 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
        )}
      >
        <nav
          className="container-wide flex h-14 min-h-[3.5rem] items-center justify-between gap-2 px-3 sm:h-[4.5rem] sm:px-6 lg:px-8"
          aria-label={t.nav.main}
        >
          <Link
            href="#hero"
            className={cn(
              "group flex items-center gap-2.5",
              onHero && "max-md:opacity-100"
            )}
            aria-label={t.common.homeAria}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Mountain className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div className="block min-w-0">
              <span
                className={cn(
                  "font-serif text-base font-semibold tracking-tight transition-colors sm:text-lg",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                Altmünster
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
            {navLinks.map((link) => (
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

          <div
            className={cn(
              "flex shrink-0 items-center gap-1 sm:gap-2",
              onHero && "max-md:ml-auto"
            )}
          >
            <LanguageToggle
              scrolled={isScrolled}
              className="hidden xs:flex max-md:hidden"
            />
            <ThemeToggle
              className={cn(
                onHero && "max-md:hidden",
                !isScrolled && "text-white hover:text-white hover:bg-white/10"
              )}
            />
            <Button variant="gold" size="sm" className="hidden sm:inline-flex" asChild>
              <a
                href={OFFICIAL_CONTACT.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.common.officialSite}
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "touch-target lg:hidden",
                !isScrolled && "text-white hover:text-white hover:bg-white/10"
              )}
              onClick={() => setMobileOpen(true)}
              aria-label={t.nav.openMenu}
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
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl safe-top safe-bottom lg:hidden"
          >
            <div className="flex h-full flex-col p-4 pt-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl font-semibold">
                  Altmünster
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="touch-target"
                  onClick={() => setMobileOpen(false)}
                  aria-label={t.nav.closeMenu}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-6">
                <LanguageToggle scrolled />
              </div>
              <nav className="mt-8 flex flex-col gap-2" aria-label={t.nav.mobile}>
                {navLinks.map((link, i) => (
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
                        "block min-h-12 rounded-xl px-4 py-3.5 text-lg font-medium transition-colors hover:bg-muted active:bg-muted",
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
                  href={OFFICIAL_CONTACT.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-muted-foreground"
                >
                  {t.common.officialSiteShort}
                </a>
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <a
                    href={OFFICIAL_CONTACT.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t.common.officialSite}
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