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
    <section className="bg-gray-50 py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-1 border border-gray-200 rounded-full text-[10px] uppercase tracking-[0.5em] font-black text-black mb-6 shadow-sm bg-white">
            More <span className="text-[#82c125]">Protocols</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter">
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
