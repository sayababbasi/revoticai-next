import React from "react";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data/caseStudies";

import CaseStudyHero from "@/components/sections/CaseStudies/CaseStudyHero";
import CaseStudyMetrics from "@/components/sections/CaseStudies/CaseStudyMetrics";
import CaseStudyContent from "@/components/sections/CaseStudies/CaseStudyContent";
import WearinoContent from "@/components/sections/CaseStudies/WearinoContent";
import CaseStudyQuote from "@/components/sections/CaseStudies/CaseStudyQuote";
import RelatedCases from "@/components/sections/CaseStudies/RelatedCases";
import LeadGenForm from "@/components/sections/Home/LeadGenForm";

// Generate static params for build time (optional but good practice)
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find(cs => cs.slug === resolvedParams.slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.client} Case Study | Revotic AI`,
    description: study.problem,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find(cs => cs.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="bg-black min-h-screen">
      <CaseStudyHero study={study} />
      <CaseStudyMetrics study={study} />
      {study.slug === "wearino-ecommerce" ? (
        <WearinoContent study={study} />
      ) : (
        <CaseStudyContent study={study} />
      )}
      {study.quote && <CaseStudyQuote quote={study.quote} />}
      <RelatedCases currentSlug={study.slug} />
      <LeadGenForm />
    </main>
  );
}
