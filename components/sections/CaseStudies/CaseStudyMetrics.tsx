"use client";

import React from "react";
import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/data/caseStudies";

interface CaseStudyMetricsProps {
  study: CaseStudy;
}

const CaseStudyMetrics: React.FC<CaseStudyMetricsProps> = ({ study }) => {
  return (
    <section className="bg-[#050505] py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {study.results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-[#0a0a0a] p-10 rounded-3xl border border-white/5 relative group hover:border-[#b1ff32]/30 transition-colors"
            >
              {/* Subtle grid bg */}
              <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-5xl md:text-6xl font-black text-[#b1ff32] mb-4 tracking-tighter group-hover:scale-105 transform origin-left transition-transform duration-500">
                  {result.value}
                </h3>
                <p className="text-sm md:text-base text-white uppercase font-bold tracking-widest">
                  {result.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMetrics;
