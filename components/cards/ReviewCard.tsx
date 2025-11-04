"use client";

import React from "react";

// Inline Star Icon
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "#facc15" : "none"} // Using yellow for filled, none for empty
    stroke={filled ? "#facc15" : "#9ca3af"} // Yellow border or gray border
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

interface ReviewCardProps {
  name: string;
  title: string;
  image: string;
  rating: number;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  title,
  image,
  rating,
  review,
}) => {
  const placeholderImg = `https://placehold.co/100x100/e0e0e0/999?text=${name
    .split(" ")
    .map((n) => n[0])
    .join("")}`;

  return (
    <div className="bg-white h-full rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col">
      {/* Star Rating */}
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} filled={index < rating} />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-base md:text-lg mb-6 flex-grow">
        "{review}"
      </p>

      {/* Author Info */}
      <div className="flex items-center mt-auto flex-shrink-0">
        <img
          src={image || placeholderImg}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-100"
          onError={(e) => (e.currentTarget.src = placeholderImg)}
        />
        <div>
          <h4 className="text-base font-bold text-black">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
