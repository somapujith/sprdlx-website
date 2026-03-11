import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ParallaxImage } from '../shared/ParallaxImage';

export const FoundersSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const founders = [
    { name: 'The Lab', title: 'R&D Hub', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400&h=400' },
    { name: 'Co-Creation', title: 'Partnerships', img: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=400&h=400' },
    { name: 'Masterclasses', title: 'AI & Design', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400&h=400' },
  ];

  return (
    <section id="founders" className="bg-black text-white min-h-screen flex flex-col justify-center py-[80px] px-6 md:px-12 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2.5 mb-4 text-[10px] tracking-[0.2em] text-primary font-bold lowercase">
            <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
            the builder network
          </div>
          <h2 className="text-[clamp(36px,4vw,60px)] font-extrabold tracking-[-0.03em] leading-[1.1]">
            Access the<br/>SPRDLX Network
          </h2>
        </motion.div>
      </div>

      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-6"
          animate={{ x: `calc(-${activeIndex * (280 + 24)}px)` }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {founders.map((founder, i) => (
            <div 
              key={i} 
              className="flex-none w-[280px] flex flex-col items-center p-8 px-6 border border-white/5 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 group"
            >
              <ParallaxImage 
                src={founder.img} 
                alt={founder.name} 
                speed={0.15}
                containerClassName="w-[100px] h-[100px] rounded-full border-2 border-white/10 mb-4 transition-shadow duration-300 group-hover:shadow-[0_0_0_4px_rgba(232,93,38,0.3)]"
              />
              <div className="text-base font-bold text-white mb-1">{founder.name}</div>
              <div className="text-[11px] text-primary tracking-[0.1em] font-semibold">{founder.title}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex gap-2.5 mt-8 justify-center">
        {founders.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full cursor-none transition-all duration-300 ease-out-expo ${activeIndex === i ? 'w-6 bg-primary' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
};
