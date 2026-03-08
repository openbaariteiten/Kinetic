import React from 'react';
import { motion } from 'motion/react';
import { Factory, Home, Zap, BarChart3, Settings, ShieldCheck } from 'lucide-react';

const ReasonCard = ({ icon: Icon, title, description, isDark = false }: any) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`p-8 rounded-3xl border transition-all duration-300 ${
      isDark 
        ? 'bg-kinetic-light/20 border-kinetic/30 text-ink shadow-[0_10px_30px_rgba(223,180,36,0.1)]' 
        : 'glass text-ink hover:border-kinetic/30 shadow-sm hover:shadow-lg'
    }`}
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:rotate-12 transition-transform duration-300 ${
      isDark ? 'bg-kinetic text-white shadow-kinetic/20' : 'bg-kinetic/10 text-kinetic-dark'
    }`}>
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className={`leading-relaxed ${isDark ? 'text-ink/80' : 'text-ink/70'}`}>
      {description}
    </p>
  </motion.div>
);

export const Sectors = () => {
  return (
    <section id="sectors" className="py-24 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-kinetic font-bold uppercase tracking-widest text-xs mb-4">Waarom Cura?</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-ink">
              UW ENERGIE IN <br />
              <span className="text-kinetic glow-text italic">VERTROUWDE HANDEN</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ReasonCard
            icon={ShieldCheck}
            title="Volledige Ontzorging"
            description="Van eerste audit en subsidieaanvraag tot installatie en monitoring."
          />
          <ReasonCard
            icon={Settings}
            title="Merkonafhankelijk Advies"
            description="Wij kiezen de techniek die het beste past bij uw specifieke situatie."
            isDark={true}
          />
          <ReasonCard
            icon={Factory}
            title="Eén Aanspreekpunt"
            description="Geen gedoe met verschillende onderaannemers; één partner voor uw hele energie-as."
          />
          <ReasonCard
            icon={BarChart3}
            title="Toekomstbestendig"
            description="Wij bouwen systemen die vandaag werken en morgen uitbreidbaar zijn."
            isDark={true}
          />
        </div>


      </div>
    </section>
  );
};
