import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import productsData from "@/data/products.json";
import DemoBookingButton from "@/app/products/[slug]/DemoBookingButton";

// Icons
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#b1ff32] flex-shrink-0">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

interface Props {
  params: Promise<{ slug: string }>;
}

// Static generation
export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

// Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.slug === resolvedParams.slug);
  
  if (!product) {
    return { title: "Product Not Found | RevoticAI" };
  }

  return {
    title: `${product.title} - ${product.category} | RevoticAI`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} | RevoticAI`,
      description: product.shortDescription,
      url: `https://revoticai.com/products/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const isComingSoon = product.status === "Coming Soon";

  // Schema for SoftwareApplication
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.title,
    "applicationCategory": "BusinessApplication",
    "description": product.shortDescription,
    "operatingSystem": "Web",
    "url": `https://revoticai.com/products/${product.slug}`,
    "image": `https://revoticai.com${product.image}`,
    "publisher": {
      "@type": "Organization",
      "name": "RevoticAI"
    },
    "creator": {
      "@type": "Organization",
      "name": "RevoticAI"
    },
    "isPartOf": {
      "@type": "Website",
      "url": "https://revoticai.com"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://revoticai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://revoticai.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title,
        "item": `https://revoticai.com/products/${product.slug}`
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-black text-white pt-[120px] pb-20 md:pb-32 overflow-hidden relative border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-[10px] font-black text-gray-500 flex items-center space-x-2 mb-8 uppercase tracking-[0.3em]">
                <Link href="/" className="hover:text-[#b1ff32] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-[#b1ff32] transition-colors">Products</Link>
                <span>/</span>
                <span className="text-white">{product.title}</span>
              </nav>

              <div className="inline-block px-4 py-1.5 bg-[#b1ff32]/10 border border-[#b1ff32]/20 rounded-full mb-6">
                <span className="text-[#b1ff32] text-xs font-bold uppercase tracking-wider">{product.category}</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                {product.title}
              </h1>
              
              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-xl">
                {product.overview || product.shortDescription}
              </p>

              {!isComingSoon && (
                <div className="flex flex-wrap gap-4">
                  <DemoBookingButton productName={product.title} />
                  {product.websiteUrl !== "#" && (
                    <a href={product.websiteUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                      Visit Website
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#b1ff32]/10 blur-[60px] rounded-[3rem]" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 aspect-video">
                <Image src={product.image} alt={product.title} fill className="object-cover object-top" priority />
                {isComingSoon && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <span className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-xl uppercase tracking-widest rounded-xl backdrop-blur-md">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {!isComingSoon && (
        <>
          {/* Features Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Core Features</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to scale your operations efficiently.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {product.features?.map((feature: any, idx: number) => (
                  <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-[#b1ff32]/20 flex items-center justify-center mb-6">
                      <CheckIcon />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits & Use Cases Grid */}
          <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Benefits */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">Business Benefits</h3>
                  <ul className="space-y-4">
                    {product.benefits?.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                        <CheckIcon />
                        <span className="text-gray-800 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & Industry */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">Technology Stack</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {product.techStack?.map((tech: any, idx: number) => (
                      <div key={idx} className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{tech.name}</p>
                        <p className="text-gray-900 font-semibold">{tech.value}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Ideal For</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.useCases?.map((useCase: string, idx: number) => (
                      <span key={idx} className="px-4 py-2 bg-black text-white text-sm font-bold rounded-full">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          {product.faqs && product.faqs.length > 0 && (
            <section className="py-20 bg-white border-t border-gray-100">
              <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-6">
                  {product.faqs.map((faq: any, idx: number) => (
                    <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                      <h4 className="text-lg font-bold text-black mb-3">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Bottom CTA */}
          <section className="py-24 bg-black text-white text-center">
            <div className="container mx-auto px-6 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to see {product.title} in action?</h2>
              <p className="text-xl text-gray-400 mb-10">Schedule a personalized demo to see how we can transform your operations.</p>
              <DemoBookingButton productName={product.title} className="px-10 py-4 bg-[#b1ff32] text-black font-bold rounded-full text-lg hover:scale-105 transition-transform inline-block" />
            </div>
          </section>
        </>
      )}
    </main>
  );
}
