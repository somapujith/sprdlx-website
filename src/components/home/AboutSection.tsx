import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedCounter } from '../shared/AnimatedCounter';
import { TextScrub } from '../shared/TextScrub';

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineWidth = useTransform(scrollYProgress, [0.15, 0.5], ['0%', '100%']);

  const stats = [
    { value: 5, suffix: '+', label: 'Ventures Launched' },
    { value: 5, suffix: '+', label: 'AI Models Deployed' },
    { value: 7, suffix: '+', label: 'Builders in Ecosystem' },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="bg-black relative py-20 sm:py-[140px] md:py-[180px] px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Large section identifier */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-[80px] right-6 md:right-12 text-[clamp(100px,18vw,260px)] font-sans font-black leading-none tracking-tighter pointer-events-none select-none"
      >
        02
      </motion.div>

      {/* Top: Headline layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 mb-20 md:mb-32">
        {/* Left: Label + Headline */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-2.5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
            <span className="text-[10px] tracking-[0.25em] text-primary font-bold uppercase">
              About Us
            </span>
          </motion.div>

          <h2 className="text-[clamp(36px,5.5vw,90px)] font-sans font-extrabold tracking-tighter leading-[0.92] mb-8">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Born to Create.
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block font-serif italic font-medium text-primary tracking-normal"
              >
                Built to Scale.
              </motion.span>
            </div>
          </h2>
        </div>

        {/* Right: Typographic branding element */}
        <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span
              className="block text-[clamp(60px,10vw,140px)] font-['Franie'] font-bold tracking-tight leading-[0.85] text-white/[0.04]"
            >
              SPRDLX
            </span>
            <div className="flex items-center justify-between mt-4">
              <span className="text-[10px] tracking-[0.2em] text-white/25 font-semibold uppercase">
                Design × Technology
              </span>
              <span className="text-[10px] tracking-[0.15em] text-white/15 font-mono">
                Est. 2024
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Text scrub paragraph */}
      <div className="relative z-10 max-w-[900px] mb-20 md:mb-28">
        <TextScrub
          text="SPRDLX is an AI Design Studio & Venture Builder. By fusing data-driven strategy with world-class design, we launch the next generation of consumer startups — brands that resonate, products that scale, ventures that last."
          className="text-[clamp(18px,2.2vw,28px)] text-white leading-[1.6] font-medium tracking-[-0.01em]"
        />
      </div>

      {/* Animated divider */}
      <motion.div
        className="h-px bg-white/10 mb-0 relative z-10"
        style={{ width: lineWidth }}
      />

      {/* Stats — horizontal editorial band */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 border-b border-white/8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
            className="group py-12 md:py-16 md:px-8 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r border-white/8 last:border-0 cursor-default"
          >
            <div className="flex items-baseline gap-1.5 mb-3">
              <span className="text-[clamp(48px,5vw,72px)] font-sans font-black text-white tracking-tighter leading-none tabular-nums">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
            </div>
            <span className="text-[11px] tracking-[0.15em] text-white/30 font-semibold uppercase group-hover:text-white/50 transition-colors duration-500">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
