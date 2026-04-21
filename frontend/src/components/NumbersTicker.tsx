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
      gsap.fromTo(".metric-item", 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full border-y border-[#333333] bg-black py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#020202] pointer-events-none" />
      
      {/* Strict left-aligned reading container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-start justify-start text-left">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full">
          {metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="metric-item flex flex-col items-start text-left"
            >
              <h3 className="text-4xl sm:text-5xl font-gilmer font-bold text-white mb-3 tracking-tight">
                {metric.value}
              </h3>
              <p className="text-[#999999] font-metro font-medium text-sm sm:text-base uppercase tracking-widest block">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
