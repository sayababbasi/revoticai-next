import React from 'react';
import { 
  Palette, 
  MousePointer2, 
  Smartphone, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  PenTool, 
  Layers, 
  Figma 
} from 'lucide-react';

export const metadata = {
  title: 'UI/UX Design Services - Revotic AI',
  description: 'Create intuitive, engaging, and beautiful digital experiences with our expert UI/UX design team.',
};

const UIUXServicesPage: React.FC = () => {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#b1ff32] selection:text-black font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-[150px] pb-24 md:pt-[200px] md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#b1ff32]/20 rounded-full blur-[120px] opacity-50 -z-10 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] opacity-40 -z-10 pointer-events-none" />
        
        <div className="absolute inset-0 z-[-5] opacity-[0.15]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#b1ff32] animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Human-Centric Design</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
            UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b1ff32] to-[#7acc00]">Design</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12 font-light">
            We craft digital experiences that look beautiful and feel effortless. Our designs reduce friction, increase conversions, and turn users into loyal advocates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#services" className="inline-flex justify-center items-center gap-2 bg-[#b1ff32] text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(177,255,50,0.3)]">
              View Design Services <ArrowRight size={20} />
            </a>
            <a href="/contact" className="inline-flex justify-center items-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all backdrop-blur-md">
              Review Your Product
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICES / CAPABILITIES */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Our <span className="text-white/50">Capabilities</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl">From user research to pixel-perfect design systems.</p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {[
              {
                icon: Eye,
                title: "User Experience (UX)",
                desc: "We analyze behaviors, map user journeys, and create wireframes that solve real problems through logical, frictionless flows."
              },
              {
                icon: Palette,
                title: "User Interface (UI)",
                desc: "We deliver stunning visual designs, establishing typographic scales, color palettes, and component libraries that elevate your brand."
              },
              {
                icon: MousePointer2,
                title: "Interactive Prototyping",
                desc: "Experience your product before writing a single line of code. We build high-fidelity, clickable prototypes for testing and validation."
              },
              {
                icon: Smartphone,
                title: "Design Systems",
                desc: "We create scalable, documented design systems ensuring consistency across all your web, mobile, and software touchpoints."
              }
            ].map((service, idx) => (
              <div key={idx} className="group p-10 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] hover:border-[#b1ff32]/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                  <service.icon size={120} />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#b1ff32]/10 flex items-center justify-center mb-8 border border-[#b1ff32]/20 group-hover:bg-[#b1ff32] transition-colors duration-500">
                  <service.icon className="text-[#b1ff32] group-hover:text-black transition-colors duration-500" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW WE WORK / PROCESS */}
      <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">The <span className="text-[#b1ff32]">Process</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Empathy-driven design methodology.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[45px] left-1/8 right-1/8 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
            
            {[
              { step: "01", title: "Discover", desc: "User interviews, market research, and understanding business goals.", icon: Search },
              { step: "02", title: "Wireframe", desc: "Information architecture, user flows, and low-fidelity layouts.", icon: Layers },
              { step: "03", title: "Design", desc: "Applying visual styling, typography, and micro-interactions.", icon: PenTool },
              { step: "04", title: "Hand-off", desc: "Detailed Figma specs, assets, and collaboration with developers.", icon: Figma }
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 shadow-xl relative z-10 group hover:border-[#b1ff32]/50 transition-colors duration-300">
                  <span className="absolute -top-2 -right-2 text-sm font-black text-[#b1ff32] bg-white/10 backdrop-blur-md px-2 py-1 rounded-md">{item.step}</span>
                  <item.icon size={36} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-tight">
              Why partner with <br/><span className="text-[#b1ff32]">Revotic AI?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              We believe design is more than aesthetics; it's how a product works. Our UI/UX team focuses on accessibility, performance, and user retention.
            </p>
            <ul className="space-y-6">
              {[
                "Data-driven design decisions based on real user feedback.",
                "Expertise in complex dashboards and enterprise SaaS.",
                "Strict adherence to WCAG accessibility standards.",
                "Seamless designer-to-developer handoff process."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-[#b1ff32]/20 rounded-full p-1">
                    <CheckCircle2 className="text-[#b1ff32]" size={20} />
                  </div>
                  <span className="text-lg font-medium text-gray-200">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-6 w-full">
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl text-center flex flex-col justify-center transform translate-y-8">
              <span className="text-5xl font-black text-white mb-2">300%</span>
              <span className="text-gray-400 font-medium">Avg Conversion Lift</span>
            </div>
            <div className="bg-[#b1ff32]/10 border border-[#b1ff32]/20 p-8 rounded-3xl text-center flex flex-col justify-center">
              <span className="text-5xl font-black text-[#b1ff32] mb-2">100%</span>
              <span className="text-gray-300 font-medium">Accessible Design</span>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl text-center flex flex-col justify-center">
              <span className="text-5xl font-black text-white mb-2">5★</span>
              <span className="text-gray-400 font-medium">User Satisfaction</span>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl text-center flex flex-col justify-center transform -translate-y-8 mt-16 md:mt-0">
              <span className="text-5xl font-black text-white mb-2">Pixel</span>
              <span className="text-gray-400 font-medium">Perfect Handoff</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 relative px-6">
        <div className="max-w-6xl mx-auto bg-[#b1ff32] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight relative z-10">
            Elevate Your Product
          </h2>
          <p className="mb-12 text-black/80 text-xl font-medium max-w-2xl mx-auto relative z-10 leading-relaxed">
            Ready to design an experience your users will love? Let's collaborate on your next digital product.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-black text-[#b1ff32] px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 shadow-2xl relative z-10 group"
          >
            Start a Design Project
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
      
    </main>
  );
};

export default UIUXServicesPage;
