"use client";

import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutIntroSection: React.FC = () => {
  return (
    <section className="relative bg-white text-black py-20 md:py-32 overflow-hidden">
      {/* Background pattern from hero sections */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="w-full h-full" fill="none" viewBox="0 0 100 100">
          <pattern id="pattern-zigzag" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 5L5 0L10 5L5 10L0 5Z" stroke="#dcfce7" strokeWidth="1" fill="none" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-zigzag)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* --- Left Side: Years of Innovation & About Label --- */}
          <motion.div 
            className="lg:col-span-4 flex flex-col items-center lg:items-start mb-16 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-8"
              variants={itemVariants}
            >
              About <span className="text-black">Revotic AI Pvt Ltd</span>
            </motion.p>
            
            <motion.div 
              className="relative w-[200px] h-[200px] bg-[#f0ff46] rounded-full flex flex-col items-center justify-center shadow-lg"
              variants={itemVariants}
            >
              <span className="text-black text-8xl font-extrabold leading-none">6</span>
              <span className="text-black text-xl font-bold mt-2">Years of</span>
              <span className="text-black text-xl font-bold">Innovation</span>
            </motion.div>
          </motion.div>

          {/* --- Right Side: Mission Statement & CTA --- */}
          <motion.div 
            className="lg:col-span-8 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight"
              variants={itemVariants}
            >
              Powering the future with <span className="text-gray-600">AI-Powered Smart Solutions</span>, digital innovation, and next-gen technology to accelerate your business growth.
            </motion.h2>

            <motion.p 
              className="text-lg text-gray-700 max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-10"
              variants={itemVariants}
            >
              At Revotic AI, we build intelligent automation tools, custom AI/ML, GenAI solutions, and next-level Web & App development. Our mission is to help startups, enterprises, and businesses unlock their true potential with future-ready technology.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="/about#discover" // Link to a section within the About page, or a different page
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#374151] rounded-full hover:bg-black transition-all duration-300 shadow-md"
              >
                DISCOVER REVOTIC AI
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
