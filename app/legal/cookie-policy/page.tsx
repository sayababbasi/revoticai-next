import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | RevoticAI",
  description:
    "Read the Cookie Policy of RevoticAI to understand how we use cookies and similar technologies to enhance your experience.",
  robots: {
    index: true,
    follow: true
  }
};

const CookiePolicyPage: React.FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          Cookie Policy
        </h1>

        <section className="space-y-6 text-gray-700">
          <p>
            This Cookie Policy explains how <strong>Revotic AI</strong> uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Why do we use cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our online properties. Third parties serve cookies through our website for advertising, analytics, and other purposes.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Types of Cookies We Use</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</li>
            <li><strong>Performance and Functionality Cookies:</strong> These are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</li>
            <li><strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">4. How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
          </p>
          <p>
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Updates to this Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>

          <h2 className="text-2xl font-semibold mt-6">6. Contact Us</h2>
          <p>
            If you have questions about this Cookie Policy, please contact us at{" "}
            <a href="mailto:hello@revoticai.com" className="text-[#b1ff32] hover:underline">
              hello@revoticai.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default CookiePolicyPage;
