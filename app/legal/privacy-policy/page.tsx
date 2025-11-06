// File: app/legal/privacy-policy/page.tsx
import React from "react";
import { Metadata } from "next";


// Optional metadata for SEO
export const metadata: Metadata = {
  title: "Privacy Policy | Revotic AI",
  description:
    "Read the Privacy Policy of Revotic AI to understand how we collect, use, and protect your personal data.",
};

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          Privacy Policy
        </h1>

        <section className="space-y-6 text-gray-700">
          <p>
            At <strong>Revotic AI</strong>, your privacy is important to us. This
            Privacy Policy explains how we collect, use, and protect your personal
            information when you use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address,
            phone number, and any other details you provide when contacting us or
            using our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
          <p>
            We use your information to:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Respond to your inquiries and provide support.</li>
            <li>Improve our products and services.</li>
            <li>Send updates, newsletters, or promotional materials (if you opt-in).</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">3. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share your information
            with trusted service providers or legal authorities if required by law.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect
            your information from unauthorized access, disclosure, or misuse.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Cookies</h2>
          <p>
            Our website uses cookies and similar technologies to enhance your
            experience. You can control cookie settings through your browser.
          </p>

          <h2 className="text-2xl font-semibold mt-6">6. Your Rights</h2>
          <p>
            You have the right to access, correct, or request deletion of your
            personal data. You may also withdraw consent for certain data uses
            at any time.
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We encourage you to
            review this page periodically for the latest information.
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:management.revoticai@gmail.com" className="text-[#b1ff32] hover:underline">
              management.revoticai@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
