"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const metrics = [
  { value: "140+", label: "Centralized Exchanges" },
  { value: "100+", label: "Web3 Projects Supported" },
  { value: "7+ Yrs", label: "Market Experience" },
  { value: "24/7", label: "Programmatic Execution" },
];

export function NumbersTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium cascading entry
      gsap.fromTo(
        ".metric-item",
        { opacity: 0, x: -30, filter: "blur(5px)" },
        { 
          opacity: 1, 
          x: 0, 
          filter: "blur(0px)",
          duration: 1.2, 
          stagger: 0.15, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full border-b border-white/[0.05] bg-[#020202] py-24 sm:py-32 overflow-hidden">
      
      {/* Strict left-aligned reading container */}
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 relative z-10 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 w-full border-t border-[#333333]/50 pt-16 relative">
          
          {/* subtle scanning highlight */}
          <div className="absolute top-0 left-0 h-[1px] w-64 bg-gradient-to-r from-transparent via-[#FCD000] to-transparent animate-[pan_3s_linear_infinite]" style={{ animation: "pan 4s linear infinite" }} />
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes pan {
              0% { transform: translateX(-100%); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateX(100vh); opacity: 0; }
            }
          `}} />

          {metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="metric-item flex flex-col items-start border-l border-[#333333]/30 pl-6 group transition-all duration-500 hover:border-[#FCD000]/50"
            >
              <h3 className="text-5xl sm:text-6xl font-gilmer font-bold text-white mb-2 tracking-tighter transition-colors duration-500 group-hover:text-[#FCD000]">
                {metric.value}
              </h3>
              <p className="text-[#666666] font-metro font-semibold text-xs sm:text-sm uppercase tracking-[0.15em] leading-relaxed max-w-[150px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
