"use client";

import React from 'react';
// --- FIX: Using the standard Next.js alias (@/) which should be the correct target ---
import PageHeader from '@/components/sections/About/AboutPageHeader';
import AboutRevotic from '@/components/sections/About/AboutRevotic';
import OurMissionSection from '@/components/sections/About/Mission';
import FounderQuoteSection from '@/components/sections/About/FounderQuote';
import RecentProjectsSection from '@/components/common/RecentProjectGrid';
import VisionSection from '@/components/sections/About/Vision';
import TeamSection from '@/components/sections/About/Team';
import LeadGenForm from '@/components/sections/Home/LeadGenForm';

const AboutPage: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sayab Gulfaraz",
    "alternateName": ["Sayab Abbasi", "Sayab", "Sayab CEO RevoticAI"],
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "RevoticAI",
      "url": "https://revoticai.com"
    },
    "url": "https://revoticai.com/about",
    "image": "https://revoticai.com/images/sayab-gulfaraz.jpg",
    "description": "Sayab Gulfaraz is the Founder and CEO of RevoticAI, an AI automation and software development agency based in Rawalpindi, Pakistan. He is a final-year AI student and entrepreneur building AI-powered products.",
    "sameAs": [
      "https://linkedin.com/in/sayabgulfaraz",
      "https://twitter.com/sayabgulfaraz",
      "https://youtube.com/@revoticai",
      "https://instagram.com/sayabgulfaraz",
      "https://github.com/sayabgulfaraz"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rawalpindi",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "knowsAbout": [
      "Artificial Intelligence", "Machine Learning", "Business Automation",
      "Web Development", "AI SaaS Products", "Next.js", "FastAPI", "Python"
    ]
  };

  return (
    <main className="bg-black">
      {/* JSON-LD Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* 1. Premium Dark Header */}
      <PageHeader />

      {/* 2. The Revotic Story (Origins & Metrics) */}
      <AboutRevotic />

      {/* 3. High-Impact Vision Section */}
      <VisionSection />

      {/* 4. Glassmorphism Mission & Values */}
      <OurMissionSection />

      {/* 7. Final Call to Action */}
      <LeadGenForm />
      {/* 5. Visionary Founder Profile */}
      <FounderQuoteSection />

      {/* 6. Elite Team Grid */}
      <TeamSection />

    </main>
  );
};

export default AboutPage;
