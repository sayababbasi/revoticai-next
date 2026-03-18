"use client";

import React from "react";
import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/data/caseStudies";

interface CaseStudyQuoteProps {
  quote?: CaseStudy['quote'];
}

const CaseStudyQuote: React.FC<CaseStudyQuoteProps> = ({ quote }) => {
  if (!quote) return null;

  return (
    <section className="bg-black py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <blockquote className="relative bg-[#050505] border border-white/5 rounded-[2.5rem] p-12 md:p-20 text-center">
            {/* Massive decorative quote marks */}
            <span className="absolute top-0 left-8 md:left-12 text-[12rem] font-black text-white/5 leading-none select-none pointer-events-none -translate-y-12">
              "
            </span>
            
            <p className="text-2xl md:text-4xl text-white font-medium italic leading-relaxed mb-12 relative z-10">
              {quote.text}
            </p>
            
            <footer className="relative z-10">
              <div className="w-16 h-1 bg-[#b1ff32] mx-auto mb-6" />
              <cite className="not-italic">
                <div className="text-white font-black text-xl tracking-wide uppercase mb-2">
                  {quote.author}
                </div>
                <div className="text-gray-500 font-bold text-[10px] tracking-[0.2em] uppercase">
                  {quote.role}
                </div>
              </cite>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyQuote;
