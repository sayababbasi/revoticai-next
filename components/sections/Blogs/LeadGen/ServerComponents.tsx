import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, ShieldCheck, Zap, Code, BarChart, Users, Star, Lock } from "lucide-react";

export function HeroCTA() {
  return (
    <section className="bg-black py-16 border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b1ff32]/10 blur-[100px] rounded-full pointer-events-none" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#b1ff32]" />
              <span className="text-[#b1ff32] text-xs font-bold uppercase tracking-widest">Enterprise Grade AI Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
              Supercharge Your Workflow With AI
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Don't just read about the future—build it. Join industry leaders who have scaled their operations and cut costs using our custom AI and automation platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact" className="px-8 py-4 bg-[#b1ff32] text-black font-black uppercase text-sm rounded-full hover:bg-white transition-colors flex items-center justify-center">
                Book a Free Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-black uppercase text-sm rounded-full hover:bg-white/10 transition-colors flex items-center justify-center">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full relative hidden md:block">
            <div className="aspect-square rounded-full border border-dashed border-white/20 flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 rounded-full border border-[#b1ff32]/30 animate-spin-slow"></div>
              <img src="/images/product/ai_workflow_hero.png" alt="AI Technology" className="w-full h-full rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  return (
    <section className="bg-[#fcfcfc] py-16 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Trusted by Industry Leaders</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-60">
          {/* Placeholder Logos */}
          <div className="flex justify-center"><div className="text-xl font-black uppercase tracking-widest text-gray-400">Company A</div></div>
          <div className="flex justify-center"><div className="text-xl font-black uppercase tracking-widest text-gray-400">TechCorp</div></div>
          <div className="flex justify-center"><div className="text-xl font-black uppercase tracking-widest text-gray-400">GlobalNet</div></div>
          <div className="flex justify-center"><div className="text-xl font-black uppercase tracking-widest text-gray-400">InnoSys</div></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-black text-[#b1ff32] mb-2">150+</div>
            <div className="text-sm font-bold uppercase tracking-wider text-black">Projects Completed</div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-black text-[#b1ff32] mb-2">99%</div>
            <div className="text-sm font-bold uppercase tracking-wider text-black">Client Satisfaction</div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-black text-[#b1ff32] mb-2">10+</div>
            <div className="text-sm font-bold uppercase tracking-wider text-black">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4">Why Choose Revotic AI?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">We don't just build software; we build robust engines for growth. Here's how we compare to traditional agencies.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Zap />, title: "Custom AI Dev", desc: "Tailored models matching your exact workflow, not generic wrappers." },
            { icon: <Lock />, title: "Enterprise Security", desc: "Bank-grade encryption and secure private cloud deployments." },
            { icon: <Code />, title: "Scalable Arch", desc: "Built on Next.js and modern stacks to handle millions of users." },
            { icon: <Users />, title: "24/7 Support", desc: "Dedicated account managers and rapid technical support." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-[#fcfcfc] p-8 rounded-3xl border border-gray-100 hover:border-[#b1ff32] transition-colors group">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#b1ff32] mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-lg font-black uppercase text-black mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustBadges() {
  return (
    <section className="bg-black text-white py-12 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            "Secure Platform", "AI Powered", "SEO Optimized", "Fast Performance", "Enterprise Ready", "Customizable"
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#b1ff32]" />
              <span className="text-xs font-black uppercase tracking-widest">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-[#fcfcfc] py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4">Client Success Stories</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative pt-12 mt-8">
              <div className="absolute -top-10 left-8 w-20 h-20 rounded-full bg-gray-200 border-4 border-white overflow-hidden">
                <img src={`https://i.pravatar.cc/150?img=${item * 10}`} alt="User" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="flex gap-1 text-[#b1ff32] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-600 text-sm italic mb-6">"Implementing their custom AI solution reduced our operational costs by 40% in just three months. The UI is flawless and the performance is incredible."</p>
              <div>
                <h5 className="font-black uppercase text-black text-sm">Sarah Jenkins</h5>
                <p className="text-xs text-gray-500 uppercase tracking-wider">COO, TechFlow Inc.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadCaptureForm() {
  return (
    <section className="bg-black text-white py-24 border-y border-white/10" id="lead-form">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/10">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-4">Ready to Modernize?</h3>
            <p className="text-gray-400">Fill out the form below and our experts will be in touch within 24 hours.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b1ff32] transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Work Email</label>
                <input type="email" className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b1ff32] transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Company</label>
                <input type="text" className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b1ff32] transition-colors" placeholder="Your Company" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                <input type="tel" className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b1ff32] transition-colors" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">How can we help?</label>
              <textarea rows={4} className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b1ff32] transition-colors" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-[#b1ff32] text-black font-black uppercase tracking-wider rounded-xl hover:bg-white transition-colors">
              Request Consultation
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">Your information is secure. We never share your data.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    { q: "What is your typical project timeline?", a: "Most custom AI integrations and web applications take between 4 to 12 weeks, depending on complexity and specific requirements." },
    { q: "Do you offer post-launch support?", a: "Absolutely. We offer flexible SLA packages to ensure your systems remain secure, up-to-date, and fully optimized." },
    { q: "Is my data secure?", a: "We employ enterprise-grade encryption and comply with global data protection regulations to ensure your proprietary data remains safe." },
    { q: "Can you integrate with our existing CRM?", a: "Yes. Our team is experienced in building custom APIs that seamlessly connect our solutions with Salesforce, HubSpot, and other major platforms." },
    { q: "Do we own the intellectual property?", a: "Yes, upon project completion and final payment, you retain full ownership of the custom code and IP." },
    { q: "What technologies do you use?", a: "We specialize in modern stacks including Next.js, React, Node.js, Python, and various leading AI LLMs (GPT-4, Claude, etc.)." },
    { q: "How do you price your services?", a: "We offer both fixed-price project bids and flexible retainer models, tailored to your specific business needs." },
    { q: "Can you scale the solution as we grow?", a: "Yes, all our architectures are built cloud-native, ensuring infinite scalability to handle traffic spikes and business growth." }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl p-6 bg-[#fcfcfc]">
              <h4 className="text-lg font-black uppercase text-black mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTABanner({ title, subtitle, bg = "bg-black", text = "text-white" }: { title: string, subtitle: string, bg?: string, text?: string }) {
  return (
    <div className={`my-16 p-10 rounded-3xl ${bg} ${text} text-center shadow-xl border border-gray-200 relative overflow-hidden group`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 relative z-10">{title}</h3>
      <p className="opacity-80 mb-6 max-w-xl mx-auto relative z-10">{subtitle}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
        <Link href="/contact" className={`px-8 py-3 ${bg === 'bg-black' ? 'bg-[#b1ff32] text-black' : 'bg-black text-white'} font-black uppercase text-sm rounded-full hover:scale-105 transition-transform`}>
          Book Your Demo
        </Link>
        <Link href="/contact" className={`px-8 py-3 bg-transparent border ${bg === 'bg-black' ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/5'} font-black uppercase text-sm rounded-full transition-colors`}>
          Talk to Experts
        </Link>
      </div>
    </div>
  );
}

export function FinalSales() {
  return (
    <section className="bg-black py-32 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#b1ff32_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <span className="px-4 py-1.5 bg-[#b1ff32]/20 text-[#b1ff32] text-[10px] font-black uppercase tracking-[0.2em] rounded-full inline-block mb-6 border border-[#b1ff32]/50">
          Limited Time Strategy Session
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
          Stop Missing Out On AI-Driven Revenue
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Schedule your free technical consultation today. Discover exactly how our solutions can automate your workflow, reduce costs, and multiply your output.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/contact" className="px-10 py-5 bg-[#b1ff32] text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(177,255,50,0.5)]">
            Get Started Now
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-full hover:border-white transition-colors">
            Request Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="bg-[#b1ff32] py-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-4">Join 10,000+ Innovators</h3>
        <p className="text-black/70 mb-8 font-medium">Get the latest insights on AI, Automation, and Web Development delivered to your inbox.</p>
        <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-2">
          <input type="email" placeholder="Enter your email" className="flex-1 bg-white border border-black/10 rounded-full px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black" />
          <button type="submit" className="px-8 py-4 bg-black text-white font-black uppercase text-sm rounded-full hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
