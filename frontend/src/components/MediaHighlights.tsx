"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";

export function MediaHighlights() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const accordions = [
    { title: "YC Leads $5M Round for DeFi Protocol", date: "Oct 12, 2025", desc: "Yellow Capital has led the strategic financing round to bolster on-chain orderbook efficiency." },
    { title: "Market Maker of the Year at Token2049", date: "Sep 28, 2025", desc: "Recognized for providing deep liquidity across top-tier asset classes during peak volatility." },
    { title: "TradePoint Infrastructure V2 Launch", date: "Aug 04, 2025", desc: "Our proprietary execution layers have been upgraded to support sub-millisecond latencies across 50 markets." },
    { title: "Strategic Partnership with L2 Foundation", date: "Jun 19, 2025", desc: "Committing $50M in liquidity provisions to ensure smooth bootstrapping of upcoming L2 ecosystem tokens." },
  ];

  return (
    <section className="bg-black py-24 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Zone A: Masonry Image Grid */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-gilmer font-bold text-white mb-4">Global Presence</h2>
            <div className="columns-2 gap-4 space-y-4">
              {/* Dummy divs representing images with grayscale hover effect */}
              <div className="w-full h-48 bg-[#1a1a1a] border border-[#333333] transition-all duration-500 hover:border-[#FCD000] grayscale hover:grayscale-0 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-metro font-medium opacity-0 group-hover:opacity-100 transition-opacity">Token2049 Singapore</span>
                </div>
              </div>
              <div className="w-full h-64 bg-[#222] border border-[#333333] transition-all duration-500 hover:border-[#FCD000] grayscale hover:grayscale-0 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-metro font-medium opacity-0 group-hover:opacity-100 transition-opacity">Consensus Austin</span>
                </div>
              </div>
              <div className="w-full h-56 bg-[#1f1f1f] border border-[#333333] transition-all duration-500 hover:border-[#FCD000] grayscale hover:grayscale-0 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-metro font-medium opacity-0 group-hover:opacity-100 transition-opacity">Dubai FinTech</span>
                </div>
              </div>
              <div className="w-full h-40 bg-[#151515] border border-[#333333] transition-all duration-500 hover:border-[#FCD000] grayscale hover:grayscale-0 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-metro font-medium opacity-0 group-hover:opacity-100 transition-opacity">EthCC Paris</span>
                </div>
              </div>
            </div>
          </div>

          {/* Zone B: Sleek Vertical Accordion */}
          <div className="flex flex-col">
            <div className="flex justify-between items-end mb-8 border-b border-[#333333] pb-4">
              <h2 className="text-3xl font-gilmer font-bold text-white">News & Insights</h2>
              <a href="#" className="text-[#FCD000] font-metro text-sm font-medium flex items-center hover:underline">View All <ArrowRight className="w-4 h-4 ml-1" /></a>
            </div>

            <div className="flex flex-col border-t border-transparent">
              {accordions.map((item, idx) => (
                <div 
                  key={idx} 
                  className="border-b border-[#333333] py-6 cursor-pointer group"
                  onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col">
                      <span className="text-[#666666] font-metro text-xs tracking-wider uppercase mb-2">{item.date}</span>
                      <h3 className={`text-xl font-gilmer font-semibold transition-colors duration-300 ${openAccordion === idx ? 'text-[#FCD000]' : 'text-white group-hover:text-white/80'}`}>
                        {item.title}
                      </h3>
                    </div>
                    <div className="mt-1 text-[#666666] group-hover:text-white transition-colors duration-300">
                      {openAccordion === idx ? <Minus className="w-5 h-5 text-[#FCD000]" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>
                  
                  {/* Accordion Content */}
                  <motion.div 
                    initial={false}
                    animate={{ height: openAccordion === idx ? 'auto' : 0, opacity: openAccordion === idx ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-[#999999] font-metro text-base">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
