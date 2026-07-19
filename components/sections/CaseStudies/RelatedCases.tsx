"use client";

import React, { useMemo } from "react";
import { CaseStudy, caseStudies } from "@/lib/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

interface RelatedCasesProps {
  currentSlug: string;
}

const RelatedCases: React.FC<RelatedCasesProps> = ({ currentSlug }) => {
  const related = useMemo(() => {
    const currentStudy = caseStudies.find(cs => cs.slug === currentSlug);
    if (!currentStudy) return [];

    // Calculate relatedness score for each case study
    const scoredStudies = caseStudies
      .filter(cs => cs.slug !== currentSlug)
      .map(cs => {
        let score = 0;
        if (cs.industry === currentStudy.industry) score += 3;
        if (cs.service === currentStudy.service) score += 2;
        
        // Count matching tech stack items
        const matchingTech = cs.techStack.filter(tech => currentStudy.techStack.includes(tech));
        score += matchingTech.length;

        return { study: cs, score };
      });

    // Sort by score descending and take the top 2
    return scoredStudies
      .sort((a, b) => b.score - a.score)
      .slice(0, 2)
      .map(item => item.study);
  }, [currentSlug]);

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
