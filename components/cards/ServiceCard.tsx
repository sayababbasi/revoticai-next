"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Globe,
  Zap,
  Gamepad2,
  Sparkles,
  PenTool,
  Icon as LucideIcon,
} from "lucide-react";

// An icon map to dynamically render icons based on the string from JSON
const iconMap: { [key: string]: LucideIcon } = {
  Brain,
  Globe,
  Zap,
  Gamepad2,
  Sparkles,
  PenTool,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  // Look up the icon component from the map, default to Brain
  const IconComponent = iconMap[icon] || Brain;

  return (
    <div className="group relative flex flex-col rounded-xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex-1">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 text-[#b1ff32] mb-5">
          <IconComponent size={24} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      </div>

      {/* Learn More Link */}
      <Link
        href={link}
        className="font-semibold text-black inline-flex items-center group-hover:text-[#b1ff32] transition-colors"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
