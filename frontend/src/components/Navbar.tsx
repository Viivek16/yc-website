"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHoveringServices, setIsHoveringServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Scroll down -> hide
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // Scroll up -> show
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center justify-between w-full bg-transparent px-8 py-6 transition-all duration-300">
        
        {/* Brand */}
        <Link href="/" className="font-gilmer font-bold text-white text-xl tracking-tighter">
          YELLOW<span className="text-[#FCD000]">CAPITAL</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-metro text-sm font-semibold tracking-wide text-white">
          <Link href="/" className="hover:text-[#FCD000] transition-colors">Home</Link>
          
          {/* Dropdown Container */}
          <div 
            className="relative h-full flex items-center cursor-pointer"
            onMouseEnter={() => setIsHoveringServices(true)}
            onMouseLeave={() => setIsHoveringServices(false)}
          >
            <span className="flex items-center gap-1 hover:text-[#FCD000] transition-colors py-2">
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isHoveringServices ? 'rotate-180 text-[#FCD000]' : ''}`} />
            </span>
            
            <AnimatePresence>
              {isHoveringServices && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-10 left-[-20%] w-64 bg-[#0a0a0a] border border-[#333333] shadow-2xl rounded-none flex flex-col p-2"
                >
                  <Link href="/market-making" className="px-4 py-3 hover:bg-[#1a1a1a] hover:text-[#FCD000] transition-colors border-b border-[#333333]/50">Market Making</Link>
                  <Link href="#" className="px-4 py-3 hover:bg-[#1a1a1a] hover:text-[#FCD000] transition-colors border-b border-[#333333]/50">Treasury Building</Link>
                  <Link href="#" className="px-4 py-3 hover:bg-[#1a1a1a] hover:text-[#FCD000] transition-colors border-b border-[#333333]/50">Programmatic Sales</Link>
                  <Link href="#" className="px-4 py-3 hover:bg-[#1a1a1a] hover:text-[#FCD000] transition-colors">Venture Investment & Advisory</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="#" className="hover:text-[#FCD000] transition-colors">About Us</Link>
          <Link href="#" className="hover:text-[#FCD000] transition-colors">Contact</Link>
        </div>

      </div>
    </motion.nav>
  );
}
