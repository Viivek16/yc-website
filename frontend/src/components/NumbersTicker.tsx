"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "$2.5B+", label: "Average Daily Volume" },
  { value: "50+", label: "Ecosystem Partners" },
  { value: "400+", label: "Active Markets" },
  { value: "< 5ms", label: "Execution Latency" },
];

export function NumbersTicker() {
  return (
    <section className="relative w-full border-y border-[#333333]/50 bg-black py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(252,208,0,0.03)_0,rgba(0,0,0,0)_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h3 className="text-4xl sm:text-5xl font-gilmer font-bold text-white mb-3 tracking-tight">
                {metric.value}
              </h3>
              <p className="text-[#999999] font-metro font-medium text-sm sm:text-base uppercase tracking-widest block w-full">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
