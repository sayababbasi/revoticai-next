// app/services/automation/page.tsx
import React from 'react';

export const metadata = {
  title: 'Automation Services - Revotic AI',
  description: 'Revotic AI provides cutting-edge automation solutions to streamline your business processes, reduce costs, and improve efficiency.',
};

const AutomationServicesPage: React.FC = () => {
  return (
    <main>
      <section className="bg-black text-white pt-[100px] pb-16 md:pb-24 overflow-hidden relative border-b border-white/5">
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase">
            Intelligent <span className="text-[#b1ff32]">Automation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform your business with intelligent automation solutions. We help organizations automate repetitive tasks, optimize workflows, and enhance productivity.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Services / Features Section */}
        <section className="grid gap-10 md:grid-cols-2">
          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Workflow Automation</h2>
            <p className="text-gray-400 leading-relaxed">
              Streamline business operations by automating routine tasks. Our workflow automation solutions help teams save time, reduce errors, and increase efficiency.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Business Process Automation</h2>
            <p className="text-gray-400 leading-relaxed">
              Optimize your entire business process by integrating AI-driven automation. We enable faster decision-making and consistent results across all departments.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Robotic Process Automation</h2>
            <p className="text-gray-400 leading-relaxed">
              Implement software robots to handle repetitive, rule-based tasks with precision. Reduce operational costs while improving speed and accuracy.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">AI-Powered Automation</h2>
            <p className="text-gray-400 leading-relaxed">
              Combine artificial intelligence with automation to handle complex tasks, predictive analytics, and decision-making processes intelligently.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-24 pt-24 border-t border-white/5">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center uppercase tracking-tighter">Why Choose Revotic AI?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Increased Efficiency", d: "Automate repetitive tasks to free up time for strategic work." },
              { t: "Cost Reduction", d: "Reduce operational costs with minimal human intervention." },
              { t: "Accuracy", d: "Eliminate errors and ensure consistent results." },
              { t: "Scalability", d: "Scale your business without increasing workforce." },
              { t: "Intelligent Insights", d: "Use AI-driven data analysis to make smarter decisions." },
              { t: "Custom Solutions", d: "Tailored automation designed for your unique needs." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#b1ff32]/5 hover:border-[#b1ff32]/20 transition-all">
                <h3 className="text-xl font-bold text-[#b1ff32] mb-3">{item.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="mt-24 text-center p-12 bg-[#b1ff32] rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">Ready to Automate?</h2>
          <p className="mb-10 text-black/70 text-lg font-medium max-w-2xl mx-auto">
            Partner with Revotic AI to implement intelligent automation solutions that save time, reduce costs, and improve performance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-[#b1ff32] px-10 py-4 rounded-full text-lg font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl"
          >
            Get Started Today
          </a>
        </section>
      </div>
    </main>
  );
};

export default AutomationServicesPage;
