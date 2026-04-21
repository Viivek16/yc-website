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
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black py-24 border-t border-[#333333] relative overflow-hidden h-screen flex flex-col justify-center">
      {/* Strict left-aligned header wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12 flex flex-col items-start align-left">
        <h2 className="text-4xl md:text-5xl font-gilmer font-bold text-white mb-4 text-left">Global Presence</h2>
        <p className="text-xl text-[#999999] font-metro max-w-2xl text-left">
          Our global teams attend the most prestigious summits, building deep connectivity worldwide.
        </p>
      </div>

      {/* Horizontal Track of large format images */}
      <div className="w-full overflow-hidden">
        <div ref={trackRef} className="flex flex-row gap-8 pl-6 md:pl-12 w-max">
          
          <div className="w-[80vw] md:w-[60vw] h-[50vh] bg-[#111] border border-[#333333] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700 relative overflow-hidden group cursor-pointer">
             <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
             <div className="absolute bottom-10 left-10 text-left flex flex-col items-start">
               <h3 className="text-3xl font-gilmer text-white font-bold opacity-80 group-hover:opacity-100 mb-2">Token2049 Singapore</h3>
               <span className="bg-[#FCD000] text-black px-3 py-1 text-sm font-metro font-medium">Panel Keynote</span>
             </div>
          </div>

          <div className="w-[60vw] md:w-[40vw] h-[50vh] bg-[#1a1a1a] border border-[#333333] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700 relative overflow-hidden group cursor-pointer">
             <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
             <div className="absolute bottom-10 left-10 text-left flex flex-col items-start">
               <h3 className="text-3xl font-gilmer text-white font-bold opacity-80 group-hover:opacity-100 mb-2">EthCC Paris</h3>
               <span className="bg-[#666666] text-white px-3 py-1 text-sm font-metro font-medium">Networking</span>
             </div>
          </div>

          <div className="w-[70vw] md:w-[50vw] h-[50vh] bg-[#222] border border-[#333333] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700 relative overflow-hidden group cursor-pointer">
             <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
             <div className="absolute bottom-10 left-10 text-left flex flex-col items-start">
               <h3 className="text-3xl font-gilmer text-white font-bold opacity-80 group-hover:opacity-100 mb-2">Consensus Austin</h3>
               <span className="bg-[#FCD000] text-black px-3 py-1 text-sm font-metro font-medium">Lead Sponsor</span>
             </div>
          </div>

          <div className="w-[80vw] md:w-[60vw] h-[50vh] bg-[#1f1f1f] border border-[#333333] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700 relative overflow-hidden group cursor-pointer pr-12">
             <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)_50%,transparent)]" />
             <div className="absolute bottom-10 left-10 text-left flex flex-col items-start">
               <h3 className="text-3xl font-gilmer text-white font-bold opacity-80 group-hover:opacity-100 mb-2">Dubai FinTech</h3>
               <span className="bg-[#666666] text-white px-3 py-1 text-sm font-metro font-medium">Strategic Meetup</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
