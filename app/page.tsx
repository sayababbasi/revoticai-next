// E:\Business\Website\Revotic-AI-Website\Test_Web\revoticai\app\page.tsx
"use client";
import Image from "next/image";

import Hero from "@/components/sections/Home/Hero";
import ServicesOverview from "@/components/sections/Home/ServicesOverview"
import CaseStudies from "@/components/sections/Home/CaseStudies"
import Testimonials from "@/components/sections/Home/Testimonials"
import Clients from "@/components/sections/Home/Clients"
import CTA from "@/components/sections/Home/CTA"
import LeadGenForm from "@/components/sections/Home/LeadGenForm"
import TechStack from "@/components/common/TechStack"
import ValueProposition from "@/components//sections/Home/ValueProposition"
import ProductShowcase from "@/components//sections/Home/ProductShowcase"
import FeaturedBlog from "@/components/sections/Home/FeaturedBlog"
import DiscoverSection from "@/components/sections/Home/DiscoverSection"
import Reviews from "@/components/sections/Home/Reviews"
import WorkingProcess from "@/components/sections/Home/OurWorkingProcess"
import LeadGenPopup from "@/components/sections/Home/LeadGenForm"


export default function Home() {
  return (
    <main> {/* <-- ALL CLASSES REMOVED */}
      <Hero />
      <ServicesOverview />
      <CaseStudies />
      <Testimonials />
      <Clients />
      <TechStack />
      <ValueProposition />
      <CTA />
      <LeadGenForm />
      <ProductShowcase />
      <DiscoverSection />
      <FeaturedBlog />
      <Reviews />
      <WorkingProcess />
      {/* <LeadGenPopup /> */}
      {/* ...other sections... */}
    </main>
  );
}