"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";

// -------------------------------
//  PROJECT DATA
// -------------------------------
const projects = [
  {
    id: 1,
    title: "AI Chat Automation",
    category: "AI",
    description: "Custom AI chatbot trained on business data to automate support.",
    tech: ["Next.js", "Python", "OpenAI API"],
    image:
      "https://images.unsplash.com/photo-1676299081847-34a2c1f70f45?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    category: "Web Apps",
    description:
      "A real-time analytics dashboard for online store performance tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1581093588401-22db0b36e5cc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Smart Image Recognition",
    category: "AI",
    description:
      "An ML-based image classification system for product tagging automation.",
    tech: ["TensorFlow", "Flask", "React"],
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6b5c8de7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "UI/UX Re-Design for FinTech",
    category: "UI/UX",
    description:
      "Modernized interface for a finance startup to enhance user engagement.",
    tech: ["Figma", "Tailwind CSS", "Next.js"],
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Corporate Branding Suite",
    category: "Branding",
    description:
      "Comprehensive branding and visual identity for a SaaS company.",
    tech: ["Illustrator", "Photoshop"],
    image:
      "https://images.unsplash.com/photo-1590608897129-79da98d1590d?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "AI", "Web Apps", "UI/UX", "Branding"];

// -------------------------------
//  COMPONENT
// -------------------------------
const ProjectsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
          {/* {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#b1ff32] text-black"
                  : "bg-transparent border border-gray-700 text-gray-300 hover:text-white hover:border-[#b1ff32]"
              }`}
            >
              {cat}
            </Button>
          ))} */}
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
                className="group relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-[#b1ff32]/50 shadow-lg hover:shadow-[#b1ff32]/10"
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
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-[#b1ff32]">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-sm font-semibold text-[#b1ff32] hover:underline">
                    View Case Study →
                  </button>
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
