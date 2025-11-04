"use client";

import React from 'react';
// --- FIX: Using the CORRECTED relative path from /app/portfolio to /components/ ---
import PortfolioPageHeader from '@/components/sections/Portfolio/PortfolioPageHeader';
import CTA from '@/components/sections/Home/CTA';
// NOTE: We will use a dedicated component for the project listing
// import PortfolioGrid from '@/components/sections/Portfolio/PortfolioGrid'; 
import ServiceGrid from '@/components/sections/Services/ServiceGrid'

const PortfolioPage: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  return (
    <main>
      {/* 1. Page Header (The Attractive Hero for this page) */}
      <PortfolioPageHeader 
        title="Our Digital Legacy"
        subtitle="Success Stories and Client Work"
        description="Explore the innovative solutions we’ve delivered across AI, machine learning, and full-stack development, driving measurable results for global partners."
        breadcrumbs={breadcrumbs}
        emphasizeWord={2} // Emphasize 'Digital'
      /> 
      
      {/* 2. Portfolio Grid (The main content area) */}

      {/* 3. Final Call to Action */}
      <CTA />
      <ServiceGrid />
    </main>
  );
};

export default PortfolioPage;
