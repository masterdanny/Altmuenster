import { BackToTop } from "@/components/back-to-top";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { Welcome } from "@/components/sections/welcome";
import { History } from "@/components/sections/history";
import { MapSection } from "@/components/sections/map-section";
import { WhatsOn } from "@/components/sections/whats-on";

export default function Home() {
  return (
    <>
      <a
        href="#welcome"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <History />
        <MapSection />
        <WhatsOn />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}