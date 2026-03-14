
"use client";

import React from "react";
import Link from "next/link";
import { blogPosts } from "@/components/sections/Blogs/data"; // ✅ use your shared data source
import BlogCard from "@/components/sections/Blogs/BlogCard"; // ✅ use the same BlogCard for consistency

// Inline SVG for arrow
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2 group-hover:translate-x-1 transition-transform"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const FeaturedBlog: React.FC = () => {
  // Take the first 3 blogs to feature
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="max-w-xl mb-6 md:mb-0">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">
              Industry Intelligence
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Insights & Thought Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Expert analysis on AI automation, business growth, and digital
              transformation.
            </p>
          </div>

          {/* --- View All Button --- */}
          <Link
            href="/blogs"
            className="group inline-flex items-center justify-center px-6 py-3 bg-[#b1ff32] text-black font-bold rounded-full text-base transition-transform duration-300 hover:scale-105 flex-shrink-0"
          >
            View All Posts
            <ArrowRightIcon />
          </Link>
        </div>

        {/* --- Featured Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
