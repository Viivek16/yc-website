"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { OrbitalBackground } from "@/components/OrbitalBackground";
import { Footer } from "@/components/Footer";

export default function MarketMakingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.fromTo(
        ".mm-hero",
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.2
        }
      );

      // Fade-ups for sections
      gsap.utils.toArray<HTMLElement>(".scroll-fade").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const faqs = [
    { q: "Do you provide support for new CEX listings?", a: "Yes. Beyond market making, we deploy our algorithmic trading infrastructure to guarantee 99.9% uptime and healthy spreads from second zero." },
    { q: "Are your trading strategies delta-neutral?", a: "We primarily utilize market-neutral execution models designed to minimize exposure to broader market beta while providing deep, resilient books." },
    { q: "What is your typical onboarding timeline?", a: "Depending on exchange API constraints, we typically integrate and commence execution within 5-7 business days of term execution." },
    { q: "Do you offer reporting and transparency?", a: "Clients receive a real-time dashboard tracking volume, spread latency, bid/ask depth, and inventory management metrics." }
  ];

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col bg-black relative">
      <OrbitalBackground />

      <main className="relative z-10 w-full flex flex-col items-start align-left text-left w-full mt-32">
        
        {/* Section 1: Subpage Hero */}
        <section className="w-full px-6 md:px-16 lg:px-24 xl:px-32 pt-24 pb-48 flex flex-col items-start border-b border-[#333333]">
          <div className="mm-hero mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 px-3 backdrop-blur-md">
            <span className="text-[10px] font-metro uppercase tracking-[0.2em] text-[#999999] font-semibold">
              Services // Trade Management
            </span>
          </div>
          <h1 className="mm-hero text-6xl sm:text-7xl md:text-[6rem] font-gilmer font-bold text-white leading-[1.05] tracking-tighter max-w-5xl mb-12">
            Institutional Market Making. <br/>
            <span className="text-[#FCD000] italic pr-2">Aligned Liquidity.</span>
          </h1>
          <p className="mm-hero text-xl sm:text-2xl text-[#999999] font-metro max-w-3xl leading-[1.6] border-l border-[#333333] pl-6 transition-colors duration-500 hover:border-[#FCD000] mb-16">
            We replace hidden price pressure and sudden volatility with a multi-layered liquidity framework engineered for sustainable growth.
          </p>
          <div className="mm-hero flex flex-col sm:flex-row gap-6">
            <button className="group relative flex h-14 items-center justify-between rounded-none bg-[#FCD000] pl-8 pr-2 transition-all duration-500 hover:bg-[#F8C200] active:scale-[0.98]">
              <span className="font-gilmer text-base font-bold tracking-wide text-black mr-6">
                Get in Touch
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-none bg-black/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="h-5 w-5 text-black" />
              </div>
            </button>
            <button className="group relative flex h-14 items-center justify-between rounded-none border border-[#333333] bg-black/40 pl-8 pr-2 backdrop-blur-md transition-all duration-500 hover:bg-[#111] hover:border-[#666666] active:scale-[0.98]">
              <span className="font-gilmer text-base font-bold tracking-wide text-white mr-6 group-hover:text-[#FCD000]">
                Know More
              </span>
            </button>
          </div>
        </section>

        {/* Section 2: The Problem vs The YELLOW Solution */}
        <section className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-32 border-b border-[#333333]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 scroll-fade">
            <div className="flex flex-col items-start border-l-4 border-white/5 pl-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-4xl font-gilmer font-bold text-white mb-6 tracking-tight">The Problem</h2>
              <p className="text-xl text-[#999999] font-metro leading-relaxed">
                The wrong market maker derails projects with panic selling, thin order books, and hidden price pressure.
              </p>
            </div>
            <div className="flex flex-col items-start border-l-4 border-[#FCD000] pl-8">
              <h2 className="text-4xl font-gilmer font-bold text-white mb-6 tracking-tight">The <span className="text-[#FCD000]">YELLOW</span> Solution</h2>
              <p className="text-xl text-white font-metro leading-relaxed mb-8">
                We solve illiquid markets. Our data-driven strategies are designed to create:
              </p>
              <ul className="flex flex-col gap-6 text-[#999999] font-metro text-lg">
                <li className="border-l border-[#333333] pl-4 hover:border-[#FCD000] hover:text-white transition-all duration-300">Deeper order books</li>
                <li className="border-l border-[#333333] pl-4 hover:border-[#FCD000] hover:text-white transition-all duration-300">Significantly tighter spreads</li>
                <li className="border-l border-[#333333] pl-4 hover:border-[#FCD000] hover:text-white transition-all duration-300">Sustainable volume and long-term trust</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Multi-Layered Algorithmic Execution */}
        <section className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-32 bg-[#020202]">
          <div className="scroll-fade flex flex-col items-start mb-16">
            <h2 className="text-5xl font-gilmer font-bold text-white mb-6 tracking-tight">Multi-Layered Algorithmic Execution</h2>
            <p className="text-xl text-[#999999] font-metro max-w-2xl leading-relaxed">
              Instead of a single, rigid strategy, we deploy a full institutional framework across top CEXs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 scroll-fade">
            <div className="md:col-span-2 p-1.5 rounded-none bg-black ring-1 ring-white/10 group cursor-pointer">
               <div className="relative w-full h-full bg-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/5 p-10 flex flex-col justify-start hover:bg-[#0a0a0a] transition-all">
                  <div className="absolute left-0 top-0 w-1 h-0 bg-[#FCD000] group-hover:h-full transition-all duration-500" />
                  <h3 className="text-3xl font-gilmer font-bold text-white mb-4 tracking-tight">Dynamic Adjustment</h3>
                  <p className="text-[#999999] font-metro text-lg leading-relaxed">
                    Our algorithms dynamically adapt to live conditions using volatility-aware spread logic and inventory-based risk management.
                  </p>
               </div>
            </div>
            <div className="md:col-span-3 p-1.5 rounded-none bg-black ring-1 ring-white/10 group cursor-pointer">
               <div className="relative w-full h-full bg-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/5 p-10 flex flex-col justify-start hover:bg-[#0a0a0a] transition-all">
                  <div className="absolute left-0 top-0 w-1 h-0 bg-[#FCD000] group-hover:h-full transition-all duration-500" />
                  <h3 className="text-3xl font-gilmer font-bold text-white mb-4 tracking-tight">Balanced Depth</h3>
                  <p className="text-[#999999] font-metro text-lg leading-relaxed max-w-xl">
                    We strictly maintain balanced buy and sell-side depth to incentivize organic trading activity and drastically reduce slippage.
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* Section 4: Aligned & Flexible Engagements */}
        <section className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-32 bg-[#000000] border-t border-[#333333]">
          <div className="scroll-fade flex flex-col items-start mb-16">
            <h2 className="text-5xl font-gilmer font-bold text-white mb-6 tracking-tight">Aligned & Flexible Engagements</h2>
            <p className="text-xl text-[#999999] font-metro max-w-2xl leading-relaxed">
              Your liquidity goals dictate our structure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-fade">
            <div className="p-1.5 rounded-none bg-black ring-1 ring-white/10 group cursor-pointer">
               <div className="relative w-full h-full bg-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/5 p-10 flex flex-col justify-start hover:bg-[#0a0a0a] transition-all">
                  <div className="absolute left-0 top-0 w-1 h-0 bg-[#FCD000] group-hover:h-full transition-all duration-500" />
                  <h3 className="text-3xl font-gilmer font-bold text-white mb-4 tracking-tight">Define the Objective</h3>
                  <p className="text-[#999999] font-metro text-lg leading-relaxed">
                    Whether you need organic volume growth, market stability, post-listing performance, or treasury optimization.
                  </p>
               </div>
            </div>
            <div className="p-1.5 rounded-none bg-black ring-1 ring-white/10 group cursor-pointer">
               <div className="relative w-full h-full bg-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/5 p-10 flex flex-col justify-start hover:bg-[#0a0a0a] transition-all">
                  <div className="absolute left-0 top-0 w-1 h-0 bg-[#FCD000] group-hover:h-full transition-all duration-500" />
                  <h3 className="text-3xl font-gilmer font-bold text-white mb-4 tracking-tight">Transparent Models</h3>
                  <p className="text-[#999999] font-metro text-lg leading-relaxed">
                    We operate on transparent, flexible structures, offering Retainer, Liquidity Provision & Loan, or customized Hybrid models.
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-32 bg-[#020202] border-t border-[#333333]">
          <div className="scroll-fade max-w-4xl">
            <h2 className="text-5xl font-gilmer font-bold text-white mb-16 tracking-tight">FAQs</h2>
            <div className="flex flex-col border-t border-[#333333]">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col border-b border-[#333333] group cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="py-8 flex justify-between items-center pr-4">
                    <h3 className={`text-2xl font-gilmer font-bold transition-colors duration-300 ${openFaq === idx ? "text-[#FCD000]" : "text-white"}`}>
                      {faq.q}
                    </h3>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${openFaq === idx ? "rotate-180 text-[#FCD000]" : "text-[#666666]"}`} />
                  </div>
                  <div 
                    className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    style={{ maxHeight: openFaq === idx ? "200px" : "0px", opacity: openFaq === idx ? 1 : 0 }}
                  >
                    <p className="pb-8 text-xl text-[#999999] font-metro leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
