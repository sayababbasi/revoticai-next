"use client";

import React from "react";
import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/data/caseStudies";
import { Cpu, Target, Wrench } from "lucide-react";

interface CaseStudyContentProps {
  study: CaseStudy;
}

const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ study }) => {
  return (
    <section className="bg-black py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start"
          >
            <div className="flex items-center gap-4 text-[#b1ff32]">
              <Target className="w-8 h-8" />
              <h2 className="text-2xl font-black uppercase tracking-widest">The Challenge</h2>
            </div>
            <div className="text-lg text-gray-400 leading-relaxed font-medium">
              <p>{study.problem}</p>
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start"
          >
            <div className="flex items-center gap-4 text-[#b1ff32]">
              <Wrench className="w-8 h-8" />
              <h2 className="text-2xl font-black uppercase tracking-widest">The Solution</h2>
            </div>
            <div className="text-lg text-gray-300 leading-relaxed font-medium">
              <p>{study.solution}</p>
            </div>
          </motion.div>

          {/* The Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start p-12 bg-[#0a0a0a] rounded-3xl border border-white/5"
          >
            <div className="flex items-center gap-4 text-white">
              <Cpu className="w-8 h-8" />
              <h2 className="text-2xl font-black uppercase tracking-widest">Architecture</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {study.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:border-[#b1ff32] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudyContent;
