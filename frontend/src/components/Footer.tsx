"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-element",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power3.out",
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
    <footer ref={containerRef} className="bg-[#000000] pt-32 pb-12 overflow-hidden border-t border-[#333333]">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col items-start text-left w-full">
        
        {/* Main Structured Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 w-full mb-32">
          
          {/* Left Side: Headline, Body, CTA */}
          <div className="lg:col-span-6 flex flex-col items-start align-left relative">
            <h2 className="footer-element text-5xl sm:text-6xl font-gilmer font-bold text-white leading-tight mb-8 max-w-lg tracking-tighter">
              Scale Your Token's <span className="text-[#FCD000] italic pr-1">Liquidity</span> and Market Health.
            </h2>
            <p className="footer-element text-xl text-[#999999] font-metro leading-relaxed mb-12 max-w-md border-l border-[#333333] pl-6 transition-colors duration-500 hover:border-[#FCD000]">
              Partner with Yellow Capital to access institutional-grade market making, programmatic treasury management, and strategic venture advisory.
            </p>
            
            <button className="footer-element group relative flex h-14 items-center justify-between rounded-none bg-[#FCD000] pl-8 pr-2 transition-all duration-500 hover:bg-[#F8C200] active:scale-[0.98]">
              <span className="font-gilmer text-base font-bold tracking-wide text-black mr-6 uppercase">
                Get in Touch
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-none bg-black/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-black/20">
                <ArrowUpRight className="h-5 w-5 text-black" />
              </div>
            </button>
          </div>

          <div className="lg:col-span-1 hidden lg:block" />

          {/* Right Side: Sitemap Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-12 font-metro pt-4">
            
            <div className="footer-element flex flex-col items-start">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 border-b border-[#333333]/50 pb-4 w-full text-left bg-black">Services</h4>
              <ul className="flex flex-col gap-5 text-[#999999] text-sm items-start">
                <li><a href="#" className="hover:text-[#FCD000] transition-colors duration-300">Market Making</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors duration-300">OTC Trading</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors duration-300">Venture Capital</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors duration-300">Treasury Management</a></li>
              </ul>
            </div>

            <div className="footer-element flex flex-col items-start">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 border-b border-[#333333]/50 pb-4 w-full text-left bg-black">Company</h4>
              <ul className="flex flex-col gap-5 text-[#999999] text-sm items-start">
                <li><a href="#" className="hover:text-[#FCD000] transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors duration-300">Portfolio</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors duration-300">Insights & News</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors duration-300">Careers</a></li>
              </ul>
            </div>

            <div className="footer-element flex flex-col items-start">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 border-b border-[#333333]/50 pb-4 w-full text-left bg-black">Connect</h4>
              <ul className="flex flex-col gap-5 text-[#999999] text-sm items-start">
                <li><a href="#" className="hover:text-[#FCD000] transition-colors duration-300">Twitter (X)</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors duration-300">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#FCD000] transition-colors duration-300">Telegram</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Banner */}
        <div className="footer-element w-full pt-8 border-t border-[#333333]/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[#666666] text-xs font-metro tracking-wide">
          <p>© {new Date().getFullYear()} Yellow Capital. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
