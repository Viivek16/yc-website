"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Database, Coins, Layers, LineChart } from "lucide-react";

export function ServicesBento() {
  const cards = [
    {
      title: "Market Making",
      icon: <BarChart3 className="w-10 h-10 text-white group-hover:text-[#FCD000] transition-colors duration-300 mb-8" />,
      desc: "Proprietary execution algorithms ensuring tight spreads, deep liquidity, and resilient order books across 50+ centralized and decentralized exchanges.",
      colSpan: "md:col-span-2",
    },
    {
      title: "Treasury Management",
      icon: <Database className="w-10 h-10 text-white group-hover:text-[#FCD000] transition-colors duration-300 mb-8" />,
      desc: "Scientific modeling for sustainable token economies and professional treasury management.",
      colSpan: "md:col-span-1",
    },
    {
      title: "Programmatic Sales",
      icon: <LineChart className="w-10 h-10 text-white group-hover:text-[#FCD000] transition-colors duration-300 mb-8" />,
      desc: "Zero-impact execution for institutional size orders. Engineered liquidation strategies without price suppression.",
      colSpan: "md:col-span-1",
    },
    {
      title: "TradePoint",
      icon: <Layers className="w-10 h-10 text-white group-hover:text-[#FCD000] transition-colors duration-300 mb-8" />,
      desc: "Our exclusive institutional-grade trading infrastructure, enabling direct market access and real-time analytics.",
      colSpan: "md:col-span-1",
    },
    {
      title: "VC & Strategic Partnership",
      icon: <Coins className="w-10 h-10 text-white group-hover:text-[#FCD000] transition-colors duration-300 mb-8" />,
      desc: "Early-stage capital and long-term advisory for transformative Web3 infrastructure and consumer applications.",
      colSpan: "md:col-span-1",
    }
  ];

  return (
    <section className="relative w-full bg-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        <div className="mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-gilmer font-bold text-white mb-6"
          >
            Engineering Liquidity. <br/>
            <span className="text-[#999999]">Propelling Web3.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#999999] font-metro"
          >
            A comprehensive suite of institutional services designed to optimize market health, ensure deep liquidity, and support visionary founders.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`${card.colSpan} relative overflow-hidden rounded-none bg-[#050505] border border-[#333333] p-8 sm:p-10 group cursor-pointer hover:bg-[#111111] transition-all duration-300`}
            >
              {/* Highlight Hover Bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#FCD000] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />
              
              <div className="absolute top-0 right-0 p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 text-[#FCD000] transition-all duration-300">
                <ArrowUpRight className="w-8 h-8" />
              </div>
              
              {card.icon}
              
              <h3 className="text-xl sm:text-2xl font-gilmer font-bold text-white mb-4">
                {card.title}
              </h3>
              <p className="text-[#999999] font-metro text-base sm:text-lg max-w-md">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
