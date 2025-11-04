"use client";

import React from "react";
import Link from "next/link";
import ServiceCard from "@/components/cards/ServiceCard";
import services from "@/data/services.json";

const ServicesOverview: React.FC = () => {
  return (
    // This section contrasts with the black Hero by using a white background
    <section className="bg-white py-20 md:py-28 text-black">
      <div className="container mx-auto px-6">
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          {/* Left Side: Title and Subtitle */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-wider text-grey-700 font-semibold mb-3">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Smarter, Faster, Future-Ready Solutions
            </h2>
          </div>

          {/* Right Side: Description and Button */}
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg text-gray-700 mb-8 max-w-lg md:ml-auto">
              From AI-powered automation to full-stack development, we create
              intelligent products designed to make technology smarter, faster,
              and more personalized for your users.
            </p>
            <div className="md:text-left">
              <Link
                href="/services"
                className="inline-block bg-black text-white px-7 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>

        {/* --- Service Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* We use .slice(0, 6) to show a max of 6 services on the homepage */}
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
