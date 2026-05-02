import React from 'react';

export const metadata = {
  title: 'Data Science & Analytics Services - Revotic AI',
  description: 'Unlock the power of your data with our expert Data Science, Data Engineering, and Analytics services.',
};

const DataServicesPage: React.FC = () => {
  return (
    <main>
      <section className="bg-black text-white pt-[100px] pb-16 md:pb-24 overflow-hidden relative border-b border-white/5">
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase">
            Data Science & <span className="text-[#b1ff32]">Analytics</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Revotic AI, we transform raw data into actionable insights, robust data pipelines, and intelligent business strategies.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Services Section */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Data Engineering</h2>
            <p className="text-gray-400 leading-relaxed">
              We design robust and scalable data pipelines to securely collect, store, and process your enterprise data efficiently.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Business Intelligence</h2>
            <p className="text-gray-400 leading-relaxed">
              Empower your decision-making with dynamic dashboards and reporting tools that make complex data easy to understand.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Advanced Analytics</h2>
            <p className="text-gray-400 leading-relaxed">
              Uncover hidden patterns and correlations in your data using statistical modeling and advanced analytics techniques.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Data Strategy</h2>
            <p className="text-gray-400 leading-relaxed">
              We help you align your data architecture with your business goals, ensuring maximum ROI from your data initiatives.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-24 text-center p-12 bg-[#b1ff32] rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">Unlock Your Data's Value</h2>
          <p className="mb-10 text-black/70 text-lg font-medium max-w-2xl mx-auto">
            Contact us today to discuss your data challenges and discover how our analytics solutions can drive growth.
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

export default DataServicesPage;
