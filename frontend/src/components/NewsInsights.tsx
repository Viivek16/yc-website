"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function NewsInsights() {
  const news = [
    { title: "YC Leads $5M Round for DeFi Protocol", date: "Oct 12, 2025", desc: "Yellow Capital has led the strategic financing round to bolster on-chain orderbook efficiency." },
    { title: "Market Maker of the Year at Token2049", date: "Sep 28, 2025", desc: "Recognized for providing deep liquidity across top-tier asset classes during peak volatility." },
    { title: "TradePoint Infrastructure V2 Launch", date: "Aug 04, 2025", desc: "Our proprietary execution layers have been upgraded to support sub-millisecond latencies across 50 markets." },
    { title: "Strategic Partnership with L2 Foundation", date: "Jun 19, 2025", desc: "Committing $50M in liquidity provisions to ensure smooth bootstrapping of upcoming L2 ecosystem tokens." },
  ];

  return (
    <section className="relative bg-[#020202] py-32 border-t border-[#333333] overflow-hidden">
      {/* Background Social Proof Collage */}
      <div className="absolute inset-0 z-0 opacity-20 grayscale pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f4ecdf0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen mask-image-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" style={{ WebkitMaskImage: 'radial-gradient(circle at right, black, transparent 80%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start align-left text-left w-full">
        
        <div className="flex w-full justify-between items-end mb-16 border-b border-[#333333] pb-6 flex-wrap gap-4">
          <h2 className="text-4xl md:text-5xl font-gilmer font-bold text-white text-left max-w-lg">
            Institutional Recognition.
          </h2>
          <a href="#" className="text-[#FCD000] font-metro text-lg font-medium flex items-center hover:underline group">
            All Insights <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full">
          {news.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-start text-left group cursor-pointer"
            >
              <div className="flex w-full items-center justify-between mb-4">
                 <span className="text-[#666666] font-metro text-sm tracking-widest uppercase">{item.date}</span>
                 <ArrowUpRight className="w-5 h-5 text-[#333333] group-hover:text-[#FCD000] transition-colors" />
              </div>
              
              <h3 className="text-2xl font-gilmer font-semibold text-white group-hover:text-[#FCD000] transition-colors duration-300 mb-4 max-w-lg">
                {item.title}
              </h3>
              <p className="text-[#999999] font-metro text-lg max-w-md">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
