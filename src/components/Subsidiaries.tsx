import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Cpu, Network, Battery, Sun, Brain, Building2 } from 'lucide-react';

const Subsidiary = ({ name, description, imageSrc, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className="group p-8 glass rounded-3xl hover:border-kinetic/50 transition-all cursor-pointer h-full text-ink flex flex-col"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="h-24 flex items-center justify-center">
        <img src={imageSrc} alt={`${name} logo`} className="h-full w-auto object-contain group-hover:scale-105 transition-transform" />
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
          <div className="text-kinetic font-bold uppercase tracking-widest text-xs mb-4">Onze Diensten</div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            DE DRIE PIJLERS VAN <br />
            <span className="text-kinetic glow-text italic">OMNI</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <Subsidiary 
            imageSrc="/Omni_solar.png" 
            name="Zonne-energie (Opwek)" 
            description="Wij ontwerpen en realiseren grootschalige industriële installaties en residentiële systemen met een maximaal rendement."
            delay={0.1}
          />
          <Subsidiary 
            imageSrc="/Omni_storage.png" 
            name="Batterijsystemen (Opslag)" 
            description="Optimaliseer uw verbruik. Wij beheren de opslag van uw zelfopgewekte energie voor momenten dat de zon niet schijnt."
            delay={0.2}
          />
          <Subsidiary 
            imageSrc="/Omni_charging.png" 
            name="Laadinfrastructuur (Mobiliteit)" 
            description="Slimme laadoplossingen voor uw wagenpark of oprit, volledig geïntegreerd met uw energiebeheer."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
