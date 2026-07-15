const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'services');
const services = ['ai-ml', 'app-dev', 'automation', 'data', 'game-dev', 'saas', 'ui-ux', 'web-app'];

for (const s of services) {
  const file = path.join(dir, s, 'page.tsx');
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Services Section
    content = content.replace(/<section id="services" className="py-24 md:py-32 relative bg-gray-50 text-black">/g, '<section id="services" className="py-24 md:py-32 relative">');
    content = content.replace(/Our <span className="text-black\/50">Capabilities<\/span>/g, 'Our <span className="text-white/50">Capabilities</span>');
    content = content.replace(/<p className="text-xl text-gray-600 max-w-2xl">/g, '<p className="text-xl text-gray-400 max-w-2xl">');
    
    // Cards
    content = content.replace(/className="group p-10 bg-white border border-gray-200 rounded-\[2rem\] hover:border-\[#b1ff32\]\/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"/g, 'className="group p-10 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] hover:border-[#b1ff32]/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-xl relative overflow-hidden"');
    content = content.replace(/<h3 className="text-3xl font-bold text-black mb-4 tracking-tight">/g, '<h3 className="text-3xl font-bold text-white mb-4 tracking-tight">');
    content = content.replace(/<p className="text-gray-600 leading-relaxed text-lg">/g, '<p className="text-gray-400 leading-relaxed text-lg">');

    // 2. Why Choose Us Section
    content = content.replace(/<section className="py-24 md:py-32 bg-white text-black">/g, '<section className="py-24 md:py-32">');
    content = content.replace(/<p className="text-xl text-gray-600 mb-10 leading-relaxed">/g, '<p className="text-xl text-gray-400 mb-10 leading-relaxed">');
    content = content.replace(/<span className="text-lg font-medium text-gray-800">/g, '<span className="text-lg font-medium text-gray-200">');
    
    // Stats boxes
    content = content.replace(/bg-gray-50 border border-gray-200/g, 'bg-white/[0.03] border border-white/10');
    content = content.replace(/<span className="text-5xl font-black text-black mb-2">/g, '<span className="text-5xl font-black text-white mb-2">');
    content = content.replace(/<span className="text-gray-600 font-medium">/g, '<span className="text-gray-400 font-medium">');
    content = content.replace(/<span className="text-gray-700 font-medium">/g, '<span className="text-gray-300 font-medium">');

    fs.writeFileSync(file, content, 'utf8');
    console.log('Reverted ' + s);
  }
}
