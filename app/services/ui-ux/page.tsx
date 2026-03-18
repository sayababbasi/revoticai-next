// app/services/ui-ux/page.tsx
import React from 'react';

export const metadata = {
  title: 'UI/UX Design Services - Revotic AI',
  description: 'Revotic AI designs intuitive, modern, and engaging user interfaces and experiences for web and mobile applications.',
};

const UIUXDesignPage: React.FC = () => {
  return (
    <main>
      <section className="bg-black text-white pt-[100px] pb-16 md:pb-24 overflow-hidden relative border-b border-white/5">
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase">
            UI/UX & <span className="text-[#b1ff32]">Digital Design</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Revotic AI creates user-centric designs that are both beautiful and functional. Our UI/UX solutions enhance user experience and drive engagement.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <section className="grid gap-10 md:grid-cols-2">
          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">User Interface Design</h2>
            <p className="text-gray-400 leading-relaxed">Modern and visually appealing interfaces that align with your brand and engage users.</p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">User Experience Design</h2>
            <p className="text-gray-400 leading-relaxed">Intuitive and seamless experiences that guide users naturally through your applications.</p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Prototyping & Wireframing</h2>
            <p className="text-gray-400 leading-relaxed">Rapid prototyping to visualize, test, and refine design concepts before development.</p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Responsive Design</h2>
            <p className="text-gray-400 leading-relaxed">Designs optimized for all devices and screen sizes to ensure consistent user experience.</p>
          </div>
        </section>

        <section className="mt-24 text-center p-12 bg-[#b1ff32] rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">Ready to Elevate?</h2>
          <p className="mb-10 text-black/70 text-lg font-medium max-w-2xl mx-auto">
            Partner with Revotic AI for user-centric UI/UX design that delights your users and grows your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-[#b1ff32] px-10 py-4 rounded-full text-lg font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl"
          >
            Start Your Design Project
          </a>
        </section>
      </div>
    </main>
  );
};

export default UIUXDesignPage;
