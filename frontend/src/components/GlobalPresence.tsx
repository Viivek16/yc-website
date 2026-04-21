"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function GlobalPresence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a smooth horizontal scroll effect anchored to standard vertical scrolling
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current?.scrollWidth || 0) + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (trackRef.current?.scrollWidth || 0)
        }
      });
      
      gsap.fromTo(
        ".presence-text",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            once: true
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050505] py-32 relative overflow-hidden h-[120vh] flex flex-col justify-center">
      
      {/* Strict left-aligned header wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-16 flex flex-col items-start align-left">
        <div className="presence-text mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black py-1 px-3">
            <span className="text-[10px] font-metro uppercase tracking-[0.2em] text-[#999999] font-semibold">
              Global Scale
            </span>
        </div>
        <h2 className="presence-text text-5xl md:text-6xl font-gilmer font-bold text-white mb-6 text-left tracking-tight">
          Global Presence
        </h2>
        <p className="presence-text text-xl sm:text-2xl text-[#666666] font-metro max-w-2xl text-left leading-relaxed">
          Our global teams attend the most prestigious summits, building deep connectivity worldwide.
        </p>
      </div>

      {/* Horizontal Track of large format images */}
      <div className="w-full overflow-hidden">
        <div ref={trackRef} className="flex flex-row gap-8 pl-6 md:pl-12 w-max">
          
          <div className="w-[85vw] md:w-[65vw] h-[55vh] bg-[#111] border border-white/10 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-sm">
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop')" }} />
             <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
             <div className="absolute bottom-12 left-12 text-left flex flex-col items-start">
               <h3 className="text-4xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">Token2049 Singapore</h3>
               <span className="border border-[#FCD000]/50 text-[#FCD000] bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium">Panel Keynote</span>
             </div>
          </div>

          <div className="w-[70vw] md:w-[45vw] h-[55vh] bg-[#1a1a1a] border border-white/10 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-sm">
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2000&auto=format&fit=crop')" }} />
             <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
             <div className="absolute bottom-12 left-12 text-left flex flex-col items-start">
               <h3 className="text-4xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">EthCC Paris</h3>
               <span className="border border-white/30 text-white bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium">Networking</span>
             </div>
          </div>

          <div className="w-[80vw] md:w-[55vw] h-[55vh] bg-[#222] border border-white/10 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer rounded-sm">
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2000&auto=format&fit=crop')" }} />
             <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
             <div className="absolute bottom-12 left-12 text-left flex flex-col items-start">
               <h3 className="text-4xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">Consensus Austin</h3>
               <span className="border border-[#FCD000]/50 text-[#FCD000] bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium">Lead Sponsor</span>
             </div>
          </div>

          <div className="w-[85vw] md:w-[65vw] h-[55vh] bg-[#1f1f1f] border border-white/10 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.32,0.72,0,1)] relative overflow-hidden group cursor-pointer pr-12 rounded-sm mr-12">
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582653291997-079a4a75ab1c?q=80&w=2000&auto=format&fit=crop')" }} />
             <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
             <div className="absolute bottom-12 left-12 text-left flex flex-col items-start">
               <h3 className="text-4xl font-gilmer text-white font-bold mb-3 tracking-tight group-hover:text-[#FCD000] transition-colors duration-500">Dubai FinTech</h3>
               <span className="border border-white/30 text-white bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-widest font-metro font-medium">Strategic Meetup</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
