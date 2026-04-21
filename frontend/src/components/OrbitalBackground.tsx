"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function OrbitalBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle rotation and scaling as user scrolls down the page
      gsap.to(".orbital-lines", {
        rotate: 45,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      
      // Auto slow rotation
      gsap.to(".orbital-lines-inner", {
        rotate: -360,
        duration: 200,
        repeat: -1,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 bg-black pointer-events-none overflow-hidden flex items-center justify-center">
      {/* Dark overlay to ensure it remains strictly background */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Outer Orbital Lines */}
      <div className="orbital-lines absolute w-[150vw] h-[150vw] sm:w-[100vw] sm:h-[100vw] rounded-full border border-[#333333]/30 flex items-center justify-center opacity-50">
        <div className="absolute w-[80%] h-[80%] rounded-full border border-[#333333]/50 flex items-center justify-center">
          <div className="absolute w-[60%] h-[60%] rounded-full border border-[#333333]/60 flex items-center justify-center">
            <div className="absolute w-[40%] h-[40%] rounded-full border border-[#FCD000]/10 flex items-center justify-center">
              <div className="absolute w-[20%] h-[20%] rounded-full border border-[#FCD000]/20" />
            </div>
          </div>
        </div>
        
        {/* Abstract intersecting lines */}
        <div className="absolute w-full h-[1px] bg-[#333333]/30" />
        <div className="absolute h-full w-[1px] bg-[#333333]/30" />
      </div>

      {/* Inner slow-rotating orbital lines */}
      <div className="orbital-lines-inner absolute w-[100vw] h-[100vw] sm:w-[80vw] sm:h-[80vw] rounded-full border-t border-[#FCD000]/10 flex items-center justify-center opacity-40">
         <div className="absolute w-[70%] h-[70%] rounded-full border-b border-[#FCD000]/20" />
      </div>

    </div>
  );
}
