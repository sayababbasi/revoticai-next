"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DemoBookingModal from "./DemoBookingModal";
import ProductVideoPlayer from "@/app/products/[slug]/ProductVideoPlayer";

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
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 group">
        
        {/* Top: Image */}
        <div className="w-full relative h-64 sm:h-80 bg-gray-100 overflow-hidden shrink-0">
          <ProductVideoPlayer
            image={product.image}
            title={product.title}
            isComingSoon={isComingSoon}
            video={(product as any).video}
            thumbnail={(product as any).thumbnail}
            className="relative w-full h-full"
            imageClassName={`object-cover object-top transition-transform duration-700 ${!isComingSoon ? "group-hover:scale-105" : "opacity-60"}`}
          />
        </div>

        {/* Bottom: Content */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs uppercase tracking-wider font-bold text-[#b1ff32] bg-black px-3 py-1 rounded-full">
              {product.category}
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
            {product.title}
          </h2>
          <p className="text-base text-gray-600 mb-8 flex-grow">
            {product.shortDescription}
          </p>

          {!isComingSoon && (
            <div className="mt-auto flex flex-col gap-3">
              <div className="flex gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 items-center justify-center px-4 py-3 bg-[#b1ff32] text-black font-bold rounded-xl text-sm transition-transform duration-300 hover:scale-[1.02]"
                >
                  Get Demo
                </button>
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 items-center justify-center px-4 py-3 bg-gray-900 text-white font-bold border border-gray-900 rounded-xl text-sm transition-colors duration-300 hover:bg-gray-800 text-center"
                >
                  Learn More
                </Link>
              </div>
              {product.websiteUrl && product.websiteUrl !== "#" && (
                <a
                  href={product.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-white text-gray-800 font-bold border border-gray-200 rounded-xl text-sm transition-colors duration-300 hover:bg-gray-50 text-center shadow-sm"
                >
                  Visit Website
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
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
