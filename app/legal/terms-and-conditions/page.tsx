// app/legal/terms-and-conditions/page.tsx
import React from 'react';

export const metadata = {
  title: 'Terms and Conditions - Revotic AI',
  description: 'Read the Terms and Conditions of using Revotic AI services.',
};

const TermsAndConditionsPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to Revotic AI. By accessing or using our website, services, or products, you agree to be bound by the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of Services</h2>
      <p className="mb-4">
        You agree to use our services only for lawful purposes and in accordance with these Terms. Unauthorized use of our services may give rise to a claim for damages and/or be a criminal offense.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property</h2>
      <p className="mb-4">
        All content, logos, and materials on this website are the intellectual property of Revotic AI. You may not copy, reproduce, or distribute any content without prior written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Limitation of Liability</h2>
      <p className="mb-4">
        Revotic AI will not be liable for any damages arising from the use or inability to use our services. We make no warranties about the accuracy or reliability of our website or services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update these Terms and Conditions at any time. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at <a href="mailto:contact@revotic.ai" className="text-blue-600 underline">contact@revotic.ai</a>.
      </p>
    </main>
  );
};

export default TermsAndConditionsPage;
