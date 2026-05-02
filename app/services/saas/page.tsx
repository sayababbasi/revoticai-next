import React from 'react';

export const metadata = {
  title: 'AI SaaS Development Services - Revotic AI',
  description: 'Launch your next big product with our comprehensive AI SaaS development services, from MVP to enterprise scale.',
};

const SaasServicesPage: React.FC = () => {
  return (
    <main>
      <section className="bg-black text-white pt-[100px] pb-16 md:pb-24 overflow-hidden relative border-b border-white/5">
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase">
            AI SaaS <span className="text-[#b1ff32]">Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Revotic AI, we build scalable, secure, and intelligent Software-as-a-Service platforms powered by cutting-edge AI technologies.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Services Section */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">MVP Development</h2>
            <p className="text-gray-400 leading-relaxed">
              We rapidly prototype and build Minimum Viable Products to help you validate your AI SaaS concept in the market quickly and cost-effectively.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Enterprise Scaling</h2>
            <p className="text-gray-400 leading-relaxed">
              Scale your existing product with cloud-native architectures, microservices, and robust multi-tenant capabilities designed for high growth.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">AI Integrations</h2>
            <p className="text-gray-400 leading-relaxed">
              Embed LLMs, predictive analytics, computer vision, and NLP directly into your SaaS product to offer next-generation features to your users.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">SaaS Maintenance</h2>
            <p className="text-gray-400 leading-relaxed">
              Ensure continuous reliability with our 24/7 monitoring, security updates, feature enhancements, and proactive performance optimization.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-24 text-center p-12 bg-[#b1ff32] rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">Build Your AI SaaS</h2>
          <p className="mb-10 text-black/70 text-lg font-medium max-w-2xl mx-auto">
            Ready to disrupt the market? Let's turn your vision into a powerful, scalable software product.
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

export default SaasServicesPage;
