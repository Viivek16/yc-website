import { Hero } from "@/components/Hero";
import { NumbersTicker } from "@/components/NumbersTicker";
import { ServicesBento } from "@/components/ServicesBento";
import { GlobalPresence } from "@/components/GlobalPresence";
import { NewsInsights } from "@/components/NewsInsights";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black relative">
      <div className="relative z-10 w-full flex flex-col items-start align-left text-left">
        <Hero />
        <NumbersTicker />
        <ServicesBento />
        <GlobalPresence />
        <NewsInsights />
        <Footer />
      </div>
    </main>
  );
}
