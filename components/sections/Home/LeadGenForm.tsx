"use client";

import React, { useState } from "react";
// Using an inline icon to avoid import errors
// import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// --- Inline Icons (to avoid import errors) ---
const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const LoaderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="animate-spin"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);
// --- End of Inline Icons ---

// Reusable Input Field (Inlined to avoid import errors)
interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: string;
  as?: "textarea";
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  as,
  ...props
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    {as === "textarea" ? (
      <textarea
        id={name}
        name={name}
        rows={4}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b1ff32] focus:ring-2 focus:ring-[#b1ff32]/50 sm:text-sm"
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    ) : (
      <input
        id={name}
        name={name}
        type="text"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b1ff32] focus:ring-2 focus:ring-[#b1ff32]/50 sm:text-sm px-3 py-2"
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    )}
  </div>
);

// --- Main Lead Generation Form Component ---
const LeadGenForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" }); // Clear form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- 1. Left Side: Text Content --- */}
          <div className="max-w-lg">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We help startups and enterprises transform ideas into
              AI-powered realities. Tell us about your goal, and we'll
              get back to you with a plan.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <CheckCircleIcon />
                <span className="ml-3 text-lg">Free 30-Minute Consultation</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon />
                <span className="ml-3 text-lg">Expert AI Strategy & Roadmap</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon />
                <span className="ml-3 text-lg">Detailed Project & Cost Analysis</span>
              </li>
            </ul>
          </div>

          {/* --- 2. Right Side: Form --- */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            {status === "success" ? (
              // --- Success Message ---
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                <CheckCircleIcon />
                <h3 className="text-2xl font-bold text-black mt-4 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thanks for reaching out. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              // --- Form ---
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Work Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
                <InputField
                  label="How can we help?"
                  name="message"
                  as="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group w-full flex items-center justify-center px-8 py-3 bg-[#b1ff32] text-black font-bold rounded-full text-base transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <LoaderIcon />
                        <span className="ml-2">Sending...</span>
                      </>
                    ) : (
                      "Send Your Request"
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <div className="flex items-center text-sm text-red-600">
                    <AlertCircleIcon />
                    <span className="ml-2">
                      Something went wrong. Please try again.
                    </span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenForm;
