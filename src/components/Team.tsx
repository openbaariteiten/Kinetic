import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';

const TeamMember = ({ name, role, imageUrl, delay }: { name: string, role: string, imageUrl: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group flex flex-col items-center text-center"
  >
    <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl relative">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-kinetic/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
    <h3 className="text-2xl font-bold tracking-tight text-ink mb-1">{name}</h3>
    <p className="text-kinetic font-medium italic mb-4">{role}</p>
    <div className="flex gap-4 text-ink/40">
      <a href="#" className="hover:text-kinetic transition-colors"><Linkedin size={20} /></a>
      <a href="#" className="hover:text-kinetic transition-colors"><Mail size={20} /></a>
    </div>
  </motion.div>
);

export const Team = () => {
  return (
    <section className="py-24 bg-white border-t border-ink/5 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-kinetic/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-kinetic font-bold uppercase tracking-widest text-xs mb-4">Onze Mensen</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-ink mb-6">
              ONTMOET DE <span className="text-kinetic glow-text italic">EXPERTS</span>
            </h2>
            <p className="text-xl text-ink/70 font-medium">
              Achter elke succesvolle installatie staat een team van gepassioneerde vakmensen. Wij zijn uw persoonlijke partners in de energietransitie.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Using generic placeholders since user hasn't provided specific team photos yet */}
          <TeamMember 
            name="Alexander Vandenbroucke" 
            role="Zaakvoerder & Adviseur" 
            imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            delay={0.1}
          />
          <TeamMember 
            name="Sarah Mertens" 
            role="Hoofd Ingenieur" 
            imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            delay={0.2}
          />
          <TeamMember 
            name="Thomas Peeters" 
            role="Operationeel Verantwoordelijke" 
            imageUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
