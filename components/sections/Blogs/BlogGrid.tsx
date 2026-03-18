"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogs } from "@/lib/data/blog";
import BlogCard from "@/components/cards/BlogCard";
import NewsletterCTA from "./NewsletterCTA";

const categories = ["All", "AI & ML", "Web Development", "Automation", "Design", "Company Insight"];

const BlogGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = blogs.filter(
    (blog) => activeCategory === "All" || blog.category === activeCategory
  );

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                activeCategory === cat
                  ? "bg-[#b1ff32] text-black border-[#b1ff32] shadow-[0_10px_30px_rgba(177,255,50,0.3)]"
                  : "bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-black shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className="space-y-12">
          {/* Main Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog, index) => {
                // Featured Post Logic: First item spans 2 columns in All category
                const isFeatured = index === 0 && activeCategory === "All";

                return (
                  <React.Fragment key={blog.id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className={isFeatured ? "md:col-span-2 lg:col-span-2" : ""}
                    >
                      <BlogCard
                        slug={blog.slug}
                        image={blog.image}
                        category={blog.category}
                        date={blog.date}
                        title={blog.title}
                        description={blog.content.replace(/<[^>]*>/g, "").slice(0, isFeatured ? 250 : 150) + "..."}
                        readTime={blog.readTime}
                        featured={isFeatured}
                      />
                    </motion.div>

                    {/* Newsletter Injection: After first 2 items (Featured + 1) */}
                    {index === 0 && activeCategory === "All" && (
                      <div className="md:hidden lg:hidden col-span-full">
                         <NewsletterCTA />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Desktop/Tablet Newsletter Injection */}
          {activeCategory === "All" && filteredBlogs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <NewsletterCTA />
            </motion.div>
          )}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-medium">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
