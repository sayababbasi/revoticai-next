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
    <section className="bg-white py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start"
          >
            <div className="flex items-center gap-4 text-black">
              <Target className="w-8 h-8 text-[#a1e62c]" />
              <h2 className="text-2xl font-black uppercase tracking-widest">The Challenge</h2>
            </div>
            <div className="text-lg text-gray-600 leading-relaxed font-medium">
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
            <div className="flex items-center gap-4 text-black">
              <Wrench className="w-8 h-8 text-[#a1e62c]" />
              <h2 className="text-2xl font-black uppercase tracking-widest">The Solution</h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed font-medium">
              <p>{study.solution}</p>
            </div>
          </motion.div>

          {/* The Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start p-12 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="flex items-center gap-4 text-black">
              <Cpu className="w-8 h-8 text-[#a1e62c]" />
              <h2 className="text-2xl font-black uppercase tracking-widest">Architecture</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {study.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-black hover:border-black transition-colors shadow-sm"
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
