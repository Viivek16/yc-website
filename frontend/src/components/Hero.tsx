"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SequenceBackground } from "./SequenceBackground";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black selection:bg-[#FCD000] selection:text-black">
      {/* Layer 0: Background Engine (which contains canvas set to z-0) */}
      <SequenceBackground />

      {/* Layer 1: The Dark Overlay (Scrim) */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Layer 2: The Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full text-left">
        <div className="w-full max-w-4xl">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-tight text-white font-gilmer font-bold text-balance"
          >
            Institutional Liquidity.
            <br />
            <span className="text-[#FCD000] italic pr-2 drop-shadow-[0_0_15px_rgba(252,208,0,0.5)]"> Algorithmic Precision.</span>
            <br />
            Strategic Capital.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mt-8 mb-12 max-w-2xl text-lg sm:text-xl text-[#999999] font-metro font-medium leading-relaxed text-balance text-left"
          >
            We architect market-neutral liquidity, advanced token distribution, and venture support to engineer sustainable market health for the world’s leading Web3 projects.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-6 text-left"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
