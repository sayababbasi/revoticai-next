"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FounderQuoteSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6"> 
        <motion.div
          className="relative max-w-6xl mx-auto bg-white border-2 border-[#0B0E2D]/50 rounded-xl shadow-xl p-8 md:p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Top Label */}
          <motion.p
            className="text-sm uppercase tracking-widest font-semibold text-[#0B0E2D] mb-6"
            variants={fadeIn}
          >
           <b>From Our Founder </b>
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            className="text-xl md:text-3xl italic font-serif text-gray-800 leading-relaxed mb-10 relative"
            variants={fadeIn}
          >
            <span className="absolute left-0 top-0 text-7xl font-extrabold text-[#0B0E2D] opacity-70 transform -translate-x-1/2 -translate-y-1/2">
              &ldquo;
            </span>
            At Revotic AI, we believe that the future belongs to those who embrace innovation. By merging artificial intelligence, creativity, and human-centric design, we empower businesses to transform ideas into lasting impact.
            <span className="absolute right-0 bottom-0 text-7xl font-extrabold text-[#0B0E2D] opacity-70 transform translate-x-1/2 translate-y-1/2">
              &rdquo;
            </span>
          </motion.blockquote>

          {/* Founder Info */}
          <motion.div
            className="flex flex-col items-center"
            variants={fadeIn}
          >
            <img
              src="/images/sayab_gulfaraz.png" // Placeholder: You should place your founder's image here
              alt="Sayab Gulfaraz, Founder & Chief Executive Officer"
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-200 shadow-md"
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/96x96/e0e0e0/333?text=SG')} // Fallback image
            />
            <h3 className="text-xl font-bold text-gray-900 mb-1">Sayab Gulfaraz</h3>
            <p className="text-md text-gray-600">Founder & Chief Executive Officer</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuoteSection;
