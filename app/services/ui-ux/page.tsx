// app/services/ui-ux-design/page.tsx
import React from 'react';

export const metadata = {
  title: 'UI/UX Design Services - Revotic AI',
  description: 'Revotic AI designs intuitive, modern, and engaging user interfaces and experiences for web and mobile applications.',
};

const UIUXDesignPage: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">UI/UX Design Services</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Revotic AI creates user-centric designs that are both beautiful and functional. Our UI/UX solutions enhance user experience, increase engagement, and drive business growth.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">User Interface Design</h2>
          <p>Modern and visually appealing interfaces that align with your brand and engage users.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">User Experience Design</h2>
          <p>Intuitive and seamless experiences that guide users naturally through your applications.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Prototyping & Wireframing</h2>
          <p>Rapid prototyping to visualize, test, and refine design concepts before development.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Responsive Design</h2>
          <p>Designs optimized for all devices and screen sizes to ensure consistent user experience.</p>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Product Design?</h2>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          Collaborate with Revotic AI for user-centric UI/UX design that delights your users and grows your business.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Your Design Project
        </a>
      </section>
    </main>
  );
};

export default UIUXDesignPage;
