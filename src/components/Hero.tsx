import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

export const Hero = ({ audience }: { audience: 'commercial' | 'private' }) => {
  const isPrivate = audience === 'private';

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-volt/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-volt/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          key={audience} // Re-animate when audience changes
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-volt/30 bg-volt/5 text-volt text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} />
            {isPrivate ? "Power Your Home" : "The Future of Energy"}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
            {isPrivate ? (
              <>
                SMART ENERGY <br />
                <span className="text-volt glow-text italic">FOR YOUR HOME</span>
              </>
            ) : (
              <>
                YOUR STRATEGIC <br />
                <span className="text-volt glow-text italic">ENERGY PARTNER</span>
              </>
            )}
          </h1>
          <p className="text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
            {isPrivate 
              ? "Take control of your energy future. We design and install premium home battery systems, smart EV chargers, and solar solutions tailored for modern living."
              : "Voltspark is evolving from a traditional installer to a strategic partner in the energy transition. We empower industries and homes with sustainable infrastructure."}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-volt text-ink px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all group">
              {isPrivate ? "Get a Free Quote" : "Explore Solutions"}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 hover:border-volt/50 px-8 py-4 rounded-full font-bold transition-all">
              {isPrivate ? "View Home Products" : "Our Subsidiaries"}
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1">250+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Renewable Focus</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000"
              alt="Energy Infrastructure"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-volt flex items-center justify-center text-ink">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Reliable Infrastructure</h3>
                  <p className="text-sm text-white/60">Built for the next generation.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-volt/30 rounded-tr-3xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-volt/30 rounded-bl-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
