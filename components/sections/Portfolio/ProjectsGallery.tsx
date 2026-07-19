"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { portfolioProjects, portfolioCategories } from "@/lib/data/portfolio";

// -------------------------------
//  COMPONENT
// -------------------------------
const ProjectsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Our Recent Projects
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest work across AI, full-stack development, and design.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                activeCategory === cat
                  ? "bg-[#b1ff32] text-black"
                  : "bg-transparent border border-gray-700 text-gray-300 hover:text-white hover:border-[#b1ff32]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-[#b1ff32]/50 shadow-lg hover:shadow-[#b1ff32]/10 flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://placehold.co/800x600/1a1a1a/b1ff32?text=Project+Image")
                    }
                  />
                </div>
                <div className="p-5 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-[#b1ff32]">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={project.link} 
                    className="text-sm font-semibold text-[#b1ff32] hover:underline mt-4"
                  >
                    View Case Study &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
