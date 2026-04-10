// Developed by SAYAB.
"use client";

import React from "react";

const BottomTrustBar: React.FC = () => {
    const partners = ["OpenAI", "Vercel", "MongoDB", "AWS", "Google Cloud", "Stripe"];

    return (
        <div className="w-full bg-white border-t border-[#e8e8e8] py-[20px] px-6 md:px-[48px]">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                <span className="font-dmSans text-[11px] font-[600] text-[#bbb] uppercase tracking-[0.12em]">
                    Trusted Tech Partners
                </span>
                <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-[32px]">
                    {partners.map((partner) => (
                        <span key={partner} className="font-syne font-[700] text-[13px] text-[#ccc] hover:text-[#bbb] transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BottomTrustBar;
