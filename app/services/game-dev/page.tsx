// app/services/game-dev/page.tsx
import React from 'react';

export const metadata = {
  title: 'Game Development Services - Revotic AI',
  description: 'Revotic AI creates immersive games for PC, mobile, and console platforms with cutting-edge technologies.',
};

const GameDevelopmentPage: React.FC = () => {
  return (
    <main>
      <section className="bg-black text-white pt-[100px] pb-16 md:pb-24 overflow-hidden relative border-b border-white/5">
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase">
            Game <span className="text-[#b1ff32]">Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, Revotic AI delivers immersive games across multiple platforms. We combine creativity, storytelling, and technology to bring your gaming ideas to life.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <section className="grid gap-10 md:grid-cols-2">
          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Mobile Game Development</h2>
            <p className="text-gray-400 leading-relaxed">Fun, interactive games for iOS and Android with engaging gameplay and premium graphics.</p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">PC & Console Games</h2>
            <p className="text-gray-400 leading-relaxed">High-quality games for PC and console platforms with advanced graphics and mechanics.</p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">Multiplayer & Online</h2>
            <p className="text-gray-400 leading-relaxed">Connect players worldwide with robust multiplayer functionality and server infrastructure.</p>
          </div>

          <div className="p-10 bg-neutral-900 border border-white/5 rounded-3xl shadow-2xl hover:border-[#b1ff32]/30 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff32] transition-colors">VR & AR Experiences</h2>
            <p className="text-gray-400 leading-relaxed">Create immersive virtual and augmented reality games for next-gen experiences.</p>
          </div>
        </section>

        <section className="mt-24 text-center p-12 bg-[#b1ff32] rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">Ready to Create?</h2>
          <p className="mb-10 text-black/70 text-lg font-medium max-w-2xl mx-auto">
            Let Revotic AI bring your gaming vision to life with expert development and design.
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

export default GameDevelopmentPage;
