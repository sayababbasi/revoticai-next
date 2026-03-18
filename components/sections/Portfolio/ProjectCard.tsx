"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.a
      href={project.link}
      className="group relative bg-neutral-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:border-[#b1ff32]/30 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      layout
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => (e.currentTarget.src = "https://placehold.co/800x600/111/b1ff32?text=Revotic+Project")}
        />
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-[#b1ff32] text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-[#b1ff32] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed font-medium mb-8 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-[10px] font-black uppercase tracking-widest text-gray-500 border border-white/5 px-3 py-1 rounded-full group-hover:border-[#b1ff32]/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-white group-hover:text-[#b1ff32] transition-colors">
            View Case Study
          </span>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-[#b1ff32] group-hover:text-black transition-all duration-500">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
