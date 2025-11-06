// app/services/ai-ml/page.tsx
import React from 'react';

export const metadata = {
  title: 'AI & Machine Learning Services - Revotic AI',
  description: 'Explore our AI & Machine Learning services, including custom solutions, automation, predictive analytics, and more.',
};

const AIMLServicesPage: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">AI & Machine Learning Services</h1>

      <p className="mb-6 text-lg text-gray-700">
        At Revotic AI, we help businesses harness the power of Artificial Intelligence and Machine Learning to drive innovation, automate processes, and gain data-driven insights. Our solutions are tailored to meet your unique business needs.
      </p>

      {/* Services Section */}
      <section className="grid gap-8 md:grid-cols-2 mt-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Custom AI Solutions</h2>
          <p>
            We design and implement AI models specifically for your business to solve complex problems, optimize operations, and increase efficiency.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Predictive Analytics</h2>
          <p>
            Leverage predictive modeling and data analysis to forecast trends, customer behavior, and business outcomes with high accuracy.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Automation & AI Workflows</h2>
          <p>
            Automate repetitive tasks and processes using AI-powered workflows, freeing up your team to focus on high-value activities.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">AI Consulting & Strategy</h2>
          <p>
            Our experts guide your AI journey, helping you identify opportunities, plan implementation strategies, and ensure successful adoption.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="mb-6 text-gray-700">
          Contact us today to discuss your AI & Machine Learning project and discover how we can help you innovate.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
};

export default AIMLServicesPage;
