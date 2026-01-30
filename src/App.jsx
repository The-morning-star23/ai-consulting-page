import React, { useState } from 'react';
import { Bot, Cpu, Zap, Mail, ChevronRight, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");
    const formData = new FormData(e.target);
    
    // Replace YOUR_ACCESS_KEY_HERE with the key from Web3Forms
    formData.append("access_key", "9058d3d8-4083-4510-8e19-71c1bc0c6862");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setFormStatus("Message Sent Successfully!");
      e.target.reset();
    } else {
      setFormStatus("Error sending message.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Bot className="text-blue-600" size={32} />
              <span className="text-xl font-bold tracking-tight">Matrix 360 AI</span>
            </div>
            
            <div className="hidden md:flex gap-8 font-medium">
              <a href="#services" className="hover:text-blue-600 transition">Services</a>
              <a href="#about" className="hover:text-blue-600 transition">About</a>
              <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Scale Your Business with <span className="text-blue-600">Applied AI</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            We bridge the gap between AI hype and business reality. Custom LLMs, automated workflows, and agentic systems built for performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              Get Started <ChevronRight size={20} />
            </a>
            <a href="#services" className="bg-white border border-slate-300 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition">
              View Services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Cpu className="text-blue-600" size={40} />}
              title="LLM Integration"
              desc="Custom fine-tuned models and RAG pipelines tailored to your proprietary data."
            />
            <ServiceCard 
              icon={<Zap className="text-blue-600" size={40} />}
              title="Workflow Automation"
              desc="Remove bottlenecks with AI agents that handle repetitive tasks across your tech stack."
            />
            <ServiceCard 
              icon={<Bot className="text-blue-600" size={40} />}
              title="AI Strategy"
              desc="From audit to implementation—a clear roadmap for your enterprise AI transformation."
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200">
            <div className="text-center mb-10">
              <Mail className="mx-auto text-blue-600 mb-4" size={48} />
              <h2 className="text-3xl font-bold">Launch Your Project</h2>
              <p className="text-slate-600 mt-2">Speak with an AI consultant today.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">How can we help?</label>
                <textarea name="message" rows="4" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition">
                Send Message
              </button>
              {formStatus && <p className="text-center font-medium text-blue-600 mt-4">{formStatus}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-200 text-center text-slate-500 text-sm">
        © 2026 Matrix 360 AI Consulting. Built with Gemini & React.
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-lg transition group">
    <div className="mb-6 group-hover:scale-110 transition duration-300">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default App;