// "use client";

import { blogs } from "@/data/BlogDetail";
import BlogCard from "@/components/cards/BlogCard";

export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-12 text-center">Our Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <BlogCard
            key={post.id}
            slug={post.slug}
            image={post.image}
            category={post.category}
            date={post.date}
            title={post.title}
            description={post.content.slice(0, 120) + "..."}
          />
        ))}
      </div>
    </div>
  );
}
