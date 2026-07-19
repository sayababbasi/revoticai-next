import React from "react";
import { Metadata } from "next";
import ProductCard from "@/components/sections/Products/ProductCard";
import productsData from "@/data/products.json";

export const metadata: Metadata = {
  title: "AI Products & SaaS Platforms | RevoticAI",
  description: "Explore RevoticAI's flagship AI products including Wearino, Stroovo, University LMS, and D-MRSCE. Enterprise-grade AI software and automation platforms.",
  keywords: "AI products, SaaS platforms, RevoticAI products, Wearino, Stroovo, D-MRSCE, White-label LMS, AI automation software",
  openGraph: {
    title: "AI Products & SaaS Platforms | RevoticAI",
    description: "Explore RevoticAI's flagship AI products. Enterprise-grade AI software and automation platforms.",
    url: "https://revoticai.com/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Products & SaaS Platforms | RevoticAI",
    description: "Explore RevoticAI's flagship AI products. Enterprise-grade AI software and automation platforms.",
  },
};

export default function ProductsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "RevoticAI Products",
    "description": "Flagship AI products and SaaS platforms developed by RevoticAI.",
    "url": "https://revoticai.com/products",
    "publisher": {
      "@type": "Organization",
      "name": "RevoticAI",
      "logo": "https://revoticai.com/images/revoticai-logo.png"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": productsData.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://revoticai.com/products/${product.slug}`,
        "name": product.title
      }))
    }
  };

  return (
    <main>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-black text-white pt-[120px] pb-20 md:pb-28 overflow-hidden relative border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b1ff32]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <p className="text-[#b1ff32] text-xs font-black uppercase tracking-[0.4em] mb-6 inline-block">
            Our Products
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
            AI Products Built for <br />
            <span className="text-[#b1ff32]">Modern Businesses</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            RevoticAI develops enterprise-grade AI software, automation platforms, SaaS products, and intelligent business solutions designed to scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#products-grid" className="px-8 py-3 bg-[#b1ff32] text-black font-bold rounded-full transition-transform hover:scale-105">
              Explore Products
            </a>
            <a href="/contact" className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              Book Demo
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-grid" className="bg-gray-50 py-20 md:py-28 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {productsData.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Built for the Enterprise</h2>
            <p className="text-lg text-gray-600">
              Our AI products are engineered to seamlessly integrate into your existing workflows, providing scalable, secure, and intelligent solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#b1ff32]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Rapid Deployment</h3>
              <p className="text-gray-600">Launch powerful AI solutions in weeks, not months. Our modular architecture ensures fast integration.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#b1ff32]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Enterprise Security</h3>
              <p className="text-gray-600">Bank-grade security protocols, local deployment options, and strict data privacy compliance built-in.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#b1ff32]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Continuous Evolution</h3>
              <p className="text-gray-600">Our platforms continuously learn and evolve with the latest AI advancements to keep you ahead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#b1ff32]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Transform Your Operations Today</h2>
          <p className="text-xl text-gray-400 mb-10">Book a personalized demo and see how RevoticAI products can drive massive efficiency in your business.</p>
          <a href="/contact" className="px-10 py-4 bg-[#b1ff32] text-black font-bold rounded-full text-lg hover:scale-105 transition-transform inline-block shadow-[0_0_40px_rgba(177,255,50,0.3)]">
            Schedule a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
