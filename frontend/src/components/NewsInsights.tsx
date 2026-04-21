"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function NewsInsights() {
  const containerRef = useRef<HTMLDivElement>(null);

  const news = [
    { title: "YC Leads $5M Round for DeFi Protocol", date: "Oct 12, 2025", desc: "Yellow Capital has led the strategic financing round to bolster on-chain orderbook efficiency." },
    { title: "Market Maker of the Year at Token2049", date: "Sep 28, 2025", desc: "Recognized for providing deep liquidity across top-tier asset classes during peak volatility." },
    { title: "TradePoint Infrastructure V2 Launch", date: "Aug 04, 2025", desc: "Our proprietary execution layers have been upgraded to support sub-millisecond latencies across 50 markets." },
    { title: "Strategic Partnership with L2 Foundation", date: "Jun 19, 2025", desc: "Committing $50M in liquidity provisions to ensure smooth bootstrapping of upcoming L2 ecosystem tokens." },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".news-item",
        { opacity: 0, y: 30, filter: "blur(5px)" },
        { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          duration: 1.2, 
          stagger: 0.1, 
          ease: "power3.out",
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
    <section ref={containerRef} className="relative bg-[#020202] py-32 border-t border-[#333333] overflow-hidden">
      {/* Background Social Proof Collage */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f4ecdf0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen mask-image-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" style={{ WebkitMaskImage: 'radial-gradient(circle at right, black, transparent 80%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start align-left text-left w-full">
        
        <div className="flex w-full justify-between items-end mb-20 border-b border-[#333333]/50 pb-6 flex-wrap gap-4">
          <div className="flex flex-col items-start">
             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 px-3">
                <span className="text-[10px] font-metro uppercase tracking-[0.2em] text-[#FCD000] font-semibold">
                  Press & Releases
                </span>
             </div>
             <h2 className="news-item text-4xl md:text-6xl font-gilmer font-bold text-white text-left max-w-lg tracking-tight">
               Institutional Recognition.
             </h2>
          </div>
          
          <button className="news-item group relative flex h-12 items-center justify-between rounded-none border border-[#333333] bg-black/40 pl-6 pr-1 backdrop-blur-md transition-all duration-500 hover:bg-[#111] hover:border-[#666666] active:scale-[0.98]">
             <span className="font-gilmer text-sm font-bold tracking-wide text-white mr-4 transition-colors group-hover:text-[#FCD000]">
               All Insights
             </span>
             <div className="flex h-10 w-10 items-center justify-center rounded-none bg-white/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-white/10">
               <ArrowRight className="h-4 w-4 text-white opacity-50 group-hover:opacity-100 group-hover:text-[#FCD000] group-hover:translate-x-1 transition-all" />
             </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 w-full">
          {news.map((item, idx) => (
            <div 
              key={idx} 
              className="news-item flex flex-col items-start text-left group cursor-pointer"
            >
              <div className="flex w-full items-center justify-between mb-6 border-b border-[#333333] pb-4 transition-colors duration-500 group-hover:border-[#FCD000]/50">
                 <span className="text-[#666666] font-metro text-xs tracking-[0.2em] uppercase">{item.date}</span>
                 <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-black/50 transition-all duration-500 group-hover:scale-110 group-hover:border-[#FCD000]/30">
                    <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-[#FCD000] transition-colors" />
                 </div>
              </div>
              
              <h3 className="text-3xl font-gilmer font-bold text-white group-hover:text-[#FCD000] transition-colors duration-300 mb-4 max-w-lg tracking-tight">
                {item.title}
              </h3>
              <p className="text-[#999999] font-metro text-lg max-w-md leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
