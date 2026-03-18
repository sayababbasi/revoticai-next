// app/services/ai-ml/page.tsx
import React from 'react';

export const metadata = {
  title: 'AI & Machine Learning Services - Revotic AI',
  description: 'Explore our AI & Machine Learning services, including custom solutions, automation, predictive analytics, and more.',
};

const AIMLServicesPage: React.FC = () => {
  return (
    <main>
      <section className="bg-black text-white pt-[100px] pb-16 md:pb-24 overflow-hidden relative border-b border-white/5">
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase">
            AI & <span className="text-[#b1ff32]">Machine Learning</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Revotic AI, we help businesses harness the power of Artificial Intelligence and Machine Learning to drive innovation and gain data-driven insights.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Services Section */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Custom AI Solutions</h2>
            <p className="text-gray-400 leading-relaxed">
              We design and implement AI models specifically for your business to solve complex problems, optimize operations, and increase efficiency.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Predictive Analytics</h2>
            <p className="text-gray-400 leading-relaxed">
              Leverage predictive modeling and data analysis to forecast trends, customer behavior, and business outcomes with high accuracy.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Automation & AI Workflows</h2>
            <p className="text-gray-400 leading-relaxed">
              Automate repetitive tasks and processes using AI-powered workflows, freeing up your team to focus on high-value activities.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">AI Consulting & Strategy</h2>
            <p className="text-gray-400 leading-relaxed">
              Our experts guide your AI journey, helping you identify opportunities, plan implementation strategies, and ensure successful adoption.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-24 text-center p-12 bg-[#b1ff32] rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">Ready to Transform?</h2>
          <p className="mb-10 text-black/70 text-lg font-medium max-w-2xl mx-auto">
            Contact us today to discuss your AI & Machine Learning project and discover how we can help you innovate.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-[#b1ff32] px-10 py-4 rounded-full text-lg font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </main>
  );
};

export default AIMLServicesPage;
