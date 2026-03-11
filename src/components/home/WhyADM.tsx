import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Cpu, Rocket } from 'lucide-react';

export const WhyADM: React.FC = () => {
  const pillars = [
    {
      icon: <Palette className="w-9 h-9 text-white group-hover:text-primary transition-colors duration-300" />,
      title: 'Design-Led',
      desc: 'Every venture starts with exceptional design. We create brands and products that are beautiful, functional, and built to resonate with modern consumers.'
    },
    {
      icon: <Cpu className="w-9 h-9 text-white group-hover:text-primary transition-colors duration-300" />,
      title: 'AI-Powered',
      desc: 'We deploy proprietary AI models and data infrastructure to give every project an unfair advantage — from analysis to execution.'
    },
    {
      icon: <Rocket className="w-9 h-9 text-white group-hover:text-primary transition-colors duration-300" />,
      title: 'Venture-Minded',
      desc: 'We think like founders, not agencies. Every decision is made through the lens of building lasting businesses, not just deliverables.'
    }
  ];

  return (
    <section id="why" className="bg-dark text-white py-[120px] px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[10px] tracking-[0.2em] text-primary font-bold mb-3.5 uppercase"
      >
        WHY SPRDLX?
      </motion.div>

      <h2 className="text-[clamp(40px,6vw,96px)] font-black tracking-[-0.04em] leading-[0.95] mb-20">
        <div className="overflow-hidden">
          <motion.span 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="block"
          >
            Bold Design.
          </motion.span>
        </div>
        <div className="overflow-hidden">
          <motion.span 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="block"
          >
            AI-Powered.
          </motion.span>
        </div>
        <div className="overflow-hidden">
          <motion.span 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="block text-primary"
          >
            Venture-Minded.
          </motion.span>
        </div>
      </h2>

      <motion.p 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-sm text-white/45 max-w-[480px] mb-20 leading-[1.8]"
      >
        SPRDLX is founded upon the idea of fusing data-driven strategy with world-class design to launch, scale, and future-proof the next generation of consumer brands and ventures.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
        {pillars.map((pillar, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 + (i * 0.15), ease: "easeOut" }}
            className="relative p-12 px-9 border border-white/5 transition-all duration-300 cursor-none group hover:border-primary/20 hover:bg-white/5 overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 origin-center transition-transform duration-400 ease-out-expo group-hover:scale-x-100" />
            
            <div className="w-12 h-12 mb-6 perspective-1000 flex items-center justify-center">
              <div className="transition-transform duration-500 ease-out-expo group-hover:rotate-y-180 flex items-center justify-center w-full h-full">
                {pillar.icon}
              </div>
            </div>
            
            <div className="text-xl font-bold text-white mb-3.5">
              {pillar.title}
            </div>
            
            <div className="text-[13px] text-white/45 leading-[1.7]">
              {pillar.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
