"use client";

import { useState } from "react";
import FloatingActionBar from "@/components/common/FloatingActionBar";
import LeadGenPopup from "@/components/common/LeadGenPopup";

export default function ClientWrapper() {
  const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false);

  return (
    <>
      <FloatingActionBar onOfferClick={() => setIsLeadPopupOpen(true)} />
      <LeadGenPopup
        isOpen={isLeadPopupOpen}
        setIsOpen={setIsLeadPopupOpen}
      />
    </>
  );
}
