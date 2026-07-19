"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductVideoPlayerProps {
  image: string;
  title: string;
  isComingSoon: boolean;
  video?: string;
  thumbnail?: string;
  className?: string;
  imageClassName?: string;
}

export default function ProductVideoPlayer({
  image,
  title,
  isComingSoon,
  video,
  thumbnail,
  className,
  imageClassName,
}: ProductVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const displayImage = thumbnail || image;

  return (
    <div className={className || "relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 aspect-video group w-full h-full"}>
      {!isPlaying ? (
        <>
          <Image
            src={displayImage}
            alt={title}
            fill
            className={imageClassName || "object-cover object-top"}
            priority
          />

          {isComingSoon && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-10">
              <span className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-xl uppercase tracking-widest rounded-xl backdrop-blur-md">
                Coming Soon
              </span>
            </div>
          )}

          {video && !isComingSoon && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-black/40 transition-all duration-300">
              <button
                onClick={() => setIsPlaying(true)}
                className="relative group/btn flex items-center justify-center w-20 h-20 rounded-full bg-[#b1ff32] text-black shadow-[0_0_40px_rgba(177,255,50,0.4)] hover:scale-110 transition-transform duration-300"
                aria-label="Play Demo Video"
              >
                {/* Ripple Effect Behind */}
                <span className="absolute inset-0 rounded-full border-2 border-[#b1ff32] animate-ping opacity-75"></span>
                <span className="absolute -inset-4 rounded-full border border-[#b1ff32]/50 animate-pulse"></span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 ml-1 z-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </>
      ) : (
        <video
          src={video}
          controls
          autoPlay
          className="w-full h-full object-contain bg-black"
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
