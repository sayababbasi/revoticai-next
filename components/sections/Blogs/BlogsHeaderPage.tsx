"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogPageHeader: React.FC = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
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
          Our Blog
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          variants={itemVariants}
        >
          Revotic AI Insights
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Stay updated with the latest trends, strategies, and case studies in
          AI, automation, and full-stack development.
        </motion.p>
        <motion.nav
          className="text-sm text-gray-400 flex justify-center space-x-2 mt-6"
          variants={itemVariants}
        >
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.name}>
              <a href={item.href} className="hover:text-[#b1ff32] transition-colors">
                {item.name}
              </a>
              {index < breadcrumbs.length - 1 && (
                <span className="text-gray-600">/</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>
      </motion.div>
    </section>
  );
};

export default BlogPageHeader;

