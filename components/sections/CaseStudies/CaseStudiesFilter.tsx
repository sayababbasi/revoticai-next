import React from "react";
import { Filter } from "lucide-react";

interface CaseStudiesFilterProps {
  industries: string[];
  services: string[];
  activeIndustry: string;
  activeService: string;
  onIndustryChange: (ind: string) => void;
  onServiceChange: (svc: string) => void;
}

const CaseStudiesFilter: React.FC<CaseStudiesFilterProps> = ({
  industries,
  services,
  activeIndustry,
  activeService,
  onIndustryChange,
  onServiceChange
}) => {
  return (
    <div className="w-full bg-[#050505] border-y border-white/5 py-6 mb-16 sticky top-0 z-40 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-gray-500">
            <Filter className="w-4 h-4" />
            <span className="text-xs uppercase font-black tracking-[0.2em]">Filter Protocols</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            {/* Industry Filter */}
            <select 
              className="w-full sm:w-auto appearance-none bg-[#0a0a0a] border border-white/10 text-white text-xs uppercase font-bold tracking-widest px-6 py-3 rounded-full outline-none focus:border-[#b1ff32] cursor-pointer"
              value={activeIndustry}
              onChange={(e) => onIndustryChange(e.target.value)}
            >
              <option value="All">All Industries</option>
              {industries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>

            {/* Service Filter */}
            <select 
              className="w-full sm:w-auto appearance-none bg-[#0a0a0a] border border-white/10 text-white text-xs uppercase font-bold tracking-widest px-6 py-3 rounded-full outline-none focus:border-[#b1ff32] cursor-pointer"
              value={activeService}
              onChange={(e) => onServiceChange(e.target.value)}
            >
              <option value="All">All Services</option>
              {services.map(svc => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesFilter;
