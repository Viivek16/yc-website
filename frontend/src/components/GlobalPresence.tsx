"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function GlobalPresence() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bento-presence",
        { opacity: 0, y: 40, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1, 
          stagger: 0.15, 
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
    <section ref={containerRef} className="bg-[#050505] py-32 relative overflow-hidden">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 mb-16 flex flex-col items-start align-left">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black py-1 px-3">
          <span className="text-[10px] font-metro uppercase tracking-[0.2em] text-[#999999] font-semibold">
            Global Scale
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-gilmer font-bold text-white mb-6 text-left tracking-tight">
          Global Presence
        </h2>
        <p className="text-xl sm:text-2xl text-[#666666] font-metro max-w-2xl text-left leading-relaxed">
          Our global teams attend the most prestigious summits, building deep connectivity worldwide.
        </p>
      </div>

      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[350px] gap-6">
          
          <div className="bento-presence md:col-span-7 bg-[#111] border border-white/10 p-1.5 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-none">
             <div className="absolute inset-1.5 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0a0a0a] overflow-hidden">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop')" }} />
               <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
               <div className="absolute bottom-10 left-10 text-left flex flex-col items-start z-10">
                 <h3 className="text-3xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">Token2049 Singapore</h3>
                 <span className="border border-[#FCD000]/50 text-[#FCD000] bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium">Panel Keynote</span>
               </div>
             </div>
          </div>

          <div className="bento-presence md:col-span-5 bg-[#1a1a1a] border border-white/10 p-1.5 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-none">
            <div className="absolute inset-1.5 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0a0a0a] overflow-hidden">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2000&auto=format&fit=crop')" }} />
               <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
               <div className="absolute bottom-10 left-10 text-left flex flex-col items-start z-10">
                 <h3 className="text-3xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">EthCC Paris</h3>
                 <span className="border border-white/30 text-white bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium">Networking</span>
               </div>
            </div>
          </div>

          <div className="bento-presence md:col-span-5 bg-[#222] border border-white/10 p-1.5 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-none">
             <div className="absolute inset-1.5 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0a0a0a] overflow-hidden">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2000&auto=format&fit=crop')" }} />
               <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
               <div className="absolute bottom-10 left-10 text-left flex flex-col items-start z-10">
                 <h3 className="text-3xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">Consensus Austin</h3>
                 <span className="border border-[#FCD000]/50 text-[#FCD000] bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium">Lead Sponsor</span>
               </div>
             </div>
          </div>

          <div className="bento-presence md:col-span-7 bg-[#1f1f1f] border border-white/10 p-1.5 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-none">
             <div className="absolute inset-1.5 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0a0a0a] overflow-hidden">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582653291997-079a4a75ab1c?q=80&w=2000&auto=format&fit=crop')" }} />
               <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
               <div className="absolute bottom-10 left-10 text-left flex flex-col items-start z-10">
                 <h3 className="text-3xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">Dubai FinTech</h3>
                 <span className="border border-white/30 text-white bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium">Strategic Meetup</span>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
