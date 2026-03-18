"use client";

import React from "react";

// --- Inlined SVG Icons (matching existing project patterns) ---
const PerformanceIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#b1ff32]"
    >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

const SecurityIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#b1ff32]"
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const AIExpertiseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#b1ff32]"
    >
        <path d="M12 2a4 4 0 0 0-4 4c0 2.5 2 3.5 2 5h4c0-1.5 2-2.5 2-5a4 4 0 0 0-4-4z" />
        <path d="M10 17v.5a2.5 2.5 0 0 0 4 0V17" />
        <line x1="10" y1="13" x2="14" y2="13" />
        <line x1="10" y1="15" x2="14" y2="15" />
    </svg>
);

const SupportIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#b1ff32]"
    >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

// --- Card Data ---
const reasons = [
    {
        icon: <PerformanceIcon />,
        title: "AI-Native Engineering",
        description:
            "Unlike generic agencies that bolt on AI as an afterthought, we architect systems where artificial intelligence is natively integrated from day one.",
    },
    {
        icon: <SecurityIcon />,
        title: "Business-Obsessed ROI",
        description:
            "We aren't just developers; we're growth partners. Every line of code we write is optimized for your revenue, efficiency, and bottom line.",
    },
    {
        icon: <AIExpertiseIcon />,
        title: "Elite Technical Talent",
        description:
            "No outsourced junior devs. You work directly with elite engineers, AI researchers, and architects who have built enterprise-grade platforms.",
    },
    {
        icon: <SupportIcon />,
        title: "True Partnership",
        description:
            "We act as an extension of your team. Transparent communication, agile sprints, and continuous post-launch optimization and support.",
    },
];

// --- Main Component ---
const WhyChooseUs: React.FC = () => {
    return (
        <section className="bg-black py-20 md:py-28 text-white">
            <div className="container mx-auto px-6">
                {/* --- Section Header --- */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-sm uppercase tracking-wider text-[#b1ff32] font-semibold mb-3">
                        Why Revotic AI
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        The Unfair Advantage Your Business Needs
                    </h2>
                    <p className="text-lg text-gray-400">
                        We combine deep AI expertise with enterprise engineering to deliver
                        solutions that actually move the needle for your business.
                    </p>
                </div>

                {/* --- Cards Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-[#b1ff32]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#b1ff32]/5"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-neutral-800 mb-5">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
