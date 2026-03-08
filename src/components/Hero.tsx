import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

export const Hero = ({ audience }: { audience: 'commercial' | 'private' }) => {
  const isPrivate = audience === 'private';

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-paper">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-kinetic/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[100px] animate-spin-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-kinetic-dark/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-[100px] animate-pulse-slow" style={{ animationDelay: '-4s' }} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          key={audience} // Re-animate when audience changes
          className="order-last lg:order-last"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-kinetic/30 bg-kinetic/10 text-kinetic-dark text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} />
            {isPrivate ? "Comfort zonder Complexiteit" : "Infrastructuur voor de Toekomst"}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
            <>
              STRATEGISCHE REGIE <br />
              <span className="text-kinetic glow-text italic">OVER UW ENERGIE</span>
            </>
          </h1>
          <p className="text-xl text-ink/70 max-w-lg mb-10 leading-relaxed font-medium">
            {isPrivate 
              ? "Een duurzaam huis hoeft niet ingewikkeld te zijn. Cura Energy brengt de expertise van de industriële sector naar uw voordeur. Wij nemen de regie van advies tot installatie."
              : "Wij installeren niet alleen; wij beheren. Cura Energy is de full-service partner die de complexiteit van de energietransitie uit handen neemt voor bedrijven."}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-kinetic text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-kinetic-dark transition-all group shadow-lg shadow-kinetic/20">
              {isPrivate ? "Cura voor uw woning" : "Ontdek onze zakelijke oplossingen"}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-ink/20 text-ink hover:border-kinetic/50 hover:bg-kinetic/5 px-8 py-4 rounded-full font-bold transition-all">
               Onze Diensten
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-ink/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-ink mb-1">250+</div>
              <div className="text-xs text-ink/50 uppercase tracking-wider font-semibold">Projecten Opgeleverd</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ink mb-1">15+</div>
              <div className="text-xs text-ink/50 uppercase tracking-wider font-semibold">Jaren Ervaring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ink mb-1">100%</div>
              <div className="text-xs text-ink/50 uppercase tracking-wider font-semibold">Hernieuwbare Focus</div>
            </div>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-first lg:order-first"
          >
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-ink/5 shadow-2xl group cursor-pointer">
              <img
              src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1000"
              alt="Solar Panel Installation"
              className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent group-hover:from-ink transition-colors duration-700 pointer-events-none" />
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-kinetic flex items-center justify-center text-white shadow-md shadow-kinetic/30">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-ink">Betrouwbare Infrastructuur</h3>
                  <p className="text-sm text-ink/70">Gebouwd voor de volgende generatie.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-kinetic/30 rounded-tr-[3rem] -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-kinetic/30 rounded-bl-[3rem] -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
          </div>
          </motion.div>
      </div>
    </section>
  );
};
