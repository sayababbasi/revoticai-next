// app/services/automation/page.tsx
import React from 'react';

export const metadata = {
  title: 'Automation Services - Revotic AI',
  description: 'Revotic AI provides cutting-edge automation solutions to streamline your business processes, reduce costs, and improve efficiency.',
};

const AutomationServicesPage: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Automation Services</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Transform your business with intelligent automation solutions. At Revotic AI, we help organizations automate repetitive tasks, optimize workflows, and enhance productivity using cutting-edge technology.
        </p>
      </section>

      {/* Services / Features Section */}
      <section className="grid gap-10 md:grid-cols-2">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Workflow Automation</h2>
          <p>
            Streamline business operations by automating routine tasks. Our workflow automation solutions help teams save time, reduce errors, and increase efficiency.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Business Process Automation (BPA)</h2>
          <p>
            Optimize your entire business process by integrating AI-driven automation. We enable faster decision-making and consistent results across all departments.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Robotic Process Automation (RPA)</h2>
          <p>
            Implement software robots to handle repetitive, rule-based tasks with precision. Reduce operational costs while improving speed and accuracy.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">AI-Powered Automation</h2>
          <p>
            Combine artificial intelligence with automation to handle complex tasks, predictive analytics, and decision-making processes intelligently and efficiently.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Revotic AI for Automation?</h2>
        <ul className="grid gap-6 md:grid-cols-3 text-gray-700">
          <li className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Increased Efficiency</h3>
            <p>Automate repetitive tasks to free up time for strategic work.</p>
          </li>
          <li className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
            <p>Reduce operational costs with minimal human intervention.</p>
          </li>
          <li className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Accuracy & Consistency</h3>
            <p>Eliminate errors and ensure consistent results across processes.</p>
          </li>
          <li className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Scalability</h3>
            <p>Automate processes to scale your business without increasing workforce.</p>
          </li>
          <li className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Intelligent Insights</h3>
            <p>Use AI-driven data analysis to make smarter decisions.</p>
          </li>
          <li className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
            <p>Tailored automation solutions designed for your unique business needs.</p>
          </li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          Partner with Revotic AI to implement intelligent automation solutions that save time, reduce costs, and improve overall business performance.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started Today
        </a>
      </section>
    </main>
  );
};

export default AutomationServicesPage;
