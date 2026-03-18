import React from "react";
import { CaseStudy } from "@/lib/data/caseStudies";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, index }) => {
  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 hover:border-[#b1ff32]/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
      {/* Top Image Section */}
      <div className="relative h-64 overflow-hidden bg-white/5 border-b border-white/5">
        <img
          src={study.image || `https://source.unsplash.com/random/800x600?tech,${index}`}
          alt={study.client}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/800x600/111/444?text=Project";
          }}
        />
        {/* Result Metric Floating Badge */}
        <div className="absolute top-4 right-4 bg-[#b1ff32] text-black px-4 py-2 rounded-full font-black text-sm uppercase tracking-wider shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {study.mainResult}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col">
        {/* Industry/Service Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-[#b1ff32] bg-[#b1ff32]/10 px-3 py-1 rounded-full border border-[#b1ff32]/20">
            {study.industry}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
            {study.service}
          </span>
        </div>

        <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter mb-4 group-hover:text-[#b1ff32] transition-colors">
          {study.client}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
          {study.problem}
        </p>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-8">
          {study.techStack.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded">
              {tech}
            </span>
          ))}
          {study.techStack.length > 3 && (
            <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest px-2 py-1">
              +{study.techStack.length - 3} MORE
            </span>
          )}
        </div>

        {/* Action Link */}
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <span className="text-sm font-black text-white uppercase tracking-widest group-hover:text-[#b1ff32] transition-colors">
            View Protocol
          </span>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#b1ff32] transition-colors">
            <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
          </div>
        </div>
      </div>
      
      {/* Full Card Link Wrapper */}
      <a href={`/case-studies/${study.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Read case study for {study.client}</span>
      </a>
    </div>
  );
};

export default CaseStudyCard;
