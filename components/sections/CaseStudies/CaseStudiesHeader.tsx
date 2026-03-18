"use client";

import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CaseStudiesHeader: React.FC = () => {
  return (
    <section className="bg-black pt-40 pb-20 md:pb-32 relative overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-[#b1ff32]/10 blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#b1ff32]/20 bg-[#b1ff32]/5 text-[#b1ff32] text-[10px] font-black uppercase tracking-[0.5em] mb-10 shadow-[0_0_30px_rgba(177,255,50,0.1)]"
            variants={itemVariants}
          >
            Proof of Impact
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase mb-8"
            variants={itemVariants}
          >
            Engineering <br />
            <span className="text-[#b1ff32]">Real Outcomes</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            We don't build tech for tech's sake. Explore how our custom AI, automation, and engineering architectures have radically transformed business operations across industries.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesHeader;
