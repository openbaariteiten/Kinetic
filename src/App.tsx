import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sectors } from './components/Sectors';
import { About } from './components/About';
import { Subsidiaries } from './components/Subsidiaries';
import { ReferenceProjects } from './components/ReferenceProjects';
import { Footer } from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [audience, setAudience] = useState<'commercial' | 'private'>('commercial');

  return (
    <div className="min-h-screen bg-paper selection:bg-kinetic selection:text-white relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-kinetic z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar audience={audience} setAudience={setAudience} />
      
      <main>
        <Hero audience={audience} />
        
        {/* Trusted By Section */}
        <section className="py-12 border-y border-ink/5 bg-ink/[0.01]">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              { name: 'Smappee', url: '/smappee.svg' },
              { name: 'Easee', url: '/easee-logo.svg', customClass: 'h-6 md:h-8' },
              { name: 'Maxeon', url: '/Maxeon_Logo_Tagline_White.png' },
              { name: 'Huawei', url: '/Huawei_Standard_logo.svg.png' },
              { name: 'Dyness', url: '/dyness-logo.png' }
            ].map((brand) => (
              <img 
                key={brand.name} 
                src={brand.url} 
                alt={`${brand.name} Logo`}
                className={`${brand.customClass || 'h-8 md:h-12'} object-contain invert mix-blend-multiply opacity-80`}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  /* Fallback to text if the image still fails */
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.nextSibling) {
                    (target.nextSibling as HTMLElement).style.display = 'block';
                  }
                }}
              />
            ))}
          </div>
        </section>

        <Sectors />
        
        <Subsidiaries />

        <ReferenceProjects />

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-kinetic/10 blur-[120px] rounded-full -translate-y-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="glass p-12 md:p-24 rounded-[3rem] text-center border-kinetic/10 shadow-xl shadow-kinetic/5">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                READY TO POWER THE <br />
                <span className="text-kinetic glow-text italic">NEXT GENERATION?</span>
              </h2>
              <p className="text-xl text-ink/70 max-w-2xl mx-auto mb-12">
                Join forces with Kinetic and lead the energy transition. Whether you're an industrial giant or a homeowner, we have the strategy for you.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-kinetic text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-kinetic-dark transition-all hover:scale-105 shadow-lg shadow-kinetic/20">
                  Contact Our Experts
                </button>
                <button className="border border-ink/20 px-10 py-5 rounded-full font-bold text-lg hover:border-kinetic/50 hover:bg-kinetic/5 transition-all text-ink">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        <About />
      </main>

      <Footer />
    </div>
  );
}

