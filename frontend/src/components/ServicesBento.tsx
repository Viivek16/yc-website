"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, BarChart3, Database, Coins, LineChart } from "lucide-react";

export function ServicesBento() {
  const containerRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: "Market Making",
      icon: <BarChart3 className="w-8 h-8 text-[#999999] group-hover:text-[#FCD000] transition-colors duration-500 mb-10" />,
      desc: "Proprietary execution algorithms ensuring tight spreads, deep liquidity, and resilient order books across 50+ central and decentralized exchanges.",
      colSpan: "md:col-span-2",
    },
    {
      title: "Treasury Management",
      icon: <Database className="w-8 h-8 text-[#999999] group-hover:text-[#FCD000] transition-colors duration-500 mb-10" />,
      desc: "Scientific modeling for sustainable token economies and professional scalable treasury management.",
      colSpan: "md:col-span-1",
    },
    {
      title: "Programmatic Sales",
      icon: <LineChart className="w-8 h-8 text-[#999999] group-hover:text-[#FCD000] transition-colors duration-500 mb-10" />,
      desc: "Zero-impact execution for institutional size orders. Engineered liquidation strategies without price suppression.",
      colSpan: "md:col-span-1",
    },
    {
      title: "VC & Strategic Partnership",
      icon: <Coins className="w-8 h-8 text-[#999999] group-hover:text-[#FCD000] transition-colors duration-500 mb-10" />,
      desc: "Early-stage capital and long-term advisory for transformative Web3 infrastructure and consumer applications. Our network is our moat.",
      colSpan: "md:col-span-2",
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bento-item",
        { opacity: 0, y: 40, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1, 
          stagger: 0.1, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#000000] py-24 sm:py-40">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
        
        <div className="mb-20 max-w-2xl flex flex-col items-start text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 px-3">
            <span className="text-[10px] font-metro uppercase tracking-[0.2em] text-[#FCD000] font-semibold">
              The Architecture
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-gilmer font-bold text-white mb-6 tracking-tight leading-tight">
            Engineering Liquidity. <br/>
            <span className="text-[#666666]">Propelling Web3.</span>
          </h2>
          <p className="text-xl text-[#999999] font-metro max-w-xl leading-relaxed">
            A comprehensive suite of institutional services designed to optimize market health, ensure deep liquidity, and support visionary founders.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[340px] gap-6">
          {cards.map((card, idx) => (
            // Layer 1: Outer Shell (Double-Bezel)
            <div 
              key={idx}
              className={`bento-item ${card.colSpan} p-1.5 rounded-none bg-black ring-1 ring-white/10 group cursor-pointer`}
              onClick={() => {
                if (card.title === "Market Making") {
                  window.location.href = "/market-making";
                }
              }}
            >
              {/* Layer 2: Inner Core */}
              <div className="relative w-full h-full bg-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/5 p-8 sm:p-10 flex flex-col justify-end transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#0a0a0a] overflow-hidden">
                
                {/* Structural highlight */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FCD000]/0 to-transparent group-hover:via-[#FCD000]/50 transition-all duration-700" />
                
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:border-[#FCD000]/50">
                  <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-[#FCD000] transition-colors" />
                </div>
                
                <div className="mt-auto">
                    {card.icon}
                    <h3 className="text-2xl sm:text-3xl font-gilmer font-bold text-white mb-4 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-[#999999] font-metro text-base sm:text-lg max-w-md leading-relaxed">
                      {card.desc}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
