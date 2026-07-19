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
      <section id="products-grid" className="bg-gray-50 py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col gap-16 md:gap-24">
            {productsData.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
