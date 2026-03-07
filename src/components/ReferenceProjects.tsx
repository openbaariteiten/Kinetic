import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Sun, Battery, Network, Factory, Home } from 'lucide-react';

const projects = [
  {
    title: "Libeert Chocolade",
    category: "Industrial",
    icon: Factory,
    description: "Large-scale industrial solar installation for the renowned chocolate manufacturer, optimizing production energy costs.",
    stats: { value: "450kWp", label: "Capacity" },
    image: "https://www.batimont.be/sites/default/files/references/2025-10/Battery4Industry-8.jpg"
  },
  {
    title: "Vives Hogeschool",
    category: "Commercial",
    icon: Network,
    description: "Comprehensive solar power system for the Brugge campus, supporting sustainable education and campus operations.",
    stats: { value: "150kWp", label: "Capacity" },
    image: "https://www.batimont.be/sites/default/files/references/2024-09/6-min.jpg"
  },
  {
    title: "Top-Mix Recycling",
    category: "Infrastructure",
    icon: Zap,
    description: "Powering the circular economy with a massive solar array at the Oostende recycling facility.",
    stats: { value: "1.2MWp", label: "Capacity" },
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Valcke Industriebouw",
    category: "Industrial",
    icon: Factory,
    description: "Strategic energy partnership for an industrial construction leader, featuring high-efficiency panel arrays.",
    stats: { value: "800kWp", label: "Capacity" },
    image: "https://www.batimont.be/sites/default/files/references/2024-09/Batimont%20Valcke%20Ieper-5-min.jpg"
  },
  {
    title: "Axitec Battery Storage",
    category: "Residential",
    icon: Battery,
    description: "Advanced 20kWh battery storage system providing energy independence and backup for modern homes.",
    stats: { value: "20kWh", label: "Storage" },
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Full Black PV Brugge",
    category: "Residential",
    icon: Home,
    description: "Aesthetic high-performance solar installation for residential properties in the historic city of Brugge.",
    stats: { value: "12kWp", label: "Capacity" },
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
  }
];

export const ReferenceProjects = () => {
  return (
    <section id="projects" className="py-24 bg-ink relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-volt font-bold uppercase tracking-widest text-xs mb-4">Portfolio</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
              REFERENCE <br />
              <span className="text-white/40">PROJECTS</span>
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-volt font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
            View All Projects
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col h-full glass rounded-3xl overflow-hidden border-white/5 hover:border-volt/30 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 rounded-full bg-ink/80 backdrop-blur-md border border-white/10 text-volt text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <project.icon size={12} />
                    {project.category}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-volt transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={20} className="text-white/20 group-hover:text-volt transition-colors" />
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">{project.stats.value}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold">{project.stats.label}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-volt/30 group-hover:text-volt transition-all">
                    <Zap size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
