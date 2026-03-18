"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioProjects, portfolioCategories } from "@/lib/data/portfolio";
import ProjectCard from "./ProjectCard";

const PortfolioGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = portfolioProjects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 border ${
                activeFilter === cat
                  ? "bg-[#b1ff32] text-black border-[#b1ff32] shadow-[0_0_30px_rgba(177,255,50,0.2)]"
                  : "bg-white/5 text-gray-400 border-white/5 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 font-bold uppercase tracking-widest">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
