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
  return (
    <section className="bg-black text-white pt-32 pb-16 md:pb-24 overflow-hidden relative border-b border-white/5">
      {/* Background Sophistication */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#b1ff32]/5 blur invisible md:visible -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-center">

          <motion.div
            className="lg:col-span-7 mb-16 lg:mb-0 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#b1ff32] text-xs font-black uppercase tracking-[0.5em] mb-10"
              variants={itemVariants}
            >
              The Architecture
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-5xl font-black mb-10 leading-tight tracking-tighter text-white uppercase"
              variants={itemVariants}
            >
              Driving <span className="text-[#b1ff32]">Intelligent</span> <br />
              Innovation for <br />
              Tomorrow's Leaders
            </motion.h1>

            <motion.p
              className="text-sm md:text-base text-gray-400 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium tracking-wide"
              variants={itemVariants}
            >
              Revotic AI is a future-driven collective of engineers, data scientists, and strategists dedicated to delivering <span className="text-white">scalable AI, ML, and automation solutions</span> that ensure long-term client success.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-8 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-12 py-5 text-xl font-black text-black bg-[#b1ff32] rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(177,255,50,0.3)] group"
              >
                SECURE YOUR EDGE
                <ArrowRight className="ml-4 w-6 h-6 transition-transform duration-500 group-hover:translate-x-3" />
              </Link>
              <div className="text-gray-500 text-xs font-black uppercase tracking-[0.4em] border-l border-white/10 pl-8">
                ESTABLISHED <br /> 2025
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-[#b1ff32]/10 blur-[100px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
              <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl bg-black">
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                <img
                  src="/images/about/about-hero.png"
                  alt="Elite AI Infrastructure"
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => e.currentTarget.src = 'https://placehold.co/900x900/111/b1ff32?text=Elite+Infra'}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHeader;
