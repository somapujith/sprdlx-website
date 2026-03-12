import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const ctaY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const ctaItems = [
    { 
      label: t('nav.projects'), 
      href: '#projects', 
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80'
      ]
    },
    { 
      label: t('nav.services'), 
      href: '#services', 
      images: [
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80'
      ]
    },
  ];

  return (
    <section ref={containerRef} id="hero" className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80)' }}
        />
      </motion.div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
      
      <div className="relative z-20 w-full px-6 md:px-12 pb-0">
        <motion.div style={{ y: textY }}>
          <h1 className="mb-0 overflow-hidden text-[clamp(42px,5.5vw,88px)] font-extrabold text-white leading-[1.05] tracking-[-0.03em]">
            <div className="overflow-hidden">
              <motion.span 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                className="block"
              >
                {t('hero.headline_line1')}
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.25, ease: "easeOut" }}
                className="block"
              >
                {t('hero.headline_line2')}
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                className="block"
              >
                {t('hero.headline_line3')}
              </motion.span>
            </div>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.7, ease: "easeOut" }}
            className="text-sm text-white/60 max-w-[480px] leading-[1.7] my-5 md:mb-10"
          >
            {t('hero.sub')}
          </motion.p>
        </motion.div>

        <motion.div style={{ y: ctaY }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-[2px] border-t border-white/10 pt-[2px]"
          >
            {ctaItems.map((item, i) => (
              <a 
                key={item.label} 
                href={item.href}
                className="flex-1 relative overflow-hidden bg-black/35 backdrop-blur-md border border-white/10 p-5 pb-4.5 flex flex-col justify-between min-h-[130px] group transition-colors duration-300 hover:border-primary/40 hover:bg-primary/10"
              >
                <div className="absolute inset-0 pointer-events-none">
                  {item.images.map((img, imgIdx) => {
                    const hoverOpacity = imgIdx === 0 ? 'group-hover:opacity-30' : imgIdx === 1 ? 'group-hover:opacity-25' : 'group-hover:opacity-20';
                    return (
                    <img 
                      key={imgIdx}
                      src={img} 
                      alt="" 
                      loading="lazy"
                      className={`absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 ease-out-expo ${hoverOpacity}`}
                      style={{ transitionDelay: `${imgIdx * 0.07}s` }}
                    />
                    );
                  })}
                </div>
                <div className="relative z-10 text-[17px] font-bold text-white tracking-[-0.01em] group-hover:font-extrabold transition-all">
                  {item.label}
                </div>
                <div className="relative z-10 w-7 h-7 border border-white/25 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:border-primary">
                  <ArrowRight size={12} className="text-white" />
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
        className="absolute bottom-8 right-12 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-scroll-line" />
        </div>
      </motion.div>
    </section>
  );
};
