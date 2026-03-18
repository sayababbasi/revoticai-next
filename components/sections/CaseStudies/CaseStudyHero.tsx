"use client";

import React from "react";
import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/data/caseStudies";

interface CaseStudyHeroProps {
  study: CaseStudy;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ study }) => {
  return (
    <section className="relative bg-black pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* Background glow & image integration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        <div className="absolute inset-0 bg-black/80 z-10" />
        {study.image && (
          <img 
            src={study.image} 
            alt={study.client} 
            className="w-full h-full object-cover opacity-30 grayscale filter mix-blend-overlay"
          />
        )}
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Metadata Tags */}
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="text-xs uppercase font-black tracking-[0.2em] text-[#b1ff32]">
              Client: <span className="text-white">{study.client}</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs uppercase font-black tracking-[0.2em] text-[#b1ff32]">
              Industry: <span className="text-white">{study.industry}</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs uppercase font-black tracking-[0.2em] text-[#b1ff32]">
              Service: <span className="text-white">{study.service}</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
            Solving <span className="text-[#b1ff32]">{study.industry}</span> Operations with <br /> {study.service}
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl">
            {study.problem}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
