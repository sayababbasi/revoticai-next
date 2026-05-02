// E:\Business\Website\Revotic-AI-Website\Test_Web\revoticai\app\page.tsx
import Image from "next/image";
import Hero from "@/components/sections/Home/Hero";
import ServicesOverview from "@/components/sections/Home/ServicesOverview"
import CaseStudies from "@/components/sections/Home/CaseStudies"
import Testimonials from "@/components/sections/Home/Testimonials"
import Clients from "@/components/sections/Home/Clients"
import CTA from "@/components/sections/Home/CTA"
import LeadGenForm from "@/components/sections/Home/LeadGenForm"
import TechStack from "@/components/common/TechStack"
// import ValueProposition from "@/components//sections/Home/ValueProposition"
import ProductShowcase from "@/components//sections/Home/ProductShowcase"
// import FeaturedBlog from "@/components/sections/Home/FeaturedBlog"
// import DiscoverSection from "@/components/sections/Home/DiscoverSection"
import WorkingProcess from "@/components/sections/Home/OurWorkingProcess"
// import LeadGenPopup from "@/components/sections/Home/LeadGenForm"
import WhyChooseUs from "@/components/sections/Home/WhyChooseUs"
// import PricingTiers from "@/components/sections/Pricing/PricingTiers"


export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RevoticAI",
    "alternateName": ["Revotic AI", "Revotic", "Revo AI", "RevoticAI Pvt Ltd"],
    "url": "https://revoticai.com",
    "logo": "https://revoticai.com/images/revoticai-logo.png",
    "description": "RevoticAI is an AI automation and software development agency based in Rawalpindi, Pakistan. We build custom AI systems, web applications, and AI SaaS products.",
    "founder": {
      "@type": "Person",
      "name": "Sayab Gulfaraz"
    },
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rawalpindi",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@revoticai.com",
      "availableLanguage": ["English", "Urdu"]
    },
    "sameAs": [
      "https://youtube.com/@revoticai",
      "https://linkedin.com/company/revoticai",
      "https://instagram.com/revoticai",
      "https://twitter.com/revoticai",
      "https://github.com/revoticai"
    ],
    "knowsAbout": [
      "Artificial Intelligence", "Machine Learning", "Business Automation",
      "Web Development", "AI SaaS", "RAG Systems", "Agentic AI",
      "UI/UX Design", "Game Development"
    ]
  };

  return (
    <main>
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      /> {/* <-- ALL CLASSES REMOVED */}
      <Hero />
      <Clients />
      <ServicesOverview />
      <TechStack />
      <WhyChooseUs />
      <WorkingProcess />
      {/* <ValueProposition /> */}
      <CaseStudies />
      {/* <DiscoverSection /> */}
      <Testimonials />
      <ProductShowcase />
      {/* <PricingTiers /> */}
      <CTA />
      <LeadGenForm />
    </main>
  );
}
// Trigger hot reload
