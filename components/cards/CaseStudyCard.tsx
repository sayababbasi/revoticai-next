"use client";

import React from "react";
// import Link from "next/link"; // Replaced with <a> tag
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  tag: string;
  title: string;
  image: string;
  link: string;
  metric?: string;
  metricLabel?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  tag,
  title,
  image,
  link,
  metric,
  metricLabel,
}) => {
  const placeholderImg = "https://placehold.co/1000x800/1a1a1a/333333?text=Project";

  return (
    <a
      href={link}
      className="group block relative overflow-hidden rounded-xl shadow-lg"
    >
      {/* Background Image */}
      <img
        src={image || placeholderImg}
        alt={title}
        className="w-full h-96 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        onError={(e) => (e.currentTarget.src = placeholderImg)}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <p className="text-sm uppercase tracking-wider text-[#b1ff32] font-semibold mb-2">
            {tag}
          </p>
          <h3 className="text-3xl font-bold mb-4">{title}</h3>

          {metric && metricLabel && (
            <div className="flex items-center gap-3 mb-6 bg-black/40 backdrop-blur-sm p-3 rounded-lg border border-white/10 w-fit">
              <span className="text-3xl font-bold text-[#b1ff32]">{metric}</span>
              <span className="text-sm text-gray-300 font-medium leading-tight max-w-[120px]">{metricLabel}</span>
            </div>
          )}

          <span className="inline-flex items-center font-medium group-hover:text-[#b1ff32] transition-colors duration-300">
            Read Case Study
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default CaseStudyCard;
