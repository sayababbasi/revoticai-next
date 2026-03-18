
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

interface Breadcrumb {
  name: string;
  href: string;
}

export interface IndustryPageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  emphasizeWord?: number;
  breadcrumbs?: Breadcrumb[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const IndustryPageHeader: React.FC<IndustryPageHeaderProps> = ({
  title = "AI-Driven Vertical Excellence",
  subtitle = "Strategic Solutions for Global Industries",
  description = "Fueling transformation across healthcare, finance, logistics, and more with specialized AI architectures designed for maximum ROI and scalability.",
  emphasizeWord = 1,
  breadcrumbs = [],
}) => {
  const words = title.split(" ");
  const emphasizedTitle = (
    <div className="inline">
      {words.map((word, index) => (
        <span
          key={index}
          className={
            index === emphasizeWord
              ? "text-[#b1ff32] mr-2 inline-block leading-none drop-shadow-md"
              : "mr-2 inline-block leading-none"
          }
        >
          {word}{" "}
        </span>
      ))}
    </div>
  );

  return (
    <section className="bg-neutral-950 text-white pt-[140px] pb-24 md:pb-32 overflow-hidden relative">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#b1ff32_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="text-gray-400 text-sm mb-8 text-center lg:text-left">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href}>
                <a href={crumb.href} className="hover:text-[#b1ff32] transition-colors">
                  {crumb.name}
                </a>
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2 text-gray-700">/</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            className="lg:col-span-7 mb-12 lg:mb-0 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full mb-6"
              variants={itemVariants}
            >
              <Zap className="w-4 h-4 text-[#b1ff32]" />
              <span className="text-xs uppercase tracking-[0.2em] font-black text-gray-400">
                {subtitle}
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tighter"
              variants={itemVariants}
            >
              {emphasizedTitle}
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-12"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="#verticals"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-black text-black bg-[#b1ff32] rounded-full hover:bg-white transition-all duration-300 shadow-lg group"
              >
                Explore Verticals
                <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 bg-[#b1ff32]/20 blur-[100px] rounded-full opacity-30 animate-pulse" />
            <div className="relative rounded-[3rem] overflow-hidden border border-neutral-800 shadow-[0_40px_100px_-20px_rgba(177,255,50,0.15)] bg-neutral-900 group">
              <img
                src="/images/industries/industries-hero.png"
                alt="AI Vertical Excellence Illustration"
                className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-neutral-900 border border-neutral-800 p-4 rounded-3xl shadow-2xl animate-bounce-slow">
              <Globe className="w-8 h-8 text-[#b1ff32]" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-neutral-800 p-4 rounded-3xl shadow-2xl animate-bounce-slow delay-500">
              <Shield className="w-8 h-8 text-[#b1ff32]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPageHeader;
