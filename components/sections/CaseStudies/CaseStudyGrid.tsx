"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudiesFilter from "./CaseStudiesFilter";
import { caseStudies, industries, services } from "@/lib/data/caseStudies";

const CaseStudyGrid: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>("All");
  const [activeService, setActiveService] = useState<string>("All");

  const filteredStudies = caseStudies.filter((study) => {
    const matchesIndustry = activeIndustry === "All" || study.industry === activeIndustry;
    const matchesService = activeService === "All" || study.service === activeService;
    return matchesIndustry && matchesService;
  });

  return (
    <section className="bg-black pb-24 md:pb-40 relative">
      <CaseStudiesFilter 
        industries={industries}
        services={services}
        activeIndustry={activeIndustry}
        activeService={activeService}
        onIndustryChange={setActiveIndustry}
        onServiceChange={setActiveService}
      />

      <div className="container mx-auto px-6">
        {filteredStudies.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          >
            <AnimatePresence>
              {filteredStudies.map((study, idx) => (
                <motion.div
                  key={study.id}
                  layout // This layout prop is essential for smooth sorting/filtering
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <CaseStudyCard study={study} index={idx} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <p className="text-gray-500 font-bold uppercase tracking-widest mb-4">No Protocols Found</p>
            <h3 className="text-2xl font-black text-white">Try adjusting your filters</h3>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyGrid;
