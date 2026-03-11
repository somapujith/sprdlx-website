import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const FoundersSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const items = [
    { 
      name: 'The Lab', 
      title: 'R&D Hub', 
      desc: 'Our dedicated research and development environment where we conceptualize and build the next generation of AI-driven products. We experiment with frontier models to craft unique user experiences.',
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=600' 
    },
    { 
      name: 'Co-Creation', 
      title: 'Partnerships', 
      desc: 'We partner strategically with ambitious founders and fast-growing startups, providing world-class design and engineering bandwidth as an integrated extension of their team.',
      img: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=800&h=600' 
    },
    { 
      name: 'Masterclasses', 
      title: 'AI & Design', 
      desc: 'Exclusive, high-impact workshops bridging the gap between artificial intelligence and human-centric design. We train teams to leverage AI workflows effectively.',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=600' 
    },
  ];

  return (
    <section id="founders" className="bg-black text-white min-h-screen py-[120px] px-6 md:px-12 flex flex-col justify-center">
      <div className="flex flex-col mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2.5 mb-6 text-[10px] tracking-[0.2em] text-primary font-bold uppercase">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
            The Builder Network
          </div>
          <h2 className="text-[clamp(40px,6vw,80px)] font-display font-extrabold tracking-tighter leading-[0.95]">
            Access the<br/>
            <span className="text-white/20">SPRDLX Network.</span>
          </h2>
        </motion.div>
      </div>

      <div className="w-full border-t border-white/10">
        {items.map((item, i) => (
          <div 
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            className="group border-b border-white/10 relative cursor-none"
          >
            {/* Header Row */}
            <div className={`flex items-center justify-between py-8 md:py-10 transition-colors duration-500 ${hoveredIndex === i ? 'opacity-100' : 'opacity-40 hover:opacity-75'}`}>
              <div className="flex items-center gap-6 md:gap-12">
                <span className="font-mono text-xs md:text-sm tracking-widest text-primary font-semibold">0{i + 1}</span>
                <h3 className={`font-display text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-[-0.02em] uppercase transition-transform duration-500 ease-out-expo origin-left ${hoveredIndex === i ? 'translate-x-2' : ''}`}>
                  {item.name}
                </h3>
              </div>
              <span className="hidden md:block text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-bold text-white/50">
                {item.title}
              </span>
            </div>

            {/* Expandable Image & Info */}
            <motion.div 
              initial={false}
              animate={{ height: hoveredIndex === i ? 'auto' : '0px', opacity: hoveredIndex === i ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-12 pt-2 flex flex-col md:flex-row gap-8 lg:gap-16 items-start md:pl-[120px]">
                <div className="w-full md:w-[45%] xl:w-[35%] overflow-hidden relative">
                  <div className="aspect-[4/3] bg-[#111] overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out-expo scale-110 group-hover:scale-100"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[50%] lg:w-[40%] pt-2 md:pt-4">
                  <div className="md:hidden text-[10px] tracking-[0.2em] uppercase font-bold text-primary mb-4">
                    {item.title}
                  </div>
                  <p className="text-[14px] md:text-[15px] font-medium text-white/50 leading-[1.8]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
