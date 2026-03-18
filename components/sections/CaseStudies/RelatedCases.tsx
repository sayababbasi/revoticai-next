"use client";

import React from "react";
import { CaseStudy, caseStudies } from "@/lib/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

interface RelatedCasesProps {
  currentSlug: string;
}

const RelatedCases: React.FC<RelatedCasesProps> = ({ currentSlug }) => {
  // Simple logic to get 2 other case studies
  const related = caseStudies.filter(cs => cs.slug !== currentSlug).slice(0, 2);

  if (related.length === 0) return null;

  return (
    <section className="bg-[#050505] py-24 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.5em] font-black text-white mb-6">
            More <span className="text-[#b1ff32]">Protocols</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Similar Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {related.map((study, idx) => (
            <CaseStudyCard key={study.id} study={study} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCases;
