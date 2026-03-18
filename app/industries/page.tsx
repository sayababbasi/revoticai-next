
"use client";

import React from 'react';
import IndustryPageHeader from '@/components/sections/Industries/IndustryPageHeader';
import IndustryVerticals from '@/components/sections/Industries/IndustryVerticals';
import CTA from '@/components/sections/Home/CTA';
import Clients from '@/components/sections/Home/Clients';

const IndustriesPage: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Industries', href: '/industries' },
  ];

  return (
    <main>
      {/* 1. Page Header (The Visionary Entry) */}
      <IndustryPageHeader 
        title="AI-Driven Vertical Excellence"
        subtitle="Strategic Solutions for Global Industries"
        description="Fueling transformation across healthcare, finance, logistics, and more with specialized AI architectures designed for maximum ROI and scalability."
        breadcrumbs={breadcrumbs}
        emphasizeWord={1} // Emphasize 'Driven' or 'Vertical'
      />
      
      {/* 2. Industry Verticals (The ROI Engine) */}
      <IndustryVerticals />

      {/* 3. Clients & Results */}
      <div className="bg-gray-50">
        <Clients />
      </div>

      {/* 4. Final CTA */}
      <CTA />
    </main>
  );
};

export default IndustriesPage;
