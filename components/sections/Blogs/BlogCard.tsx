"use client";

import React from "react";
import { motion } from "framer-motion";

// --- ICONS ---
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
    <line x1="5" y1="8" x2="15" y2="8" />
    <polyline points="10 3 15 8 10 13" />
  </svg>
);
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// --- ANIMATION VARIANTS ---
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- TYPE ---
export interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  link: string;
}

// --- COMPONENT ---
const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <motion.a
    href={post.link}
    className="group block bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    variants={itemVariants}
    layout
  >
    <div className="h-56 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        onError={(e) =>
          (e.currentTarget.src = "https://placehold.co/600x400/1a1a1a/b1ff32?text=Blog+Post")
        }
      />
    </div>

    <div className="p-6">
      <p className="text-xs uppercase tracking-wider font-semibold text-[#b1ff32] mb-2">
        {post.category}
      </p>

      <h3 className="text-xl font-bold text-black mb-3 h-14 overflow-hidden">
        {post.title}
      </h3>

      <div className="flex justify-between text-xs text-gray-500 mb-4 border-t border-b border-gray-100 py-3">
        <span className="flex items-center">
          <UserIcon /> {post.author}
        </span>
        <span className="flex items-center">
          <CalendarIcon /> {post.date}
        </span>
      </div>

      <span className="inline-flex items-center text-sm font-semibold text-black group-hover:text-[#b1ff32] transition-colors">
        Read More <ArrowRightIcon />
      </span>
    </div>
  </motion.a>
);

export default BlogCard;
