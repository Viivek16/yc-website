"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GlobalPresence() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Y-axis reveal fading up from 30px down
      gsap.fromTo(
        ".presence-header",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      gsap.fromTo(
        ".bento-presence",
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".bento-presence-container",
            start: "top 85%",
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
        <div className="presence-header mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black py-1 px-3">
          <span className="text-[10px] font-metro uppercase tracking-[0.2em] text-[#999999] font-semibold">
            Global Scale
          </span>
        </div>
        <h2 className="presence-header text-5xl md:text-6xl font-gilmer font-bold text-white mb-6 text-left tracking-tight">
          Global Presence
        </h2>
        <p className="presence-header text-xl sm:text-2xl text-[#666666] font-metro max-w-2xl text-left leading-relaxed">
          Our global teams attend the most prestigious summits, building deep connectivity worldwide.
        </p>
      </div>

      <div className="w-full bento-presence-container">
        {/* Horizontally scrollable container with hidden scrollbars */}
        <div className="flex overflow-x-auto gap-6 px-6 md:px-16 lg:px-24 xl:px-32 pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          <div className="bento-presence snap-center w-[85vw] md:w-[600px] h-[450px] bg-[#111] border border-white/10 p-1.5 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-[2rem]">
             <div className="absolute inset-1.5 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0a0a0a] overflow-hidden rounded-[calc(2rem-0.375rem)]">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop')" }} />
               <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
               <div className="absolute bottom-10 left-10 text-left flex flex-col items-start z-10">
                 <h3 className="text-3xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">Token2049 Singapore</h3>
                 <span className="border border-[#FCD000]/50 text-[#FCD000] bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium rounded-full">Panel Keynote</span>
               </div>
             </div>
          </div>

          <div className="bento-presence snap-center w-[85vw] md:w-[500px] h-[450px] bg-[#1a1a1a] border border-white/10 p-1.5 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-[2rem]">
            <div className="absolute inset-1.5 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0a0a0a] overflow-hidden rounded-[calc(2rem-0.375rem)]">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2000&auto=format&fit=crop')" }} />
               <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
               <div className="absolute bottom-10 left-10 text-left flex flex-col items-start z-10">
                 <h3 className="text-3xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">EthCC Paris</h3>
                 <span className="border border-white/30 text-white bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium rounded-full">Networking</span>
               </div>
            </div>
          </div>

          <div className="bento-presence snap-center w-[85vw] md:w-[500px] h-[450px] bg-[#222] border border-white/10 p-1.5 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-[2rem]">
             <div className="absolute inset-1.5 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0a0a0a] overflow-hidden rounded-[calc(2rem-0.375rem)]">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2000&auto=format&fit=crop')" }} />
               <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
               <div className="absolute bottom-10 left-10 text-left flex flex-col items-start z-10">
                 <h3 className="text-3xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">Consensus Austin</h3>
                 <span className="border border-[#FCD000]/50 text-[#FCD000] bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium rounded-full">Lead Sponsor</span>
               </div>
             </div>
          </div>

          <div className="bento-presence snap-center w-[85vw] md:w-[600px] h-[450px] bg-[#1f1f1f] border border-white/10 p-1.5 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-[2rem]">
             <div className="absolute inset-1.5 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0a0a0a] overflow-hidden rounded-[calc(2rem-0.375rem)]">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582653291997-079a4a75ab1c?q=80&w=2000&auto=format&fit=crop')" }} />
               <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
               <div className="absolute bottom-10 left-10 text-left flex flex-col items-start z-10">
                 <h3 className="text-3xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">Dubai FinTech</h3>
                 <span className="border border-white/30 text-white bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium rounded-full">Strategic Meetup</span>
               </div>
             </div>
          </div>
          
          <div className="bento-presence snap-center w-[85vw] md:w-[500px] h-[450px] bg-[#1a1a1a] border border-white/10 p-1.5 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-[2rem]">
             <div className="absolute inset-1.5 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0a0a0a] overflow-hidden rounded-[calc(2rem-0.375rem)]">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')" }} />
               <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
               <div className="absolute bottom-10 left-10 text-left flex flex-col items-start z-10">
                 <h3 className="text-3xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">Devcon Bogota</h3>
                 <span className="border border-[#FCD000]/50 text-[#FCD000] bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium rounded-full">Liquidity Partner</span>
               </div>
             </div>
          </div>
          
          {/* Spacer for the right side of the scroll */}
          <div className="snap-center w-4 md:w-16 h-[450px] flex-shrink-0 pointer-events-none" />

        </div>
      </div>
      
      {/* Hide scrollbar styles directly */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
