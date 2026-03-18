"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const VisionSection: React.FC = () => {
  const visionPoints = [
    "Establishing definitive industrial benchmarks for autonomous digital infrastructure.",
    "Cultivating a global ecosystem of elite intelligence-driven development.",
    "Deploying proprietary cognitive engines that outperform traditional systems by 10x.",
    "Ensuring institutional ROI through the strategic application of scalable AI."
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
  };

  return (
    <section className="bg-white text-black py-16 md:py-24 overflow-hidden relative border-y border-gray-50">
      {/* Enhanced Background: Subtle Gradient + Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(177,255,50,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000000_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-32 items-center">

          {/* Left Side: Massive Vision Content */}
          <motion.div
            className="lg:col-span-6 mb-24 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/5 border border-black/5 text-gray-800 text-[10px] font-black uppercase tracking-[0.5em] mb-12"
              variants={itemVariants}
            >
              The Disruption
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl font-black text-black mb-12 leading-tight tracking-tighter uppercase"
              variants={itemVariants}
            >
              Our Vision for <br />
              Tomorrow's <span className="text-gray-800">AI Landscape</span>
            </motion.h2>

            <motion.p
              className="text-sm md:text-base text-gray-700 mb-12 leading-relaxed max-w-xl font-medium"
              variants={itemVariants}
            >
              Our vision is simple: to <span className="text-black font-bold">future-proof</span> every business we touch. We see a world where complex operations are simplified by intelligent, reliable, and scalable technology.
            </motion.p>

            <ul className="space-y-6">
              {visionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start group"
                  custom={index}
                  variants={itemVariants}
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-200 text-gray-500 flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700 text-sm md:text-base font-bold pt-1 leading-tight group-hover:text-black transition-colors uppercase tracking-tight">{point}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: Hero Visualization */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              {/* Outer Decorative Rings */}
              <div className="absolute -inset-16 border border-gray-100 rounded-full animate-pulse opacity-40 pointer-events-none" />
              <div className="absolute -inset-32 border border-gray-50 rounded-full animate-pulse delay-700 opacity-20 pointer-events-none" />

              <div className="absolute -inset-6 bg-[#b1ff32]/20 rounded-[4rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <img
                src="/images/about/vision-hero-v2.png"
                alt="Elite AI Infrastructure"
                className="w-full h-auto rounded-[4rem] shadow-[0_80px_160px_rgba(0,0,0,0.25)] border-[12px] border-white relative z-10 transition-all duration-1000 group-hover:scale-[1.03] group-hover:rotate-1"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/1200x800/ffffff/111111?text=Elite+AI')}
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-black text-white p-10 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.3)] z-20 border border-white/10 hidden md:block group-hover:-translate-y-4 group-hover:translate-x-4 transition-transform duration-700">
                <span className="block text-5xl font-black text-[#b1ff32] tracking-tighter">10X</span>
                <span className="block text-[10px] uppercase tracking-[0.4em] font-black text-gray-400 mt-2">Industrial ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
