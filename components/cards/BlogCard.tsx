"use client";

import React from "react";
// Using <a> tag as a fallback for Link to avoid build errors
// import Link from "next/link";

// Inline SVG as a fallback for ArrowRight
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
    className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

interface BlogCardProps {
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  image,
  category,
  date,
  title,
  description,
}) => {
  const placeholderImg =
    "https://placehold.co/1000x600/f1f5f9/94a3b8?text=Blog+Post";
  const postUrl = `/blog/${slug}`;

  return (
    <a
      href={postUrl}
      className="group flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image || placeholderImg}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          onError={(e) => (e.currentTarget.src = placeholderImg)}
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        {/* Metadata */}
        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <span className="font-medium text-[#b1ff32]">{category}</span>
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base mb-6 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Read More Link */}
        <span className="inline-flex items-center font-semibold text-black group-hover:text-[#b1ff32] transition-colors duration-300 mt-auto">
          Read More
          <ArrowRightIcon />
        </span>
      </div>
    </a>
  );
};

export default BlogCard;

