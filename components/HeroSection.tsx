// Developed by SAYAB.
"use client";

import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-white pt-[68px]">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 min-h-[580px]">
                {/* Left Column */}
                <div className="py-12 md:py-[72px] pr-0 md:pr-12 flex flex-col justify-center">
                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center self-start gap-2 bg-[#F0F5FF] border-[0.5px] border-[#C5D8FF] rounded-full px-[14px] py-[5px] mb-8">
                        <span className="w-[6px] h-[6px] bg-[#0057FF] rounded-full"></span>
                        <span className="font-dmSans text-[12px] font-[600] uppercase tracking-[0.06em] text-[#0057FF]">
                            AI Agency · Rawalpindi, Pakistan
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="font-syne font-[800] text-[42px] md:text-[52px] leading-[1.06] tracking-[-1.5px] text-[#0a0a0a] mb-6">
                        We Build AI Systems <br />
                        <span className="text-[#0057FF]">That Work</span> While <br />
                        You Sleep.
                    </h1>

                    {/* Description */}
                    <p className="font-dmSans text-[16px] font-[400] leading-[1.75] text-[#666] max-width-[460px] mb-8">
                        Custom AI automation, intelligent software, and scalable digital products — built for businesses that{" "}
                        <span className="font-[500] text-[#0a0a0a]">refuse to stay behind.</span> From strategy to deployment, we deliver measurable results.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-[14px] mb-12 md:mb-[52px]">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto font-syne text-[13px] font-[700] uppercase tracking-[0.08em] bg-[#0057FF] text-white px-[28px] py-[14px] rounded-[4px] hover:bg-[#0040cc] transition-colors flex items-center justify-center gap-2"
                        >
                            Book a Free Strategy Call
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                        <Link
                            href="/portfolio"
                            className="w-full sm:w-auto font-syne text-[13px] font-[600] text-[#0a0a0a] bg-transparent border-[0.5px] border-[#d0d0d0] px-[24px] py-[14px] rounded-[4px] hover:border-[#0057FF] hover:text-[#0057FF] transition-colors text-center"
                        >
                            View Our Work
                        </Link>
                    </div>

                    {/* Trust Row */}
                    <div className="flex items-center gap-4">
                        <span className="font-dmSans text-[11px] font-[600] text-[#bbb] uppercase tracking-[0.12em]">Trusted By</span>
                        <div className="w-[1px] h-[16px] bg-[#e0e0e0]"></div>
                        <div className="flex items-center -space-x-2">
                            {[
                                { l: "A", c: "#0057FF" },
                                { l: "M", c: "#1D9E75" },
                                { l: "K", c: "#D85A30" },
                                { l: "S", c: "#534AB7" },
                                { l: "R", c: "#BA7517" },
                            ].map((av, i) => (
                                <div
                                    key={i}
                                    className="w-[28px] h-[28px] rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                                    style={{ backgroundColor: av.c }}
                                >
                                    {av.l}
                                </div>
                            ))}
                        </div>
                        <p className="font-dmSans text-[12px] text-[#888]">
                            <span className="font-bold text-[#0a0a0a]">30+ clients</span> across 8 countries
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="bg-[#f7f8fc] border-l border-[#e8e8e8] p-8 md:p-[40px] flex flex-col gap-4">
                    {/* Element 1 — 2×2 Stat Cards Grid */}
                    <div className="grid grid-cols-2 gap-[12px]">
                        {/* Card 1 */}
                        <div className="bg-white border border-[#e8e8e8] rounded-[10px] p-5 hover:border-[#0057FF] transition-colors group">
                            <div className="w-[32px] h-[32px] rounded-[8px] background-[#F0F5FF] flex items-center justify-center mb-4 bg-[#F0F5FF]">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                    <polyline points="2 17 12 22 22 17"></polyline>
                                    <polyline points="2 12 12 17 22 12"></polyline>
                                </svg>
                            </div>
                            <p className="font-syne font-[800] text-[26px] text-[#0a0a0a]">
                                50<span className="text-[#0057FF]">+</span>
                            </p>
                            <p className="font-dmSans text-[12px] text-[#888]">AI projects delivered</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white border border-[#e8e8e8] rounded-[10px] p-5 hover:border-[#0057FF] transition-colors group">
                            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#E1F5EE] flex items-center justify-center mb-4">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                </svg>
                            </div>
                            <p className="font-syne font-[800] text-[26px] text-[#0a0a0a]">
                                70<span className="text-[#0057FF]">%</span>
                            </p>
                            <p className="font-dmSans text-[12px] text-[#888]">Avg. efficiency gain for clients</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white border border-[#e8e8e8] rounded-[10px] p-5 hover:border-[#0057FF] transition-colors group">
                            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#FAEEDA] flex items-center justify-center mb-4">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#854F0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <p className="font-syne font-[800] text-[26px] text-[#0a0a0a]">
                                30<span className="text-[#0057FF]">d</span>
                            </p>
                            <p className="font-dmSans text-[12px] text-[#888]">Average MVP delivery time</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white border border-[#e8e8e8] rounded-[10px] p-5 hover:border-[#0057FF] transition-colors group">
                            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#EEEDFE] flex items-center justify-center mb-4">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <p className="font-syne font-[800] text-[26px] text-[#0a0a0a]">
                                8<span className="text-[#0057FF]">+</span>
                            </p>
                            <p className="font-dmSans text-[12px] text-[#888]">Countries served globally</p>
                        </div>
                    </div>

                    {/* Element 2 — Floating Announcement Badge */}
                    <Link
                        href="/blogs/workflow-beta"
                        className="bg-white border border-[#e8e8e8] rounded-[8px] p-[12px] px-[16px] flex items-center gap-4 hover:border-[#0057FF] transition-colors"
                    >
                        <div className="w-[32px] h-[32px] rounded-[8px] bg-[#F0F5FF] flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <p className="font-dmSans text-[13px] font-[600] text-[#0a0a0a]">Latest: Workflow SaaS — Now in Beta</p>
                            <p className="font-dmSans text-[11px] text-[#999]">AI-powered project management platform</p>
                        </div>
                        <span className="text-[#0057FF] text-[16px]">→</span>
                    </Link>

                    {/* Element 3 — Tech Stack Row */}
                    <div>
                        <p className="font-dmSans text-[11px] font-[600] text-[#bbb] uppercase tracking-[0.1em] mb-[10px]">Our Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js", "FastAPI", "Python", "OpenAI", "LangChain", "MongoDB", "RAG", "Vercel"].map((stack) => (
                                <span
                                    key={stack}
                                    className="bg-white border border-[#e8e8e8] rounded-[4px] px-[11px] py-[5px] font-dmSans text-[11px] font-[600] text-[#555]"
                                >
                                    {stack}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
