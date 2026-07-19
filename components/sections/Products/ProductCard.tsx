"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DemoBookingModal from "./DemoBookingModal";

// Icons
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-[#b1ff32] flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 ml-2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

interface ProductCardProps {
  product: any;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isComingSoon = product.status === "Coming Soon";

  return (
    <>
      <div
        className={`bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row gap-8 ${
          index % 2 !== 0 ? "lg:flex-row-reverse" : ""
        } transition-transform duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 mb-16`}
      >
        {/* Left/Right: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-auto bg-gray-100 group overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover object-top transition-transform duration-700 ${!isComingSoon ? "group-hover:scale-105" : "opacity-80"}`}
            priority={index === 0}
          />
          {isComingSoon && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
              <span className="px-6 py-3 bg-white/20 text-white border border-white/40 font-bold uppercase tracking-widest rounded-full backdrop-blur-md">
                Coming Soon
              </span>
            </div>
          )}
        </div>

        {/* Left/Right: Content */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm uppercase tracking-wider font-semibold text-[#b1ff32] bg-black px-3 py-1 rounded">
              {product.category}
            </p>
            {product.industry && (
              <p className="text-sm text-gray-500 font-medium">
                {product.industry}
              </p>
            )}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {product.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {product.shortDescription}
          </p>

          {!isComingSoon && (
            <>
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {product.mainFeatures.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.technology.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mt-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#b1ff32] text-black font-bold rounded-lg text-base transition-transform duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  Get Demo
                </button>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-bold rounded-lg text-base transition-colors duration-300 hover:bg-gray-800"
                >
                  Learn More
                </Link>
                {product.websiteUrl !== "#" && (
                  <a
                    href={product.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-800 font-bold border border-gray-200 rounded-lg text-base transition-colors duration-300 hover:bg-gray-50"
                  >
                    Visit Website
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <DemoBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.title}
      />
    </>
  );
};

export default ProductCard;
