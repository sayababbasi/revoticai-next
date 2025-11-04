"use client";

import React from 'react';
// --- FIX: Using the standard Next.js alias (@/) which should be the correct target ---
import PageHeader from '@/components/sections/About/AboutPageHeader';
import AboutRevotic from '@/components/sections/About/AboutRevotic';
import OurMissionSection from '@/components/sections/About/Mission';
import FounderQuoteSection from '@/components/sections/About/FounderQuote';
import RecentProjectsSection from '@/components/common/RecentProjectGrid';
import VisionSection from '@/components/sections/About/Vision';
// import TeamSection from '@/components/sections/About/Team';
import ServiceGrid from '@/components/sections/Services/ServiceGrid'


const AboutPage: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <main>
      {/* 1. Reusable Header (Dark theme, uses a fixed height compensation) */}
      <PageHeader />
      <AboutRevotic />
      <VisionSection />
      <OurMissionSection />
      <FounderQuoteSection />
      <RecentProjectsSection />
      <ServiceGrid />
      
    </main>
  );
};

export default AboutPage;
