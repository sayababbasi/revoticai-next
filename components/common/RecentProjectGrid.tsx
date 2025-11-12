"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Animation variants for smooth staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Demo project thumbnails (replace with your images)
const projectImages = [
  { src: "/images/product/app-dev-13.png", alt: "UI Layout Exploration" },
  { src: "/images/product/app-dev-8.webp", alt: "Mobile App Screens" },
  { src: "/images/product/dashboard images.webp", alt: "Finance Dashboard Design" },
  { src: "/images/product/hhuiu.webp", alt: "Analytics Admin UI" },
  { src: "/images/product/travel-website.jpg", alt: "Travel App Interface" },
  { src: "/images/product/web-dev-2.webp", alt: "Ecommerce Platform Redesign" },
];

const RecentProjectsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* --- Left Hero Card --- */}
          <motion.div
            className="bg-[#0B0E2D] text-white rounded-3xl p-10 flex flex-col justify-between shadow-xl"
            variants={itemVariants}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 leading-snug">
                Our Unique and <br /> Recent Projects
              </h2>
              <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                We transform innovative ideas into intelligent, scalable
                solutions — from web and mobile to full-stack and AI systems.
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="/contact"
                className="px-5 py-2 bg-white text-[#0B0E2D] font-semibold rounded-full hover:bg-gray-200 transition"
              >
                Contact Us
              </a>
              <a
                href="/portfolio"
                className="flex items-center gap-2 px-5 py-2 border border-gray-400 rounded-full hover:bg-gray-800 transition"
              >
                Explore <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* --- Right Project Grid --- */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {projectImages.map((project, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition"
                variants={itemVariants}
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/600x400/1a1a1a/b1ff32?text=AI+Project")
                  }
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white text-sm font-medium">{project.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjectsSection;
