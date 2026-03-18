"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogPageHeader: React.FC = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blogs" },
  ];

  return (
    <section className="bg-black text-white pt-[80px] pb-20 md:pb-28 overflow-hidden relative border-b border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b1ff32]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.nav
              className="text-[10px] font-black text-gray-500 flex items-center space-x-2 mb-10 uppercase tracking-[0.3em]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
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
                    <span className="text-gray-800">/</span>
                  )}
                </React.Fragment>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#b1ff32] text-xs font-black uppercase tracking-[0.4em] mb-6 block">
                Knowledge & Insights
              </p>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
                Revotic AI <br />
                <span className="text-[#b1ff32]">Insights_</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-10">
                Stay ahead of the curve with the latest strategies, deep-dives, and innovations in AI automation and intelligent engineering.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#b1ff32] animate-pulse" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Live Updates</span>
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">50+ Technical Articles</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-[#b1ff32]/20 blur-[60px] rounded-[3rem] animate-pulse" />
              
              {/* Image Container with Border */}
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 p-2 bg-neutral-900/50 backdrop-blur-sm">
                <img 
                  src="/images/blogs/blog-hero.png" 
                  alt="AI Insights Visual" 
                  className="rounded-[2.5rem] w-full h-full object-cover shadow-2xl"
                />
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 px-6 py-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#b1ff32]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#b1ff32]" />
                  </div>
                  <div>
                    <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest">Next Evolution</p>
                    <p className="text-[10px] text-white font-black uppercase tracking-widest leading-none">Generative AI 2.0</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPageHeader;

