"use client";

import React from "react";
import ProcessHeader from "@/components/sections/Process/ProcessHeader";
import StrategicWorkflow from "@/components/sections/Process/StrategicWorkflow";
import DeliveryStandard from "@/components/sections/Process/DeliveryStandard";
import LeadGenForm from "@/components/sections/Home/LeadGenForm";
import FloatingActionBar from "@/components/common/FloatingActionBar";

export default function ProcessPage() {
  return (
    <main className="bg-black min-h-screen">
      <ProcessHeader />
      <StrategicWorkflow />
      <DeliveryStandard />
      
      {/* Final CTA Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-900/50 p-12 md:p-20 relative">
             {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b1ff32]/5 blur-[100px] pointer-events-none" />
            
            <div className="text-center mb-12 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
                Ready to Start <br /> <span className="text-[#b1ff32]">Phase 01?</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium max-w-xl mx-auto">
                The first step is a Discovery call. We'll audit your current tech, map out your objectives, and provide a clear ROI projection.
              </p>
            </div>
            
            <div className="max-w-xl mx-auto relative z-10">
              <LeadGenForm minimal />
            </div>
          </div>
        </div>
      </section>

      <FloatingActionBar />
    </main>
  );
}
