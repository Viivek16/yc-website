"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Database, Coins, Layers } from "lucide-react";

export function ServicesBento() {
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
          
          {/* Card 1 - Main Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl bg-[#333333]/40 border border-[#666666]/30 p-8 sm:p-10 group cursor-pointer hover:bg-[#333333]/60 transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 text-[#FCD000] transition-all duration-300">
              <ArrowUpRight className="w-8 h-8" />
            </div>
            
            <BarChart3 className="w-10 h-10 text-[#FCD000] mb-8" />
            
            <h3 className="text-2xl sm:text-3xl font-gilmer font-bold text-white mb-4">
              Algorithmic Market Making
            </h3>
            <p className="text-[#999999] font-metro text-lg max-w-md">
              Proprietary execution algorithms ensuring tight spreads, deep liquidity, and resilient order books across 50+ centralized and decentralized exchanges.
            </p>

            {/* Decorative background element */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#FCD000]/5 blur-[100px] rounded-full group-hover:bg-[#FCD000]/10 transition-colors duration-500" />
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-[#333333]/40 border border-[#666666]/30 p-8 sm:p-10 group cursor-pointer hover:bg-[#333333]/60 transition-colors duration-300"
          >
            <Database className="w-10 h-10 text-white group-hover:text-[#FCD000] transition-colors duration-300 mb-8" />
            <h3 className="text-xl sm:text-2xl font-gilmer font-bold text-white mb-4">
              OTC & Block Trading
            </h3>
            <p className="text-[#999999] font-metro">
              Zero-impact execution for institutional size orders. Deep pools of capital with instant pricing capabilities.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-[#333333]/40 border border-[#666666]/30 p-8 sm:p-10 group cursor-pointer hover:bg-[#333333]/60 transition-colors duration-300"
          >
            <Coins className="w-10 h-10 text-white group-hover:text-[#FCD000] transition-colors duration-300 mb-8" />
            <h3 className="text-xl sm:text-2xl font-gilmer font-bold text-white mb-4">
              Strategic Venture
            </h3>
            <p className="text-[#999999] font-metro">
              Early-stage capital and long-term advisory for transformative Web3 infrastructure and consumer applications.
            </p>
          </motion.div>

          {/* Card 4 - Spans 2 cols */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl bg-[#333333]/40 border border-[#666666]/30 p-8 sm:p-10 group cursor-pointer hover:bg-[#333333]/60 transition-colors duration-300 flex flex-col sm:flex-row gap-8 items-start sm:items-center"
          >
            <div className="flex-1">
              <Layers className="w-10 h-10 text-white group-hover:text-[#FCD000] transition-colors duration-300 mb-8" />
              <h3 className="text-2xl sm:text-3xl font-gilmer font-bold text-white mb-4">
                Tokenomics & Treasury
              </h3>
              <p className="text-[#999999] font-metro text-lg max-w-sm">
                Scientific modeling for sustainable token economies and professional treasury management.
              </p>
            </div>
            
            {/* Abstract visual representation on the right */}
            <div className="hidden sm:block w-48 h-48 relative opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 border border-[#666666] rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-[#FCD000]/50 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
              <div className="absolute inset-8 border border-[#666666] rounded-full animate-[spin_5s_linear_infinite]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
