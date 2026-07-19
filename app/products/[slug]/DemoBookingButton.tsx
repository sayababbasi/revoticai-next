"use client";

import React, { useState } from "react";
import DemoBookingModal from "@/components/sections/Products/DemoBookingModal";

interface Props {
  productName: string;
  className?: string;
}

export default function DemoBookingButton({ productName, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className || "px-8 py-3 bg-[#b1ff32] text-black font-bold rounded-xl hover:bg-[#9de52c] transition-colors"}
      >
        Book a Demo
      </button>
      <DemoBookingModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        productName={productName}
      />
    </>
  );
}
