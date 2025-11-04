"use client";

import React, { useState } from "react";
// Using relative path to avoid build errors
import Button from "../../common/Button"; 

// --- Inlined SVG Icons (to prevent build errors) ---
const CheckIcon = () => (
// ... existing code ...
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const SparkleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.39-3.47 3.385a.75.75 0 00.42 1.285l4.386.654 1.94 4.192a.75.75 0 001.372 0l1.94-4.192 4.386-.654a.75.75 0 00.42-1.285l-3.47-3.385-4.753-.39-1.83-4.401z"
      clipRule="evenodd"
    />
  </svg>
);

const SpinnerIcon = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

// --- Main Lead Generation Form Component ---
const LeadGenForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI & ML Automation",
    message: "",
  });
  // --- New state for the Gemini feature ---
  const [projectIdea, setProjectIdea] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- NEW: Function to call the Gemini API ---
  const handleGenerateMessage = async () => {
    if (!projectIdea) {
      setStatus({ type: "error", message: "Please enter your project idea first." });
      return;
    }
    if (!formData.service) {
      setStatus({ type: "error", message: "Please select a service." });
      return;
    }

    setIsGenerating(true);
    setStatus({ type: "", message: "" });

    try {
      // Calls the new API route
      const response = await fetch("/api/gemini/generate-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idea: projectIdea,
          service: formData.service,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate message.");
      }

      const data = await response.json();
      
      if (data.text) {
        // Auto-fills the message text area
        setFormData((prev) => ({ ...prev, message: data.text }));
        setStatus({ type: "success", message: "Message generated! Feel free to edit it." });
      } else {
        throw new Error("No text was generated.");
      }

    } catch (error) {
      console.error("Gemini API error:", error);
      setStatus({ type: "error", message: "Sorry, we couldn't generate a message. Please try again." });
    } finally {
      setIsGenerating(false);
    }
  };

  // --- This is the original form submission ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// ... existing code ...
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
// ... existing code ...
      // ... (your existing fetch to /api/contact/send-message) ...
      // This part remains the same.
      // For this example, we'll just simulate success.
      await new Promise(res => setTimeout(res, 1000));
      
      setStatus({
        type: "success",
        message: "Message sent! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", service: "AI & ML Automation", message: "" });
      setProjectIdea(""); // Clear the idea field too
    } catch (error) {
// ... existing code ...
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="bg-gray-50 py-20 md:py-28">
// ... existing code ...
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- Left Side: Content --- */}
        <div className="max-w-lg">
// ... existing code ...
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Let's Build Your Next Big Idea
          </h2>
// ... existing code ...
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-gray-700">
                AI-Powered Automation
              </span>
            </li>
// ... existing code ...
          </ul>
        </div>

        {/* --- Right Side: Form --- */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-black mb-6">
            Get a Free Consultation
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
// ... existing code ...
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
// ... existing code ...
                onChange={handleChange}
                required
              />
            </div>
            <div>
// ... existing code ...
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
// ... existing code ...
                onChange={handleChange}
                required
              />
            </div>
            <div>
// ... existing code ...
              <select
                name="service"
                id="service"
// ... existing code ...
                onChange={handleChange}
                required
              >
                <option>AI & ML Automation</option>
                <option>AI SaaS Products</option>
// ... existing code ...
                <option>AI-Powered App Development</option>
                <option>Personalized AI Dashboards</option>
              </select>
            </div>

            {/* --- NEW: Gemini Feature Fields --- */}
            <div>
              <label htmlFor="projectIdea" className="block text-sm font-medium text-gray-700 mb-2">
                What's your project idea? (Optional)
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  name="projectIdea"
                  id="projectIdea"
                  placeholder="e.g., 'An AI chatbot for my e-commerce site'"
                  className="w-full flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b1ff32] focus:border-transparent"
                  value={projectIdea}
                  onChange={(e) => setProjectIdea(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleGenerateMessage}
                  disabled={isGenerating}
                  className="flex-shrink-0 flex items-center justify-center px-4 py-3 bg-[#b1ff32] text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <SpinnerIcon />
                  ) : (
                    <SparkleIcon />
                  )}
                  <span className="ml-2">
                    {isGenerating ? "Generating..." : "Help me write this"}
                  </span>
                </button>
              </div>
            </div>
            {/* --- End of New Fields --- */}

            <div>
// ... existing code ...
              <textarea
                name="message"
                id="message"
                placeholder="Tell us about your project..."
// ... existing code ...
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            {/* Form Status Messages */}
            {status.message && (
              <div
                className={`text-sm ${
                  status.type === "success" ? "text-green-600" : ""
                } ${
                  status.type === "error" ? "text-red-600" : ""
                } ${
                  status.type === "loading" ? "text-gray-600" : ""
                }`}
              >
                {status.message}
              </div>
            )}

            <div>
              {/* Using the Button component */}
              <Button
                type="submit"
                variant="primary"
                className="w-full justify-center py-4 text-lg"
                disabled={status.type === "loading"}
              >
                {status.type === "loading" ? "Sending..." : "Submit Request"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadGenForm;