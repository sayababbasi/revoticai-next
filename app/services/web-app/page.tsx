// app/services/web-app/page.tsx
import React from 'react';

export const metadata = {
  title: 'Web Development Services - Revotic AI',
  description: 'Professional web development services including dynamic websites, e-commerce, and full-stack applications.',
};

const WebDevelopmentPage: React.FC = () => {
  return (
    <main>
      <section className="bg-black text-white pt-[100px] pb-16 md:pb-24 overflow-hidden relative border-b border-white/5">
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase">
            Web & <span className="text-[#b1ff32]">App Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Build scalable, secure, and modern websites with Revotic AI. We specialize in full-stack development and intelligent applications tailored to your business.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <section className="grid gap-10 md:grid-cols-2">
          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Full-Stack Development</h2>
            <p className="text-gray-400 leading-relaxed">Custom web applications built with the latest frontend and backend technologies.</p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">E-Commerce Solutions</h2>
            <p className="text-gray-400 leading-relaxed">Dynamic online stores with payment integration, inventory management, and user-friendly UX.</p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Performance Optimization</h2>
            <p className="text-gray-400 leading-relaxed">Keep your website secure, fast, and optimized for SEO and modern web standards.</p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Responsive UI/UX</h2>
            <p className="text-gray-400 leading-relaxed">Designs that look great on any device and provide seamless user experiences.</p>
          </div>
        </section>

        <section className="mt-24 text-center p-12 bg-[#b1ff32] rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">Ready to Build?</h2>
          <p className="mb-10 text-black/70 text-lg font-medium max-w-2xl mx-auto">
            Partner with Revotic AI to develop modern and scalable web solutions that grow your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-[#b1ff32] px-10 py-4 rounded-full text-lg font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl"
          >
            Start Your Project
          </a>
        </section>
      </div>
    </main>
  );
};

export default WebDevelopmentPage;
