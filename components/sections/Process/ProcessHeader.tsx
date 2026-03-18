"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

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

const ProcessHeader: React.FC = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Process", href: "/process" },
  ];

  return (
    <section className="bg-black text-white pt-[80px] pb-16 md:pb-24 overflow-hidden relative border-b border-white/5">
      {/* Background Sophistication */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b1ff32]/5 blur invisible md:visible -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7 mb-16 lg:mb-0 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.nav
              className="text-sm font-bold text-gray-500 flex justify-center lg:justify-start items-center space-x-2 mb-8 uppercase tracking-widest"
              variants={itemVariants}
            >
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#b1ff32] transition-colors"
                  >
                    {item.name}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-3 h-3 text-gray-700" />
                  )}
                </React.Fragment>
              ))}
            </motion.nav>

            <motion.p
              className="text-sm uppercase tracking-[0.3em] font-black text-[#b1ff32] mb-6"
              variants={itemVariants}
            >
              The Delivery Methodology
            </motion.p>
            
            <motion.h1
              className="text-4xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-white uppercase"
              variants={itemVariants}
            >
              The Strategic <br /> <span className="text-[#b1ff32]">Workflow</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium tracking-wide"
              variants={itemVariants}
            >
              We don't just build software; we engineer competitive advantages. Our 7-step strategic workflow ensures every line of code serves a business objective, and every project is built to scale.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-12 py-5 text-xl font-black text-black bg-[#b1ff32] rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(177,255,50,0.3)] group"
              >
                START THE DISCOVERY
                <ArrowRight className="ml-4 w-6 h-6 transition-transform duration-500 group-hover:translate-x-3" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-[#b1ff32]/10 blur-[100px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
              <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl bg-black">
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                <img
                  src="/images/process/process-hero.png"
                  alt="Strategic Workflow Illustration"
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => e.currentTarget.src = 'https://placehold.co/900x900/111/b1ff32?text=Elite+Process'}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHeader;
