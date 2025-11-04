"use client";

import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const OurMissionSection: React.FC = () => {
  return (
    <section className="relative bg-neutral-900 text-white  py-20 md:py-32 overflow-hidden pt-[0px]">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="w-full h-full" fill="none" viewBox="0 0 100 100">
          <pattern id="pattern-zigzag-mission" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 5L5 0L10 5L5 10L0 5Z" stroke="#dcfce7" strokeWidth="1" fill="none" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-zigzag-mission)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* --- Left Side: Content & CTA --- */}
          <motion.div 
            className="lg:col-span-7 mb-16 lg:mb-0 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest font-semibold text-gray-300 mb-4"
              variants={itemVariants}
            >
              Our Purpose
            </motion.p>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight"
              variants={itemVariants}
            >
              Our Mission at Revotic AI
            </motion.h2>

            <motion.p 
              className="text-lg text-gray-100 max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-6"
              variants={itemVariants}
            >
              At Revotic AI, our mission is to empower businesses, startups, and
              enterprises with <span className="text-[#b1ff32] font-semibold">AI-driven automation</span>, innovative digital solutions, and
              next-gen web & app development. We aim to simplify workflows, accelerate
              digital transformation, and enable organizations to scale with confidence in
              the era of artificial intelligence.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-100 max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-10"
              variants={itemVariants}
            >
              By merging technology, <span className="italic">creativity, and intelligence</span>, we craft solutions that
              don't just solve today's challenges but prepare our partners for the
              opportunities of tomorrow.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="/careers" // Assuming a careers page or a general "Join Us" link
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-[#f0ff46] rounded-full hover:bg-[#b1ff32] transition-all duration-300 shadow-md"
              >
                JOIN OUR JOURNEY
              </a>
            </motion.div>
          </motion.div>

          {/* --- Right Side: Mission Graphic --- */}
          <motion.div 
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-[350px] h-[350px]">
              {/* Main oval shape with gradient */}
              <svg className="absolute inset-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="missionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8a2387" /> {/* Darker purple */}
                    <stop offset="50%" stopColor="#e94057" /> {/* Reddish */}
                    <stop offset="100%" stopColor="#f27121" /> {/* Orange */}
                  </linearGradient>
                </defs>
                <ellipse cx="200" cy="200" rx="180" ry="140" fill="url(#missionGradient)" />
                {/* Inner white oval for "Our Mission" text */}
                <ellipse cx="200" cy="200" rx="140" ry="100" fill="white" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-black text-4xl font-extrabold mb-1 leading-tight">Our</span>
                <span className="text-black text-4xl font-extrabold leading-tight">Mission</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
