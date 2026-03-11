import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AnimatedCounter } from '../shared/AnimatedCounter';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0px", "-150px"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} id="about" className="bg-black min-h-screen flex items-center py-[80px] px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full">
      <div className="relative h-[360px] lg:h-[520px]">
        <motion.img 
          style={{ y: y1 }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-[62%] h-[75%] top-0 left-0 z-10 object-cover rounded-sm"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
          alt="Creative process" 
        />
        <motion.img 
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute w-[52%] h-[62%] bottom-0 right-0 z-20 border-4 border-black object-cover rounded-sm"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" 
          alt="Design details" 
        />
        <motion.img 
          style={{ y: y3, top: "50%" }}
          initial={{ opacity: 0, y: "0%" }}
          whileInView={{ opacity: 1, y: "-50%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute w-[38%] h-[45%] left-[55%] z-30 border-4 border-black object-cover rounded-sm"
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" 
          alt="Technical innovation" 
        />
      </div>

      <div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-2.5 mb-4 text-[10px] tracking-[0.2em] text-primary font-bold lowercase"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
          {t('about.label')}
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[clamp(32px,3.5vw,52px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white mb-6"
        >
          We Build Brands.<br/>
          <em className="not-italic text-primary">We Build Futures.</em>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-[15px] text-white/50 leading-[1.8] mb-12"
        >
          SPRDLX is an AI Design Studio & Venture Builder. By fusing data-driven strategy with world-class design, we launch the next generation of consumer startups.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="border-l-2 border-primary pl-4"
          >
            <div className="text-[clamp(32px,3vw,48px)] font-extrabold text-white tracking-[-0.04em] leading-none flex items-start gap-[3px]">
              <AnimatedCounter target={5} suffix="+" />
            </div>
            <div className="text-[11px] text-white/50 tracking-[0.05em] mt-1.5 leading-[1.4]">
              {t('about.stat_ventures_label')}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="border-l-2 border-primary pl-4"
          >
            <div className="text-[clamp(32px,3vw,48px)] font-extrabold text-white tracking-[-0.04em] leading-none flex items-start gap-[3px]">
              <AnimatedCounter target={5} suffix="+" />
            </div>
            <div className="text-[11px] text-white/50 tracking-[0.05em] mt-1.5 leading-[1.4]">
              {t('about.stat_models_label')}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="border-l-2 border-primary pl-4"
          >
            <div className="text-[clamp(32px,3vw,48px)] font-extrabold text-white tracking-[-0.04em] leading-none flex items-start gap-[3px]">
              <AnimatedCounter target={7} suffix="+" />
            </div>
            <div className="text-[11px] text-white/50 tracking-[0.05em] mt-1.5 leading-[1.4]">
              {t('about.stat_builders_label')}
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};
