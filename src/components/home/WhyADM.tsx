import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const WhyADM: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.4], ['0%', '100%']);

  const pillars = [
    {
      num: '01',
      title: 'Design-Led',
      desc: 'Every venture starts with exceptional design. We create brands and products that are beautiful, functional, and built to resonate with modern consumers.',
      keyword: 'CRAFT',
    },
    {
      num: '02',
      title: 'AI-Powered',
      desc: 'We deploy proprietary AI models and data infrastructure to give every project an unfair advantage — from analysis to execution.',
      keyword: 'INTELLIGENCE',
    },
    {
      num: '03',
      title: 'Venture-Minded',
      desc: 'We think like founders, not agencies. Every decision is made through the lens of building lasting businesses, not just deliverables.',
      keyword: 'AMBITION',
    },
  ];

  return (
    <section
      id="why"
      ref={sectionRef}
      className="bg-black text-white relative py-20 sm:py-[140px] md:py-[180px] px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* Large faded background word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-[clamp(120px,22vw,300px)] font-sans font-black uppercase tracking-tighter whitespace-nowrap"
        >
          SPRDLX
        </motion.span>
      </div>

      {/* Top section: label + heading + body in asymmetric layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 mb-24 md:mb-36">
        {/* Left: Label + Heading */}
        <div className="md:col-span-7 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-2.5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
            <span className="text-[10px] tracking-[0.2em] text-primary font-bold uppercase">
              Why SPRDLX?
            </span>
          </motion.div>

          <h2 className="text-[clamp(42px,6.5vw,100px)] font-sans font-extrabold tracking-tighter leading-[0.92]">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Bold Design.
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                AI-Powered.
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block text-primary"
              >
                Venture-Minded.
              </motion.span>
            </div>
          </h2>
        </div>

        {/* Right: Body paragraph, pushed down */}
        <div className="md:col-span-5 lg:col-span-4 lg:col-start-9 md:flex md:flex-col md:justify-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="text-[14px] md:text-[15px] text-white/45 leading-[1.85] max-w-[400px]"
          >
            SPRDLX is founded upon the idea of fusing data-driven strategy with
            world-class design to launch, scale, and future-proof the next
            generation of consumer brands and ventures.
          </motion.p>
        </div>
      </div>

      {/* Animated divider line */}
      <motion.div
        className="h-px bg-white/15 mb-0 relative z-10"
        style={{ width: lineWidth }}
      />

      {/* Pillars — horizontal band layout */}
      <div className="relative z-10">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group border-b border-white/8 cursor-none"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 py-14 md:py-20 items-start md:items-center relative">
              {/* Hover fill */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number */}
              <div className="md:col-span-1 relative z-10">
                <span className="font-mono text-xs tracking-widest text-primary/60 font-semibold">
                  {pillar.num}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-3 relative z-10">
                <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-sans font-bold tracking-tight leading-none transition-transform duration-500 ease-out group-hover:translate-x-3">
                  {pillar.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5 lg:col-span-4 relative z-10">
                <p className="text-[13px] md:text-[14px] text-white/40 leading-[1.75] group-hover:text-white/60 transition-colors duration-500">
                  {pillar.desc}
                </p>
              </div>

              {/* Keyword — right-aligned, large faded text */}
              <div className="md:col-span-3 lg:col-span-4 relative z-10 flex md:justify-end">
                <span className="text-[clamp(2rem,4vw,3.5rem)] font-sans font-black uppercase tracking-tighter text-white/[0.04] group-hover:text-white/[0.12] transition-all duration-700 ease-out group-hover:tracking-normal">
                  {pillar.keyword}
                </span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
