"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function NewsInsights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const news = [
    { title: "YC Leads $5M Round for DeFi Protocol", date: "Oct 12, 2025", desc: "Yellow Capital has led the strategic financing round to bolster on-chain orderbook efficiency.", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop" },
    { title: "Market Maker of the Year at Token2049", date: "Sep 28, 2025", desc: "Recognized for providing deep liquidity across top-tier asset classes during peak volatility.", image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=2000&auto=format&fit=crop" },
    { title: "TradePoint Infrastructure V2 Launch", date: "Aug 04, 2025", desc: "Our proprietary execution layers have been upgraded to support sub-millisecond latencies across 50 markets.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" },
    { title: "Strategic Partnership with L2 Foundation", date: "Jun 19, 2025", desc: "Committing $50M in liquidity provisions to ensure smooth bootstrapping of upcoming L2 ecosystem tokens.", image: "https://images.unsplash.com/photo-1639762681485-074b7f4ecdf0?q=80&w=2000&auto=format&fit=crop" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade up from 30px down
      gsap.fromTo(
        ".news-item",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
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
    <section ref={containerRef} className="relative bg-[#020202] py-32 md:py-48 border-t border-white/5 overflow-hidden">
      
      {/* Background Hover Backdrop (Mobile & Subtle Base) */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)]">
        {news.map((item, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 md:hidden ${hoveredIdx === idx ? 'opacity-20' : 'opacity-0'}`}
            style={{ 
              backgroundImage: `url('${item.image}')`,
              filter: 'grayscale(100%)',
              maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'
            }}
          />
        ))}
      </div>

      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start text-left w-full">
        
        {/* Left Side: Editorial Split (Text & List) */}
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-between items-end mb-16 border-b border-white/10 pb-6 flex-wrap gap-4">
            <div className="flex flex-col items-start">
               <div className="news-item mb-4 inline-flex items-center gap-2 rounded-full border border-[#FCD000]/20 bg-[#FCD000]/5 py-1 px-3">
                  <span className="text-[10px] font-metro uppercase tracking-[0.2em] text-[#FCD000] font-semibold">
                    Press & Releases
                  </span>
               </div>
               <h2 className="news-item text-4xl md:text-5xl lg:text-6xl font-gilmer font-bold text-white text-left max-w-lg tracking-tight">
                 Global Recognition.
               </h2>
            </div>
            
            <button className="news-item group relative flex h-14 items-center justify-between rounded-none border border-[#333333] bg-transparent px-8 transition-all duration-500 hover:border-white/40 active:scale-[0.98]">
              <span className="font-gilmer text-sm font-bold tracking-wide text-white mr-6 transition-colors group-hover:text-white">
                All Insights
              </span>
              <ArrowDown className="h-4 w-4 text-white transition-transform duration-500 group-hover:translate-y-1" />
            </button>
          </div>

          <div className="flex flex-col w-full gap-0">
            {news.map((item, idx) => (
              <div 
                key={idx} 
                className="news-item flex flex-col items-start text-left group cursor-pointer border-b border-white/5 py-5 transition-colors duration-500 hover:border-[#FCD000]/50"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="flex w-full items-center justify-between mb-2">
                   <span className="text-[#666666] font-metro text-[10px] tracking-[0.2em] uppercase group-hover:text-[#999] transition-colors">{item.date}</span>
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FCD000] group-hover:border-[#FCD000]">
                      <ArrowUpRight className="w-3 h-3 text-[#999] group-hover:text-black transition-colors" />
                   </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-gilmer font-bold text-white group-hover:text-[#FCD000] transition-colors duration-300 max-w-lg tracking-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Hover-Reveal Split Image */}
        <div className="hidden md:flex w-full sticky top-32 h-[600px] flex-col items-center justify-center relative">
          {news.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full rounded-[2rem] border border-white/10 p-1.5 transition-all duration-[800ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
                hoveredIdx === idx 
                  ? 'opacity-100 scale-100 translate-y-0 rotate-0 filter-none' 
                  : 'opacity-0 scale-95 translate-y-8 rotate-1 grayscale blur-sm pointer-events-none'
              }`}
            >
              <div className="w-full h-full rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/5 overflow-hidden relative bg-[#0a0a0a]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out scale-105"
                  style={{ 
                    backgroundImage: `url('${item.image}')`,
                    filter: 'grayscale(60%) contrast(1.2)'
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),transparent)]" />
              </div>
            </div>
          ))}
          {/* Default State when nothing is hovered */}
          <div className={`absolute inset-0 w-full h-full rounded-[2rem] border border-white/5 flex flex-col items-center justify-center bg-white/[0.02] transition-all duration-700 ${hoveredIdx === null ? 'opacity-100' : 'opacity-0 scale-95 blur-sm'}`}>
             <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4">
                <ArrowUpRight className="w-6 h-6 text-[#333]" />
             </div>
             <p className="font-metro text-[#666] tracking-wide">Hover an insight to preview.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
