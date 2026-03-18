"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FounderQuoteSection: React.FC = () => {
  return (
    <section className="relative bg-neutral-950 py-16 md:py-24 overflow-hidden border-t border-white/5">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#b1ff32]/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10"> 
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {/* --- Left Side: Portait --- */}
          <motion.div 
            className="w-full md:w-1/3 flex justify-center"
            variants={fadeIn}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-[#b1ff32] rounded-3xl blur-2xl opacity-10 group-hover:opacity-30 transition-opacity" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[4/5] w-[300px] md:w-[350px]">
                <img
                  src="/images/experts/sayab.png"
                  alt="Sayab Gulfaraz - Founder & CEO"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x800/111/444?text=CEO')}
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#b1ff32] text-black px-8 py-3 rounded-2xl font-black uppercase text-sm shadow-2xl">
                Founder & CEO
              </div>
            </div>
          </motion.div>

          {/* --- Right Side: Visionary Quote --- */}
          <motion.div 
            className="w-full md:w-2/3 text-center md:text-left"
            variants={fadeIn}
          >
            <div className="mb-6 flex justify-center md:justify-start">
              <p className="text-[#b1ff32] font-black text-xs uppercase tracking-[0.3em]">
                A Message from Our Founder
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tighter uppercase mb-10">
              Built by Someone Who <br />
              Understands Your Problem
            </h2>

            <blockquote className="relative mb-10">
              <span className="absolute -top-8 -left-4 text-[10rem] font-black text-white opacity-5 pointer-events-none select-none">
                "
              </span>
              <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed italic">
                RevoticAI was born from a simple frustration - too many businesses were being left behind because AI felt too complex, too expensive, or too far out of reach. I started this company to change that. We build practical AI solutions that real businesses can actually use, understand, and grow with.
              </p>
            </blockquote>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-black text-[#b1ff32] uppercase tracking-tighter leading-none">Sayab Gulfaraz</h3>
              <p className="text-gray-500 uppercase tracking-[0.3em] font-black text-[10px] mt-3">Founder & CEO, RevoticAI</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuoteSection;
