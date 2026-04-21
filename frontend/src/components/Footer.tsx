"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-black pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Massive 60vw Headline */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] leading-[0.9] font-gilmer font-bold text-white tracking-tighter"
          >
            Scale Your Token's <br />
            <span className="text-[#FCD000] italic">Liquidity</span> <span className="text-[#666666]">&</span> Health.
          </motion.h2>
        </div>

        {/* Structured Sitemap */}
        <div className="border-t border-[#333333] pt-16 grid grid-cols-2 md:grid-cols-4 gap-12 font-metro">
          
          <div className="md:col-span-1">
            <h3 className="text-white font-gilmer font-bold text-lg mb-6">Yellow Capital</h3>
            <p className="text-[#666666] text-sm leading-relaxed pr-4">
              Institutional Web3 market making, strategic capital, and algorithmic trading infrastructure for leading digital assets.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-[#999999] text-sm">
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">Market Making</a></li>
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">OTC Trading</a></li>
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">Venture Capital</a></li>
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">Treasury Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-[#999999] text-sm">
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">Insights & News</a></li>
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Connect</h4>
            <ul className="flex flex-col gap-4 text-[#999999] text-sm">
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-[#FCD000] transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-[#333333]/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[#666666] text-xs font-metro">
          <p>© {new Date().getFullYear()} Yellow Capital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
