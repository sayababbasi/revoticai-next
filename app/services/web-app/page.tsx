// app/services/web-development/page.tsx
import React from 'react';

export const metadata = {
  title: 'Web Development Services - Revotic AI',
  description: 'Professional web development services including dynamic websites, e-commerce, and full-stack applications.',
};

const WebDevelopmentPage: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Web Development Services</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Build scalable, secure, and modern websites with Revotic AI. We specialize in full-stack development, e-commerce platforms, and dynamic web applications tailored to your business.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Full-Stack Web Development</h2>
          <p>Custom web applications built with the latest frontend and backend technologies.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">E-Commerce Solutions</h2>
          <p>Dynamic online stores with payment integration, inventory management, and user-friendly UX.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Website Maintenance & Optimization</h2>
          <p>Keep your website secure, fast, and optimized for SEO and performance.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Responsive & Modern UI/UX</h2>
          <p>Designs that look great on any device and provide seamless user experiences.</p>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          Partner with Revotic AI to develop modern and scalable web solutions that grow your business.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Your Project
        </a>
      </section>
    </main>
  );
};

export default WebDevelopmentPage;
