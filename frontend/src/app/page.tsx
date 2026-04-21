import { Hero } from "@/components/Hero";
import { NumbersTicker } from "@/components/NumbersTicker";
import { ServicesBento } from "@/components/ServicesBento";
import { MediaHighlights } from "@/components/MediaHighlights";
import { Footer } from "@/components/Footer";
import { OrbitalBackground } from "@/components/OrbitalBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black relative">
      <OrbitalBackground />
      <div className="relative z-10">
        <Hero />
        <NumbersTicker />
        <ServicesBento />
        <MediaHighlights />
        <Footer />
      </div>
    </main>
  );
}
