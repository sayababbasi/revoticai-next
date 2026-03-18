


"use client";

import React from "react";
import { motion } from "framer-motion";
// FIX: Removed 'next/link' import
// import Link from 'next/link'; 
import { ArrowRight, Star } from 'lucide-react';

interface PortfolioPageHeaderProps {
    // We are passing props to keep it reusable even if we only use it once.
    title: string;
    subtitle: string;
    description: string;
    // Optional social proof to boost credibility
    clutchRating?: number;
    reviewCount?: number;
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const PortfolioPageHeader: React.FC<PortfolioPageHeaderProps> = ({
    title = '',
    subtitle = '',
    description = '',
    clutchRating = 4.9,
    reviewCount = 52,
}) => {
    const words = title.split(" ");
    const emphasizedTitle = (
        <div className="inline">
            {words.map((word, index) => (
                <span
                    key={index}
                    className={
                        index === 1 // Emphasize the second word ("Digital") or first if preferred
                            ? "text-[#b1ff32] mr-2 inline-block leading-none drop-shadow-md"
                            : ""
                    }
                >
                    {word}{" "}
                </span>
            ))}
        </div>
    );

    return (
        <section className="bg-black text-white pt-[80px] pb-24 md:pb-32 overflow-hidden relative border-b border-white/5">
            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b1ff32]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <motion.div
                        className="lg:col-span-7 mb-12 lg:mb-0 text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    >
                        <motion.p
                            className="text-sm uppercase tracking-[0.3em] font-black text-[#b1ff32] mb-6"
                            variants={itemVariants}
                        >
                            {subtitle}
                        </motion.p>

                        <motion.h1
                            className="text-5xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase"
                            variants={itemVariants}
                        >
                            {emphasizedTitle}
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
                            variants={itemVariants}
                        >
                            {description}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-6 mb-12">
                            <div className="flex items-center text-sm font-black uppercase tracking-widest text-[#b1ff32]">
                                <Star className="w-5 h-5 text-[#b1ff32] fill-[#b1ff32] mr-2" />
                                <span>{clutchRating.toFixed(1)} Clutch</span>
                            </div>
                            <div className="w-px h-4 bg-white/10" />
                            <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                                {reviewCount} Verified Reviews
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-12 py-5 text-xl font-black text-black bg-[#b1ff32] rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(177,255,50,0.3)] group"
                            >
                                START A PROJECT
                                <ArrowRight className="ml-4 w-6 h-6 transition-transform duration-500 group-hover:translate-x-3" />
                            </a>
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
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                    alt="Work Showcase Visual"
                                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
                                    onError={(e) => e.currentTarget.src = 'https://placehold.co/900x700/111/b1ff32?text=Portfolio'}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioPageHeader;
