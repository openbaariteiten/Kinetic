import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Cpu, Network, Battery, Sun, Brain } from 'lucide-react';

const Subsidiary = ({ name, description, icon: Icon }: any) => (
  <div className="group p-8 glass rounded-3xl hover:border-kinetic/50 transition-all cursor-pointer h-full text-ink">
    <div className="flex items-center justify-between mb-6">
      <div className="w-12 h-12 rounded-xl bg-kinetic/10 flex items-center justify-center text-kinetic group-hover:bg-kinetic group-hover:text-white transition-all shadow-sm">
        <Icon size={24} />
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-3 tracking-tight">{name}</h3>
    <p className="text-ink/60 text-sm leading-relaxed font-medium">
      {description}
    </p>
  </div>
);

export const Subsidiaries = () => {
  return (
    <section className="py-24 bg-paper border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 text-ink">
          <div className="text-kinetic font-bold uppercase tracking-widest text-xs mb-4">Our Network</div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            THE POWER OF <br />
            <span className="text-ink/40">SPECIALIZATION</span>
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto font-medium">
            Kinetic operates through a network of specialized entities, each a leader in their respective niche of the energy sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Subsidiary
            name="Kinetic Infra"
            description="Specializing in high-voltage industrial grid connections and heavy infrastructure projects."
            icon={Network}
          />
          <Subsidiary
            name="Kinetic Solar"
            description="Leading the transition with advanced solar PV systems for residential and commercial markets."
            icon={Sun}
          />
          <Subsidiary
            name="Kinetic Batteries"
            description="Next-generation energy storage solutions to ensure power stability and independence."
            icon={Battery}
          />
          <Subsidiary
            name="Kinetic Intelligence"
            description="AI-driven energy management systems and strategic consulting for optimal efficiency."
            icon={Brain}
          />
        </div>
      </div>
    </section>
  );
};
