import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Cpu, Network, Battery, Sun, Brain, Building2 } from 'lucide-react';

const Subsidiary = ({ name, description, icon: Icon, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className="group p-8 glass rounded-3xl hover:border-kinetic/50 transition-all cursor-pointer h-full text-ink"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="w-12 h-12 rounded-xl bg-kinetic/10 flex items-center justify-center text-kinetic group-hover:bg-kinetic group-hover:text-white transition-all shadow-sm">
        <Icon size={24} />
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-3 tracking-tight">{name}</h3>
    <p className="text-ink/60 text-sm leading-relaxed font-medium">
      {description}
    </p>
  </motion.div>
);

export const Subsidiaries = () => {
  return (
    <section className="py-24 bg-paper border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-ink"
        >
          <div className="text-kinetic font-bold uppercase tracking-widest text-xs mb-4">Our Network</div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            THE POWER OF <br />
            <span className="text-kinetic glow-text italic">SPECIALIZATION</span>
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto font-medium">
            Cura Energy operates through a network of specialized entities, each a leader in their respective niche of the energy sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Subsidiary 
            icon={Building2} 
            name="Cura Infra" 
            description="Large-scale renewable infrastructure and commercial energy systems."
            delay={0.1}
          />
          <Subsidiary
            name="Cura Solar"
            description="Leading the transition with advanced solar PV systems for residential and commercial markets."
            icon={Sun}
            delay={0.2}
          />
          <Subsidiary 
            icon={Battery} 
            name="Cura Batteries" 
            description="Industrial-scale energy storage and grid balancing."
            delay={0.3}
          />
          <Subsidiary 
            icon={Cpu} 
            name="Cura Intelligence" 
            description="Smart grid software and energy management systems."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
