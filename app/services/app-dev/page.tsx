import React from 'react';

export const metadata = {
  title: 'Mobile App Development Services - Revotic AI',
  description: 'Deliver stunning, high-performance mobile applications for iOS and Android with Revotic AI.',
};

const AppDevServicesPage: React.FC = () => {
  return (
    <main>
      <section className="bg-black text-white pt-[100px] pb-16 md:pb-24 overflow-hidden relative border-b border-white/5">
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase">
            Mobile App <span className="text-[#b1ff32]">Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Revotic AI, we create powerful, intelligent, and user-centric mobile applications that connect your business with users on the go.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Services Section */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Cross-Platform Apps</h2>
            <p className="text-gray-400 leading-relaxed">
              We leverage modern frameworks like React Native and Flutter to build high-performance applications that work seamlessly on both iOS and Android.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Native iOS & Android</h2>
            <p className="text-gray-400 leading-relaxed">
              For complex use-cases requiring deep hardware integration, we build optimized native applications using Swift, Kotlin, and Java.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">AI-Powered Features</h2>
            <p className="text-gray-400 leading-relaxed">
              Enhance your mobile app with edge AI, personalization engines, voice assistants, and computer vision capabilities to stand out.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">UI/UX App Design</h2>
            <p className="text-gray-400 leading-relaxed">
              We craft intuitive and stunning mobile interfaces designed specifically for mobile interactions, ensuring high engagement and retention.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-24 text-center p-12 bg-[#b1ff32] rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">Launch Your Mobile Vision</h2>
          <p className="mb-10 text-black/70 text-lg font-medium max-w-2xl mx-auto">
            Contact us today to discuss your mobile app idea and learn how we can bring it to life on iOS and Android.
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

export default AppDevServicesPage;
