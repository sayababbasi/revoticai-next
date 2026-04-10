
"use client";

import React from 'react';
import IndustryPageHeader from '@/components/sections/Industries/IndustryPageHeader';
import PricingTiers from '@/components/sections/Pricing/PricingTiers';
import PricingFAQ from '@/components/sections/Pricing/PricingFAQ';
import CTA from '@/components/sections/Home/CTA';

const PricingPage: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <main>
      {/* 1. Page Header (Investment Vision) */}
      <IndustryPageHeader
        title="Predictable Investment Models"
        subtitle="Scale Your Intelligence Strategically"
        description="Transparent, value-driven pricing structures designed for businesses at every stage of their AI maturity journey-from MVP to autonomous enterprise."
        breadcrumbs={breadcrumbs}
        emphasizeWord={2} // Emphasize 'Models'
      />

      {/* 2. Pricing Tiers (The Core Offering) */}
      <PricingTiers />

      {/* 3. FAQ Section (Trust & Verification) */}
      <PricingFAQ />

      {/* 4. Final CTA */}
      <CTA />
    </main>
  );
};

export default PricingPage;
