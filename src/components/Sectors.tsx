import React from 'react';
import { motion } from 'motion/react';
import { Factory, Home, Zap, BarChart3, Settings, ShieldCheck } from 'lucide-react';

const SectorCard = ({ icon: Icon, title, description, items, isDark = false }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`p-8 rounded-3xl border transition-all ${
      isDark 
        ? 'bg-volt border-volt text-ink' 
        : 'bg-white/5 border-white/10 text-white hover:border-volt/30'
    }`}
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
      isDark ? 'bg-ink text-volt' : 'bg-volt text-ink'
    }`}>
      <Icon size={28} />
    </div>
    <h3 className="text-3xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className={`mb-8 leading-relaxed ${isDark ? 'text-ink/70' : 'text-white/60'}`}>
      {description}
    </p>
    <ul className="space-y-3">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-center gap-3 text-sm font-medium">
          <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-ink' : 'bg-volt'}`} />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export const Sectors = () => {
  return (
    <section id="sectors" className="py-24 bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-volt font-bold uppercase tracking-widest text-xs mb-4">Market Focus</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
              SERVING THE ENTIRE <br />
              <span className="text-white/40">ENERGY ECOSYSTEM</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm">
            From heavy industrial installations to residential smart homes, we provide the backbone for the energy transition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SectorCard
            icon={Factory}
            title="B2B Industrial"
            description="Strategic energy solutions for large-scale infrastructure and industrial complexes. We handle the complexity so you can focus on growth."
            items={[
              "Industrial Grid Connections",
              "Infrastructure Power Systems",
              "High-Voltage Installations",
              "Energy Management Systems"
            ]}
          />
          <SectorCard
            icon={Home}
            title="B2C Residential"
            description="Smart energy solutions for the modern home. We help homeowners transition to sustainable living with ease and efficiency."
            isDark={true}
            items={[
              "Solar PV & Storage",
              "EV Charging Infrastructure",
              "Smart Home Integration",
              "Residential Energy Audits"
            ]}
          />
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Zap, label: "Fast Deployment" },
            { icon: BarChart3, label: "Data-Driven" },
            { icon: Settings, label: "Custom Engineering" },
            { icon: ShieldCheck, label: "Certified Safety" }
          ].map((feature, i) => (
            <div key={i} className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-volt/50 transition-colors">
              <feature.icon className="text-volt" size={32} />
              <span className="font-bold text-sm uppercase tracking-wider">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
