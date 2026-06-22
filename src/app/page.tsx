import { BackToTop } from "@/components/back-to-top";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { SkipLink } from "@/components/skip-link";
import { Hero } from "@/components/sections/hero";
import { Welcome } from "@/components/sections/welcome";
import { History } from "@/components/sections/history";
import { MapSection } from "@/components/sections/map-section";
import { WhatsOn } from "@/components/sections/whats-on";

export default function Home() {
  return (
    <>
      <SkipLink />
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