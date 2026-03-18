

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";

interface BlogCardProps {
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description?: string;
  readTime?: string;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  image,
  category,
  date,
  title,
  description,
  readTime,
  featured = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/blogs/${slug}`} className="group block h-full">
        <div className="relative bg-white border border-gray-100 rounded-[2rem] overflow-hidden flex flex-col h-full hover:border-gray-200 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
          {/* Image Container */}
          <div className={`relative ${featured ? 'h-80' : 'h-60'} overflow-hidden`}>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 z-10" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => (e.currentTarget.src = "https://placehold.co/800x600/f3f4f6/333?text=Revotic+Blog")}
            />
            
            {/* Category Badge */}
            <div className="absolute top-5 left-5 z-20">
              <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[#b1ff32] text-[9px] font-black uppercase tracking-[0.2em] rounded-full">
                {category}
              </span>
            </div>

            {/* Read Time */}
            {readTime && (
              <div className="absolute bottom-5 left-5 z-20">
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.1em] rounded-full">
                  {readTime}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-grow">
            {/* Meta */}
            <div className="flex items-center space-x-4 mb-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1.5 text-[#b1ff32]" />
                {date}
              </div>
            </div>

            <h3 className="text-xl font-black text-black mb-4 uppercase tracking-tighter group-hover:text-gray-800 transition-colors duration-300 leading-tight">
              {title}
            </h3>
            
            {description && (
              <p className="text-gray-600 text-xs leading-relaxed font-medium mb-8 line-clamp-3">
                {description}
              </p>
            )}

            {/* Footer Link */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black group-hover:text-gray-800 transition-colors duration-300 flex items-center">
                Read Article
              </span>
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-black group-hover:bg-gray-800 group-hover:text-white transition-all duration-500">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
