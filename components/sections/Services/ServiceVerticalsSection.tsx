

"use client";

import React from "react";
import { motion } from "framer-motion";
// --- UPDATED: Importing title-related icons ---
import { ArrowRight, Code, Lightbulb, Palette, BarChart3 } from 'lucide-react';

// --- Inlined SVG Icons (to prevent build errors) ---

// Inlined Arrow for "VIEW MORE" (This one is correct)
const ViewMoreArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path
      d="M1 8H15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 3L15 8L10 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- REMOVED TargetCheckIcon ---


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Sub-Component for the right-side blocks ---
interface ServiceBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ icon, title, description, href, delay = 0 }) => (
  <motion.div
    className="flex items-start md:items-start p-2"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={itemVariants}
    transition={{ delay: delay }}
  >
    {/* --- UPDATED: Icon container now uses the prop icon --- */}
    <div className="w-12 h-12 bg-black/80 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
      {icon}
    </div>

    <div>
      <h4 className="text-xl font-bold text-black mb-2 leading-snug">{title}</h4>
      <p className="text-black mb-2 text-sm">{description}</p>
      <a
        href={href}
        className="inline-flex items-center text-xs font-semibold text-gray-800 group hover:text-black transition-colors"
      >
        VIEW MORE
        <ViewMoreArrow />
      </a>
    </div>
  </motion.div>
);

const ServiceVerticalsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Main Grid: Left side (1 col) and Right side (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* --- Left Column --- */}
          <motion.div
            className="flex flex-col gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {/* Top Title Block */}
            <motion.div variants={itemVariants}>
              <p className="text-sm uppercase tracking-wider font-semibold text-gray-700 mb-3">
                Creative Approach
              </p>
              <h2 className="text-5xl lg:text-6xl font-extrabold text-black leading-tight">
                Revotic AI Smart Business Solutions
              </h2>
            </motion.div>

            {/* Bottom Service Block (Creative & Digital) */}
            <motion.div variants={itemVariants}>
              <ServiceBlock
                title="Creative & Digital Solutions"
                description="From UI/UX design to game development, digital branding, and business automation solutions, we craft engaging innovations that connect technology with human creativity for lasting impact."
                icon={<Palette className="w-6 h-6 text-[#b1ff32]" />} // --- ICON UPDATED ---
                href="/services/ui-ux"
              />
            </motion.div>
          </motion.div>

          {/* --- Right Column (Stacked Blocks) --- */}
          <motion.div
            className="flex flex-col gap-12 mt-0" // Stacks the two service blocks
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.15, delay: 0.2 } } }}
          >
            {/* Right Top Block */}
            <motion.div variants={itemVariants}>
              <ServiceBlock
                title="Web & App Development"
                description="Scalable, modern, and high-performing websites and apps built with the latest technologies to deliver seamless user experiences and business impact."
                icon={<Code className="w-6 h-6 text-[#b1ff32]" />} // --- ICON UPDATED ---
                href="/services/web-app"
              />
            </motion.div>

            {/* Right Bottom Block */}
            <motion.div variants={itemVariants}>
              <ServiceBlock
                title="Start Your Project"
                description="Turn your ideas into reality with tailored web and app development solutions. Our team builds scalable, secure, and high-performance digital products that grow with your business."
                icon={<Lightbulb className="w-6 h-6 text-[#b1ff32]" />} // --- ICON UPDATED ---
                href="/contact"
              />
            </motion.div>

            {/* --- ADDED fourth block as implied by previous version --- */}
            <motion.div variants={itemVariants}>
              <ServiceBlock
                title="Data & Analytics"
                description="Harness the power of data through personalized AI dashboards and predictive analytics to inform strategic decision-making."
                icon={<BarChart3 className="w-6 h-6 text-[#b1ff32]" />} // --- ICON UPDATED ---
                href="/services/ai-ml"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceVerticalsSection;

