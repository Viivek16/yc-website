import { Hero } from "@/components/Hero";
import { NumbersTicker } from "@/components/NumbersTicker";
import { ServicesBento } from "@/components/ServicesBento";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <NumbersTicker />
      <ServicesBento />
    </main>
  );
}
