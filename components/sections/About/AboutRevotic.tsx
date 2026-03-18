"use client";

import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutIntroSection: React.FC = () => {
  const stats = [
    { label: "Systems Deployed", value: "250+", suffix: "" },
    { label: "Strategic Partners", value: "120", suffix: "+" },
    { label: "Global Reach", value: "15", suffix: "+" },
    { label: "Elite Engineers", value: "45", suffix: "+" },
  ];

  return (
    <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden border-t border-white/5">
      {/* Background Soft Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-32 items-center">

          {/* --- Left Side: Master Innovation Badge --- */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start mb-24 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              className="px-4 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.6em] font-black text-gray-500 mb-12"
              variants={itemVariants}
            >
              About <span className="text-white">Revotic AI Pvt Ltd</span>
            </motion.div>

            <motion.div
              className="relative group"
              variants={itemVariants}
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-10 bg-[#b1ff32]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b1ff32] to-transparent rounded-full animate-spin-slow opacity-20" />

              <div className="relative w-[320px] h-[320px] md:w-[360px] md:h-[360px] bg-neutral-900 border border-white/5 rounded-full flex flex-col items-center justify-center shadow-[0_40px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl group-hover:scale-105 transition-transform duration-700">
                <span className="text-[#b1ff32] text-[10rem] font-black leading-none tracking-tighter">3</span>
                <div className="text-center mt-[-1rem] px-8">
                  <span className="block text-white text-2xl font-black uppercase tracking-[0.2em]">Years of</span>
                  <span className="block text-gray-500 text-xs font-bold uppercase tracking-[0.4em] mt-2">Technological Mastery</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- Right Side: Manifesto & Results --- */}
          <motion.div
            className="lg:col-span-8 lg:pr-24 xl:pr-40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-black mb-12 leading-tight tracking-tighter text-white uppercase"
              variants={itemVariants}
            >
              Powering the future with <br />
              <span className="text-[#b1ff32]">AI-Powered Smart Solutions</span>, <br />
              digital innovation, and next-gen <br />
              technology to <span className="text-[#b1ff32]">accelerate growth</span>.
            </motion.h2>

            <motion.div
              className="relative p-6 md:p-10 bg-white/5 rounded-[2rem] border-l-4 border-[#b1ff32] mb-12"
              variants={itemVariants}
            >
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium italic">
                At Revotic AI, we build intelligent automation tools, custom AI/ML, and GenAI solutions. Our mission is to help startups and enterprises unlock their true potential with future-ready technology.
              </p>
            </motion.div>

            {/* Elite Stats Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-12"
              variants={itemVariants}
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="relative group overflow-hidden">
                  <div className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:text-[#b1ff32] group-hover:translate-x-1 transition-all duration-500 tracking-tighter">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-500">
                    {stat.label}
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b1ff32] group-hover:w-full transition-all duration-700" />
                </div>
              ))}
            </motion.div>

            <motion.div className="mt-24" variants={itemVariants}>
              <a
                href="/about#discover"
                className="inline-flex items-center gap-6 px-14 py-6 text-xl font-black text-black bg-[#b1ff32] border border-white/10 rounded-full hover:bg-white transition-all duration-500 shadow-2xl uppercase tracking-widest group"
              >
                The Tech Stack
                <div className="w-8 h-8 rounded-full bg-black text-[#b1ff32] group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#b1ff32] animate-pulse group-hover:bg-white" />
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutIntroSection;
