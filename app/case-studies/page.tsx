import { Metadata } from "next";
import React from "react";
import CaseStudiesHeader from "@/components/sections/CaseStudies/CaseStudiesHeader";
import CaseStudyGrid from "@/components/sections/CaseStudies/CaseStudyGrid";
import LeadGenForm from "@/components/sections/Home/LeadGenForm";

export const metadata: Metadata = {
  title: "Case Studies | RevoticAI — Real AI Solutions Deployed",
  description: "Explore our portfolio of high-impact AI and automation deployments. See how RevoticAI builds real AI solutions for businesses.",
  keywords: [
    'RevoticAI case studies', 'AI projects', 'AI solutions Pakistan',
    'automation case studies', 'AI implementation', 'machine learning projects',
    'RAG pipeline projects', 'AI business solutions'
  ],
  openGraph: {
    title: 'Case Studies | RevoticAI — AI Solutions in Action',
    description: 'Real-world AI and automation projects built by RevoticAI.',
    images: [{ url: 'https://revoticai.com/og-image.jpg', width: 1200, height: 630 }],
  }
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-black min-h-screen">
      <CaseStudiesHeader />
      <CaseStudyGrid />
      <LeadGenForm />
    </main>
  );
}
