"use client";

import React from "react";

// --- Data for the 4 Process Steps ---
const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your operations to identify high-impact automation opportunities and map a clear ROI.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "We architect robust, scalable solutions and design intuitive interfaces tailored exactly to your business.",
  },
  {
    step: "03",
    title: "Development & QA",
    description: "Agile sprints and rigorous testing ensure your AI tools and platforms are built to enterprise standards.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Seamless deployment with continuous monitoring, optimization, and strategic support for long-term scale.",
  },
];

const WorkingProcess: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 text-center md:text-left md:flex md:items-end md:justify-between">
        <div className="max-w-xl mx-auto md:mx-0">
          <p className="text-sm uppercase tracking-wider text-[#b1ff32] font-semibold mb-3">
            Our Working Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            From Discovery to Deployment
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-6 relative mt-16 md:mt-24">
        {/* Horizontal Line for Desktop */}
        <div className="hidden md:block absolute top-[28px] left-[4%] right-[4%] h-[2px] bg-neutral-800 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10 w-full">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center md:items-start group">
              {/* Step Circle */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black border-2 border-neutral-700 flex items-center justify-center text-lg md:text-xl font-bold text-[#b1ff32] mb-6 relative z-10 transition-colors duration-500 group-hover:border-[#b1ff32] group-hover:bg-neutral-900 group-hover:shadow-[0_0_20px_rgba(177,255,50,0.2)]">
                {step.step}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 text-center md:text-left">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
