"use client";

import React from 'react';
// --- FIX: Using the CORRECTED relative path from /app/experts to /components/ ---
import ExpertsPageHeader from '@/components/sections/Experts/ExpertsPageHeader';
import TeamSection from '@/components/sections/Experts/TeamSection'; // Reusing the team grid component
import CTA from '@/components/sections/Home/CTA';
import Clients from '@/components/sections/Home/Clients';

import ServiceVerticalsSection from '@/components/sections/Services/ServiceVerticalsSection';
import ServiceGrid from '@/components/sections/Services/ServiceGrid';

// --- Dedicated Contact Section for this page (Inline for stability) ---
const ExpertContactSection = () => (
    <div className="bg-neutral-900 py-20 md:py-28 text-center text-white">
        <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-4xl font-bold text-white mb-4">
                Ready for Expert Consultation?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
                Our AI masters are ready to analyze your business needs and craft a scalable solution. 
                Book a strategic session today.
            </p>
            <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-black bg-[#b1ff32] rounded-full hover:bg-white transition-all duration-300 shadow-lg group"
            >
                Schedule Consultation
            </a>
        </div>
    </div>
);


const ExpertsPage: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Experts', href: '/experts' },
  ];

  return (
    <main>
      {/* 1. Page Header (The Professional Hero) */}
      <ExpertsPageHeader 
        title="Meet Our AI Masters"
        subtitle="Specialized Knowledge, Real Results"
        description="Our team comprises seasoned engineers and strategists dedicated to leading the industry in AI, ML, and business automation."
        breadcrumbs={breadcrumbs}
        emphasizeWord={3} // Emphasize 'AI'
      />
      
      {/* 2. Main Experts Grid (Reusing TeamSection) */}
      <TeamSection />

      <CTA />
      {/* 3. Expert Contact Section */}
      {/* <ExpertContactSection /> */}

      {/* 4. Clients Showcase */}
      <Clients />
      {/* 4. Services from that  */}
      <ServiceVerticalsSection />
      <ServiceGrid />
    </main>
  );
};

export default ExpertsPage;
