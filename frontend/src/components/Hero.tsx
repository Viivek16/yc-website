"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import { SequenceBackground } from "./SequenceBackground";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // High-end agency staggered reveal using advanced cubic-bezier approximations
      gsap.fromTo(
        ".hero-element",
        { y: 80, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.4,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.2,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[100dvh] w-full overflow-hidden bg-[#000000] selection:bg-[#FCD000] selection:text-black">
      {/* Layer 0: Sequence Engine */}
      <SequenceBackground />

      {/* Layer 1: The Dark Scrim for Perfect Contrast */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(252,208,0,0.03)_0%,rgba(0,0,0,0)_50%)] z-10 pointer-events-none" />

      {/* Layer 2: Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full text-left pt-24 pb-32">
        
        {/* Eyebrow Label */}
        <div className="hero-element mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 px-3 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-[#FCD000] animate-pulse" />
          <span className="text-[10px] font-metro uppercase tracking-[0.2em] text-[#999999] font-semibold">
            Institutional Liquidity Engine
          </span>
        </div>

        <div className="w-full max-w-4xl flex flex-col items-start relative">
          
          {/* Main Headline */}
          <h1 className="hero-element text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.02] tracking-tighter text-white font-gilmer font-bold text-left text-balance relative">
            Institutional Liquidity.
            <br />
            <span className="text-[#FCD000] italic pr-2"> Algorithmic Precision.</span>
            <br />
            Strategic Capital.
          </h1>

          {/* Sub-headline */}
          <p className="hero-element mt-10 mb-14 max-w-2xl text-lg sm:text-xl text-[#999999] font-metro font-medium leading-[1.6] text-balance text-left border-l border-[#333333] pl-6 transition-colors duration-500 hover:border-[#FCD000]">
            We architect market-neutral liquidity, advanced token distribution, and venture support to engineer sustainable market health for the world’s leading Web3 projects.
          </p>

          {/* Magnetic CTAs */}
          <div className="hero-element flex flex-col sm:flex-row items-center justify-start gap-6 text-left">
            
            {/* Primary Button */}
            <button className="group relative flex h-14 items-center justify-between rounded-none bg-[#FCD000] pl-8 pr-2 transition-all duration-500 hover:bg-[#F8C200] active:scale-[0.98]">
              <span className="font-gilmer text-base font-bold tracking-wide text-black mr-6">
                Partner With Us
              </span>
              {/* Nested Trailing Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-none bg-black/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-black/20">
                <ArrowUpRight className="h-5 w-5 text-black" />
              </div>
            </button>

            {/* Secondary Ghost Button */}
            <button className="group relative flex h-14 items-center justify-between rounded-none border border-[#333333] bg-black/40 pl-8 pr-2 backdrop-blur-md transition-all duration-500 hover:bg-[#111] hover:border-[#666666] active:scale-[0.98]">
              <span className="font-gilmer text-base font-bold tracking-wide text-white mr-6 transition-colors group-hover:text-[#FCD000]">
                Explore Our Solutions
              </span>
              {/* Nested Inner Highlight */}
              <div className="shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/5 flex h-10 w-10 items-center justify-center rounded-none bg-white/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:bg-white/10">
                <ArrowUpRight className="h-4 w-4 text-white opacity-50 group-hover:opacity-100 group-hover:text-[#FCD000]" />
              </div>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
