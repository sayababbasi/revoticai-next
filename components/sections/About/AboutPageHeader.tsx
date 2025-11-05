"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
// Using lucide-react, which should be available in your project
import { ArrowRight } from 'lucide-react';

interface AboutPageHeaderProps {
  // We'll use static data for the about page header, but keep the structure clean
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutPageHeader: React.FC<AboutPageHeaderProps> = () => {
  const titleText = "Driving Intelligent Innovation for Tomorrow's Leaders";
  const words = titleText.split(" ");

  // Emphasize the word "Intelligent" (index 1)
  const emphasizedTitle = (
    <div className="inline">
      {words.map((word, index) => (
        <span 
          key={index}
          className={
            index === 1 // "Intelligent"
              ? "text-gray-700 mr-2 inline-block leading-none drop-shadow-md shadow-[#b1ff32]"
              : ""
          }
        >
          {word}{" "}
        </span>
      ))}
    </div>
  );

  return (
    // Clean, light background
    <section className="bg-white text-black pt-[50px] pb-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* --- Left Side: Content & CTA --- */}
          <motion.div 
            className="lg:col-span-6 mb-12 lg:mb-0 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-4"
              variants={itemVariants}
            >
              Get to know us
            </motion.p>
            
            <motion.h1 
              className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
              variants={itemVariants}
            >
              {emphasizedTitle}
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-700 max-w-lg lg:max-w-none mx-auto lg:mx-0 mb-8"
              variants={itemVariants}
            >
              Revotic AI is a future-driven collective of engineers, data scientists, and strategists dedicated to delivering <b>scalable AI, ML, and automation solutions</b> that ensure long-term client success.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gray-800 rounded-full hover:bg-black hover:text-[#b1ff32] transition-all duration-300 shadow-lg group"
              >
                Start Your Project
                <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* --- Right Side: Image/Illustration --- */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="\images\product\ai_dashboard.png"
              alt="Team strategy meeting with AI dashboard"
              className="w-full h-auto rounded-xl shadow-2xl border border-gray-100"
              onError={(e) => e.currentTarget.src = 'https://placehold.co/900x600/f0f0f0/333?text=About+Image'}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHeader;
