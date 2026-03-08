import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    {/* We use an img tag to load the attached logo the user provided. 
        It expects the logo to be saved in the public directory as kinetic-logo.png */}
    <img 
      src="/kinetic-logo.png" 
      alt="Kinetic Logo" 
      className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
      onError={(e) => {
        // Fallback if the user hasn't saved the image yet
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextElementSibling?.classList.remove('hidden');
      }}
    />
    <span className="hidden font-display font-bold text-2xl tracking-tighter text-kinetic uppercase drop-shadow-sm">
      KINETIC
    </span>
  </div>
);

export const Navbar = ({ audience, setAudience }: { audience: 'commercial' | 'private', setAudience: (val: 'commercial' | 'private') => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/cura-logo.jpg" 
              alt="Cura Energy Logo" 
              className="h-10 w-auto mix-blend-multiply" 
            />
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {/* Audience Toggle */}
          <div className="flex bg-ink/5 rounded-full p-1 border border-ink/10">
            <button 
              onClick={() => setAudience('commercial')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${audience === 'commercial' ? 'bg-kinetic text-white shadow-[0_0_10px_rgba(223,180,36,0.3)]' : 'text-ink/50 hover:text-ink'}`}
            >
              Commercial
            </button>
            <button 
              onClick={() => setAudience('private')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${audience === 'private' ? 'bg-kinetic text-white shadow-[0_0_10px_rgba(223,180,36,0.3)]' : 'text-ink/50 hover:text-ink'}`}
            >
              Private
            </button>
          </div>

          {['Solutions', 'Sectors', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-ink/70 hover:text-kinetic transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-kinetic text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-kinetic-dark transition-all hover:scale-105 active:scale-95 shadow-md shadow-kinetic/20">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 left-6 right-6 glass rounded-2xl p-6 flex flex-col gap-4 shadow-xl"
        >
          {/* Mobile Audience Toggle */}
          <div className="flex bg-ink/5 rounded-xl p-1 border border-ink/10 mb-2">
            <button 
              onClick={() => { setAudience('commercial'); setIsOpen(false); }}
              className={`flex-1 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${audience === 'commercial' ? 'bg-kinetic text-white shadow-[0_0_10px_rgba(223,180,36,0.3)]' : 'text-ink/50 hover:text-ink'}`}
            >
              Commercial
            </button>
            <button 
              onClick={() => { setAudience('private'); setIsOpen(false); }}
              className={`flex-1 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${audience === 'private' ? 'bg-kinetic text-white shadow-[0_0_10px_rgba(223,180,36,0.3)]' : 'text-ink/50 hover:text-ink'}`}
            >
              Private
            </button>
          </div>

          {['Solutions', 'Sectors', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-ink/70 hover:text-kinetic font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-kinetic text-white w-full py-3 rounded-xl font-bold hover:bg-kinetic-dark transition-all">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
};
