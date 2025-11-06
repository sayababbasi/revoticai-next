// app/services/game-development/page.tsx
import React from 'react';

export const metadata = {
  title: 'Game Development Services - Revotic AI',
  description: 'Revotic AI creates immersive games for PC, mobile, and console platforms with cutting-edge technologies.',
};

const GameDevelopmentPage: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Game Development Services</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          From concept to deployment, Revotic AI delivers immersive games across multiple platforms. We combine creativity, storytelling, and technology to bring your gaming ideas to life.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Mobile Game Development</h2>
          <p>Fun, interactive games for iOS and Android with engaging gameplay and graphics.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">PC & Console Games</h2>
          <p>High-quality games for PC and console platforms with advanced graphics and mechanics.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Multiplayer & Online Games</h2>
          <p>Connect players worldwide with robust multiplayer functionality and server infrastructure.</p>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">VR & AR Game Experiences</h2>
          <p>Create immersive virtual and augmented reality games for next-gen experiences.</p>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Create Your Game?</h2>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          Let Revotic AI bring your gaming vision to life with expert development and design.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Your Game Project
        </a>
      </section>
    </main>
  );
};

export default GameDevelopmentPage;
