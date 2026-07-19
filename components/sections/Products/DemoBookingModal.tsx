"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const DemoBookingModal: React.FC<DemoBookingModalProps> = ({
  isOpen,
  onClose,
  productName,
}) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    businessType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Aggregate the extra fields into the message to reuse existing EmailJS template
      // Existing template fields: name, email, company, message
      const aggregatedMessage = `
--- DEMO REQUEST DETAILS ---
Product: ${productName}
Phone: ${formData.phone || "N/A"}
Country: ${formData.country || "N/A"}
Business Type: ${formData.businessType || "N/A"}
Preferred Date: ${formData.preferredDate || "N/A"}
Preferred Time: ${formData.preferredTime || "N/A"}

--- USER MESSAGE ---
${formData.message || "No additional message."}
      `.trim();

      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: aggregatedMessage,
      };

      await emailjs.send(
        "service_toql1x3",
        "template_jea4yog",
        templateParams,
        "IF4WbCZuXMDeKvn5O"
      );

      setStatus("success");
      // Don't auto-close immediately so user can see success
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setFormData({
          name: "", email: "", company: "", phone: "", country: "",
          businessType: "", preferredDate: "", preferredTime: "", message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Book a Demo
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  for <span className="font-semibold text-black">{productName}</span>
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Container (Scrollable) */}
            <div className="p-8 overflow-y-auto custom-scrollbar flex-grow">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-[#b1ff32]/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#b1ff32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-2">Request Sent Successfully!</h4>
                  <p className="text-gray-600">Our team will contact you shortly to confirm your demo.</p>
                </div>
              ) : (
                <form id="demo-booking-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Basic Info */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#b1ff32]/50 focus:border-[#b1ff32] outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#b1ff32]/50 focus:border-[#b1ff32] outline-none transition-all" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                      <input type="text" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#b1ff32]/50 focus:border-[#b1ff32] outline-none transition-all" placeholder="Your Company Ltd." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#b1ff32]/50 focus:border-[#b1ff32] outline-none transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                      <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#b1ff32]/50 focus:border-[#b1ff32] outline-none transition-all" placeholder="e.g. United States" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                      <select name="businessType" value={formData.businessType} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#b1ff32]/50 focus:border-[#b1ff32] outline-none transition-all bg-white">
                        <option value="">Select...</option>
                        <option value="Enterprise">Enterprise</option>
                        <option value="Startup">Startup</option>
                        <option value="Agency">Agency</option>
                        <option value="eCommerce">eCommerce</option>
                        <option value="Education">Education</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* DateTime */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                      <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#b1ff32]/50 focus:border-[#b1ff32] outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                      <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#b1ff32]/50 focus:border-[#b1ff32] outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#b1ff32]/50 focus:border-[#b1ff32] outline-none transition-all resize-none" placeholder="What specific challenges are you looking to solve?" />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
                  )}
                </form>
              )}
            </div>

            {/* Fixed Footer for Buttons */}
            {status !== "success" && (
              <div className="px-8 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3 shrink-0">
                <button type="button" onClick={onClose} className="px-6 py-3 font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                  Cancel
                </button>
                <button type="submit" form="demo-booking-form" disabled={status === "loading"} className="px-8 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg disabled:opacity-70 flex items-center justify-center min-w-[160px]">
                  {status === "loading" ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    "Request Demo"
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DemoBookingModal;
