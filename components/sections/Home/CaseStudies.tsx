"use client";

import React from "react";
// import Link from "next/link"; // Replaced with <a> tag
import CaseStudyCard from "@/components/cards/CaseStudyCard";
import caseStudies from "@/data/case-studies.json";

const CaseStudies: React.FC = () => {
  return (
    // Dark section for contrast with the previous light section
    <section className="bg-black  py-20 md:py-28 text-white">
      <div className="container mx-auto px-6">
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          {/* Left Side: Title and Subtitle */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-wider text-[#b1ff32] font-semibold mb-3">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
          </div>

          {/* Right Side: Description and Button */}
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg text-gray-400 mb-8 max-w-lg md:ml-auto">
              See how we've transformed businesses with intelligent automation,
              AI-powered applications, and modern digital solutions that deliver
              real, measurable results.
            </p>
            <div className="md:text-left">
              {/* Use <a> tag for now */}
              <a
                href="/case-studies"
                className="inline-block bg-[#b1ff32] text-black px-7 py-3 rounded-md font-medium hover:bg-white transition-colors"
              >
                View All Case Studies
              </a>
            </div>
          </div>
        </div>

        {/* --- Case Study Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* We use .slice(0, 2) to show 2 featured studies */}
          {caseStudies.slice(0, 2).map((study, index) => (
            <CaseStudyCard
              key={index}
              tag={study.tag}
              title={study.title}
              image={study.image}
              link={study.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
