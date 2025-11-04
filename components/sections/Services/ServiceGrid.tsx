"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Inlined SVG Icons (to prevent build errors) ---
const BrainCircuitIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b1ff32]"
  >
    <path d="M12 4.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 4.5Z" />
    <path d="M12 4.5a2.5 2.5 0 0 0 4.95.76 2.5 2.5 0 0 0 1.32.18 2.5 2.5 0 0 0 4.01-3.26 2.5 2.5 0 0 0-.4-4.54 2.5 2.5 0 0 0-4.54.4 2.5 2.5 0 0 0-3.26-4.01 2.5 2.5 0 0 0-.18-1.32A2.5 2.5 0 0 0 12 4.5Z" />
    <path d="M12 13.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 13.5Z" />
    <path d="M12 13.5a2.5 2.5 0 0 0 4.95.76 2.5 2.5 0 0 0 1.32.18 2.5 2.5 0 0 0 4.01-3.26 2.5 2.5 0 0 0-.4-4.54 2.5 2.5 0 0 0-4.54.4 2.5 2.5 0 0 0-3.26-4.01 2.5 2.5 0 0 0-.18-1.32A2.5 2.5 0 0 0 12 13.5Z" />
    <path d="M12 22.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 22.5Z" />
    <path d="M12 22.5a2.5 2.5 0 0 0 4.95.76 2.5 2.5 0 0 0 1.32.18 2.5 2.5 0 0 0 4.01-3.26 2.5 2.5 0 0 0-.4-4.54 2.5 2.5 0 0 0-4.54.4 2.5 2.5 0 0 0-3.26-4.01 2.5 2.5 0 0 0-.18-1.32A2.5 2.5 0 0 0 12 22.5Z" />
    <path d="M17 11.5a2.5 2.5 0 0 1 0 5" />
    <path d="M17 11.5a2.5 2.5 0 0 0 0 5" />
    <path d="M7 11.5a2.5 2.5 0 0 1 0 5" />
    <path d="M7 11.5a2.5 2.5 0 0 0 0 5" />
  </svg>
);
const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b1ff32]"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const SmartphoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b1ff32]"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);
const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b1ff32]"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const PaletteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b1ff32]"
  >
    <circle cx="13.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="10.5" r="2.5" />
    <circle cx="15.5" cy="15.5" r="2.5" />
    <circle cx="10.5" cy="17.5" r="2.5" />
    <circle cx="6.5" cy="13.5" r="2.5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.83-.13 2.69-.38" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// --- Inlined Data for the 6 Cards ---
const expertiseData = [
  {
    icon: <BrainCircuitIcon />,
    title: "AI & ML Automation",
    description: "Leverage custom-built AI models to automate tasks, gain insights, and drive decisions.",
    tags: ["Python", "TensorFlow", "RPA"],
    isCta: false,
  },
  {
    icon: <CodeIcon />,
    title: "Full-Stack Development",
    description: "High-performance, scalable web applications built with modern, secure frameworks.",
    tags: ["React", "Next.js", "Node.js"],
    isCta: false,
  },
  {
    icon: <SmartphoneIcon />,
    title: "AI-Powered App Development",
    description: "Intelligent mobile apps that deliver personalized user experiences on iOS and Android.",
    tags: ["Flutter", "React Native", "Firebase"],
    isCta: false,
  },
  {
    icon: <ZapIcon />,
    title: "Business Process Automation",
    description: "We analyze and re-engineer your workflows, deploying bots to handle repetitive tasks.",
    tags: ["BPM", "SaaS", "Integration"],
    isCta: false,
  },
  {
    icon: <PaletteIcon />,
    title: "UI/UX & Digital Design",
    description: "Human-centric design that ensures your digital products are intuitive, engaging, and beautiful.",
    tags: ["Figma", "User Research", "Prototyping"],
    isCta: false,
  },
  {
    // This is the 6th "CTA" card
    icon: null,
    title: "Have a Project in Mind?",
    description: "Our experts are ready to discuss your idea and help you build a scalable, intelligent solution.",
    tags: [],
    isCta: true,
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Main Component ---
const ServiceGrid: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* --- Section Header --- */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p
            className="text-sm uppercase tracking-wider font-semibold text-[#b1ff32] mb-3"
            variants={itemVariants}
          >
            Our Capabilities
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Our Core Expertise
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400"
            variants={itemVariants}
          >
            A 360-degree view of our capabilities, from strategic AI
            implementation to full-stack development.
          </motion.p>
        </motion.div>

        {/* --- 6-Item Grid --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {expertiseData.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className={`rounded-xl transition-all duration-300 ${
                item.isCta
                  ? "bg-[#b1ff32] text-black p-8 flex flex-col justify-between" // CTA Card Style
                  : "bg-neutral-900 border border-neutral-800 p-8 hover:border-[#b1ff32]/50" // Standard Card Style
              }`}
            >
              {item.isCta ? (
                // --- CTA Card Content ---
                <div className="group">
                  <h3 className="text-3xl font-bold text-black mb-4">
                    {item.title}
                  </h3>
                  <p className="text-neutral-800 text-lg mb-6">
                    {item.description}
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-lg font-bold text-black"
                  >
                    Get in Touch
                    <ArrowRightIcon />
                  </a>
                </div>
              ) : (
                // --- Standard Card Content ---
                <div>
                  <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-neutral-800 text-gray-300 px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGrid;

