"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const OurMissionSection: React.FC = () => {
  const executionPrinciples = [
    {
      title: "Staying Ahead of the Curve",
      description: "We keep up with the latest in AI so you don't have to. Our team stays on the cutting edge and brings the right technology to your business at the right time.",
    },
    {
      title: "We Build for Results, Not Just Delivery",
      description: "Every project we take on has one goal - measurable impact. We don't just ship features; we make sure what we build actually moves the needle for your business.",
    },
    {
      title: "Honest, Transparent Partnership",
      description: "We believe the best work happens when there's trust. We keep you in the loop at every stage, communicate openly, and always do what we say we'll do.",
    },
    {
      title: "We Keep Improving, Always",
      description: "Technology never stands still, and neither do we. We continuously refine our work, incorporate feedback, and make sure your solution keeps getting better over time.",
    },
  ];

  return (
    <section className="relative bg-white text-black py-16 md:py-24 overflow-hidden border-t border-gray-100">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* --- Left Side: Manifesto --- */}
          <div className="lg:col-span-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/5 border border-black/10 text-gray-500 text-[10px] font-black uppercase tracking-[0.5em] mb-12"
                variants={itemVariants}
              >
                The Standard
              </motion.div>

              <motion.h2
                className="text-3xl md:text-5xl font-black mb-10 leading-tight tracking-tighter uppercase"
                variants={itemVariants}
              >
                How <span className="text-gray-800">We Work</span>
              </motion.h2>

              <motion.div 
                className="space-y-8 text-gray-800 text-sm md:text-base font-medium leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                <p>
                  At RevoticAI, we go beyond just writing code. We take the time to understand your business, your challenges, and your goals - then we build solutions that actually make a difference.
                </p>
                <p>
                  We partner with businesses to bring AI into their everyday operations - not as a buzzword, but as a practical tool that saves time, reduces costs, and drives real growth.
                </p>
              </motion.div>

              <motion.div className="mt-12" variants={itemVariants}>
                <a
                  href="/contact"
                  className="group inline-flex items-center px-8 py-4 rounded-full bg-gray-800 text-white font-black text-sm uppercase tracking-widest hover:bg-black transition-colors"
                >
                  Let's Work Together
                  <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform text-[#b1ff32]" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* --- Right Side: Principles Matrix --- */}
          <div className="lg:col-span-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {executionPrinciples.map((v, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-10 bg-gray-50/50 border border-gray-100 rounded-[2.5rem] hover:border-black/10 transition-all duration-700 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 text-gray-800 font-black text-5xl group-hover:text-black transition-colors">
                    0{i + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-black text-2xl mb-8 group-hover:bg-gray-300 group-hover:text-gray-500 transition-all duration-500 shadow-xl">
                    {/* Visual Icon Placeholder */}
                    <div className="w-3 h-3 rounded-full bg-current animate-pulse" />
                  </div>
                  <h3 className="text-xl font-black text-gray-700 mb-4 group-hover:text-gray-800 transition-colors uppercase tracking-tight leading-none">
                    {v.title}
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-sm font-medium group-hover:text-black transition-colors">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
