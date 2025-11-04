"use client";

import React from "react";
import { motion } from "framer-motion";
// import Link from "next/link"; // Replaced with <a> tag to prevent build errors

// --- Animation Variants ---
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- Component Props Interface ---
interface ContactPageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumbs: { name: string; href: string }[];
}

// --- PageHeader Component ---
const ContactPageHeader: React.FC<ContactPageHeaderProps> = ({
  // --- FIX: Provide default values to prevent runtime errors ---
  title = "Get in Touch",
  subtitle = "Contact Us",
  breadcrumbs = [], 
}) => (
  <section className="bg-black text-white pt-[150px] pb-16 md:pb-24 overflow-hidden">
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
        {title}
      </motion.h1>
      <motion.nav
        className="text-sm text-gray-400 flex justify-center space-x-2"
        variants={itemVariants}
      >
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={item.name}>
            <a href={item.href} className="hover:text-[#b1ff32] transition-colors">
              {item.name}
            </a>
            {index < breadcrumbs.length - 1 && <span className="text-gray-600">/</span>}
          </React.Fragment>
        ))}
      </motion.nav>
    </motion.div>
  </section>
);

export default ContactPageHeader;

