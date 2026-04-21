"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TerminalBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animate a sleek, glowing crypto chart path
  const chartPath = "M 0 400 Q 100 380 200 450 T 400 350 T 600 200 T 800 280 T 1000 150 T 1200 100 T 1400 250 T 1600 50 L 1600 800 L 0 800 Z";
  const strokePath = "M 0 400 Q 100 380 200 450 T 400 350 T 600 200 T 800 280 T 1000 150 T 1200 100 T 1400 250 T 1600 50";

  return (
    <div className="absolute inset-0 z-0 bg-[#000000] pointer-events-none overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/80 to-black/90 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(252,208,0,0.05)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />
      
      {/* Chart SVG */}
      {mounted && (
        <svg
          viewBox="0 0 1600 800"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FCD000" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FCD000" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Fill Area with Gradient */}
          <motion.path
            d={chartPath}
            fill="url(#chartGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Animated Stroke Line */}
          <motion.path
            d={strokePath}
            fill="none"
            stroke="#FCD000"
            strokeWidth="3"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      )}

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 mask-image-[linear-gradient(to_bottom,transparent,black,transparent)]" style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)' }}></div>
    </div>
  );
}
