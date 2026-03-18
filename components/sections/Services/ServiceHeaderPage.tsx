
"use client";

import React from "react";
import { motion } from "framer-motion";

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className ?? "ml-3 w-5 h-5"}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// --- Animation Variants ---
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// --- PageHeader Component ---
interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  breadcrumbs: { name: string; href: string }[];
  emphasizeWord?: number;
  button?: { text: string; href: string };
}

const ServiceHeaderPage: React.FC<PageHeaderProps> = ({
  title = "",
  subtitle = "",
  description = "",
  breadcrumbs = [],
  emphasizeWord,
  button,
}) => {
  const words = title.split(" ");
  const emphasizedTitle = 3
  emphasizeWord !== undefined && words[emphasizeWord] ? (
    <div className="inline">
      {words.map((word, index) => (
        <span
          key={index}
          className={
            index === emphasizeWord
              ? "text-[#b1ff32] mr-2 inline-block leading-none"
              : ""
          }
        >
          {word}{" "}
        </span>
      ))}
    </div>
  ) : (
    title
  );

  return (
    <section className="bg-black text-white pt-[150px] pb-16 md:pb-24 overflow-hidden relative">
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <motion.div
        className="container mx-auto px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p
          className="text-sm uppercase tracking-widest font-semibold text-[#b1ff32] mb-3"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          variants={itemVariants}
        >
          {emphasizedTitle}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-8"
          variants={itemVariants}
        >
          {description}
        </motion.p>
        <motion.nav
          className="text-sm text-gray-400 flex justify-center space-x-2"
          variants={itemVariants}
        >
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.name}>
              <a
                href={item.href}
                className="hover:text-[#b1ff32] transition-colors"
              >
                {item.name}
              </a>
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </motion.nav>
        {button && (
          <motion.div className="mt-6" variants={itemVariants}>
            <a
              href={button.href}
              className="inline-flex items-center bg-[#b1ff32] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#d0ff4f] transition"
            >
              {button.text}
              <ArrowRightIcon />
            </a>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ServiceHeaderPage;
