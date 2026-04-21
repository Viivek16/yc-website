"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { SequenceBackground } from "./SequenceBackground";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered upward fade-in
      gsap.from(".hero-element", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden selection:bg-[#FCD000] selection:text-black">
      {/* Background Engine - Restoring dynamic video overlay style */}
      <SequenceBackground />

      {/* Alternatively, if you prefer true HTML5 video:
       <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" src="/background.mp4" />
      */}
       
      {/* Layer 1: The Dark Overlay (Scrim) */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Layer 2: The strictly left-aligned Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full text-left">
        <div className="w-full max-w-4xl flex flex-col items-start">
          {/* Main Headline */}
          <h1 className="hero-element text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-tight text-white font-gilmer font-bold text-left text-balance">
            Institutional Liquidity.
            <br />
            <span className="text-[#FCD000] italic pr-2 drop-shadow-[0_0_15px_rgba(252,208,0,0.5)]"> Algorithmic Precision.</span>
            <br />
            Strategic Capital.
          </h1>

          {/* Sub-headline */}
          <p className="hero-element mt-8 mb-12 max-w-2xl text-lg sm:text-xl text-[#999999] font-metro font-medium leading-relaxed text-balance text-left">
            We architect market-neutral liquidity, advanced token distribution, and venture support to engineer sustainable market health for the world’s leading Web3 projects.
          </p>

          {/* CTAs */}
          <div className="hero-element flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-6 text-left">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-[#FCD000] text-black hover:bg-[#F8C200] font-gilmer font-semibold tracking-wide text-base min-w-[200px] h-14 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(252,208,0,0.4)]"
            >
              <span className="relative z-10 w-full text-center">Partner With Us</span>
            </Button>

            <Button 
              variant="outline"
              size="lg" 
              className="group font-gilmer font-semibold tracking-wide text-base text-white border-[#666666] bg-black/40 hover:bg-[#333333] hover:text-white min-w-[200px] h-14 rounded-full transition-all duration-300 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
            >
              <span className="w-full text-center">Explore Our Solutions</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
