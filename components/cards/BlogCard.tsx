

"use client";

import React from "react";
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  image,
  category,
  date,
  title,
  description,
}) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <p className="text-sm text-gray-500 mb-1">
            {category} • {date}
          </p>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
