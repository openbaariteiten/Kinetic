import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

export const Hero = ({ audience }: { audience: 'commercial' | 'private' }) => {
  const isPrivate = audience === 'private';

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-paper">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-kinetic/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-kinetic/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          key={audience} // Re-animate when audience changes
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-kinetic/30 bg-kinetic/10 text-kinetic-dark text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} />
            {isPrivate ? "Power Your Home" : "The Future of Energy"}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
            {isPrivate ? (
              <>
                SMART ENERGY <br />
                <span className="text-kinetic glow-text italic">FOR YOUR HOME</span>
              </>
            ) : (
              <>
                YOUR STRATEGIC <br />
                <span className="text-kinetic glow-text italic">ENERGY PARTNER</span>
              </>
            )}
          </h1>
          <p className="text-xl text-ink/70 max-w-lg mb-10 leading-relaxed font-medium">
            {isPrivate 
              ? "Take control of your energy future. We design and install premium home battery systems, smart EV chargers, and solar solutions tailored for modern living."
              : "Kinetic is evolving from a traditional installer to a strategic partner in the energy transition. We empower industries and homes with sustainable infrastructure."}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-kinetic text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-kinetic-dark transition-all group shadow-lg shadow-kinetic/20">
              {isPrivate ? "Get a Free Quote" : "Explore Solutions"}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-ink/20 text-ink hover:border-kinetic/50 hover:bg-kinetic/5 px-8 py-4 rounded-full font-bold transition-all">
              {isPrivate ? "View Home Products" : "Our Subsidiaries"}
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-ink/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-ink mb-1">250+</div>
              <div className="text-xs text-ink/50 uppercase tracking-wider font-semibold">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ink mb-1">15+</div>
              <div className="text-xs text-ink/50 uppercase tracking-wider font-semibold">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ink mb-1">100%</div>
              <div className="text-xs text-ink/50 uppercase tracking-wider font-semibold">Renewable Focus</div>
            </div>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-ink/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000"
                alt="Energy Infrastructure"
                className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-kinetic flex items-center justify-center text-white shadow-md shadow-kinetic/30">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-ink">Reliable Infrastructure</h3>
                    <p className="text-sm text-ink/70">Built for the next generation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-kinetic/30 rounded-tr-[3rem]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-kinetic/30 rounded-bl-[3rem]" />
          </motion.div>
      </div>
    </section>
  );
};
