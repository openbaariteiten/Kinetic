import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-first lg:order-last">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1000"
                alt="Wind Turbines"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-kinetic rounded-[3rem] p-8 flex flex-col justify-between text-white hidden md:flex shadow-2xl shadow-kinetic/20">
              <div className="text-5xl font-bold tracking-tighter italic">15+</div>
              <div>
                <div className="font-bold text-xl mb-1">Years of Evolution</div>
                <p className="text-sm font-medium opacity-90 leading-tight text-white/90">
                  From traditional installers to strategic energy partners.
                </p>
              </div>
            </div>
          </div>

          <div className="order-last lg:order-first">
            <div className="text-kinetic font-bold uppercase tracking-widest text-xs mb-4">Our Story</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9] text-ink">
              EVOLVING INTO A <br />
              <span className="text-kinetic glow-text italic">STRATEGIC PARTNER</span>
            </h2>
            <div className="space-y-6 text-ink/70 text-lg leading-relaxed font-medium">
              <p>
                Kinetic is an ambitious, growing organisation active in the energy transition and infrastructure sector. We don't just install; we strategize, design, and maintain the energy systems of tomorrow.
              </p>
              <p>
                Through our specialized network, we serve a diverse portfolio of clients. Our mission is to bridge the gap between traditional energy infrastructure and the sustainable future.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Strategic Energy Planning",
                "Specialized Network",
                "Full-Lifecycle Support",
                "Innovation Driven"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-ink/10 hover:border-kinetic/30 bg-white/40 hover:bg-white transition-colors group cursor-default shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-kinetic" />
                  <span className="font-bold text-sm uppercase tracking-wider text-ink">{item}</span>
                  <ArrowUpRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-kinetic" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
