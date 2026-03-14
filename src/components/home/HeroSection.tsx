import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState('');
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const fade = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Bangkok',
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen min-h-[700px] flex flex-col justify-between overflow-hidden"
    >
      {/* Background SPRDLX watermark */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none will-change-transform"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
          className="text-[clamp(150px,28vw,420px)] font-sans md:font-['Franie'] font-bold tracking-tight leading-none text-white/[0.03]"
        >
          SPRDLX
        </motion.span>
      </motion.div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px]" />
      </div>

      {/* Main content — centered */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 md:px-12"
      >
        {/* Eyebrow */}
        <div className="overflow-hidden mb-8 md:mb-10">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.8, delay: 1.0, ease }}
            className="flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] text-white/30 font-semibold uppercase">
              AI Design Studio & Venture Builder
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </div>

        {/* Brand name — hero centerpiece */}
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.2, delay: 1.1, ease }}
          >
            <span
              className="block text-[clamp(80px,18vw,280px)] font-sans md:font-['Franie'] font-bold tracking-tight leading-[0.85] text-white"
            >
              SPRDLX
            </span>
          </motion.div>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: 1.4, ease }}
            className="flex items-center gap-3 md:gap-5 flex-wrap justify-center"
          >
            <span className="text-[clamp(18px,3vw,36px)] font-sans font-black uppercase tracking-tight text-white/20">
              Where Ideas
            </span>
            <span className="text-[clamp(18px,3vw,36px)] font-serif italic font-medium text-primary tracking-normal">
              Become
            </span>
            <span className="text-[clamp(18px,3vw,36px)] font-sans font-black uppercase tracking-tight text-white/20">
              Iconic
            </span>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.7, ease }}
          className="h-px bg-white/10 origin-center w-full max-w-[500px] mb-6 will-change-transform"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.0, ease: 'easeOut' }}
          className="text-[13px] md:text-[14px] text-white/30 max-w-[480px] leading-[1.85] font-medium mb-10"
        >
          By fusing data-driven strategy with world-class design, we launch the next generation of consumer startups and AI-native products.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2, ease: 'easeOut' }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-4 text-[11px] tracking-[0.15em] text-white/40 font-semibold uppercase transition-colors duration-300 hover:text-white"
          >
            <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-500">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
            View Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5, ease: 'easeOut' }}
        className="relative z-10 border-t border-white/[0.06]"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-3 sm:py-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[8px] sm:text-[9px] tracking-[0.15em] text-white/25 font-semibold uppercase">
                Available
              </span>
            </div>
            <span className="hidden sm:block text-[9px] tracking-[0.15em] text-white/15 font-mono">
              BKK {time}
            </span>
          </div>

          <div className="hidden md:flex flex-col items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
            <span className="text-[8px] tracking-[0.25em] text-white/15 font-semibold uppercase">
              Scroll
            </span>
            <div className="w-px h-7 bg-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-scroll-line" />
            </div>
          </div>

          <a
            href="mailto:Hello@sprdlx.com"
            className="group flex items-center gap-2 sm:gap-2.5 text-[8px] sm:text-[9px] tracking-[0.12em] text-white/30 font-semibold uppercase transition-colors duration-300 hover:text-white"
          >
            <span className="hidden sm:inline">Hello@sprdlx.com</span>
            <span className="sm:hidden">Email</span>
            <span className="w-5 h-5 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <svg width="7" height="7" viewBox="0 0 8 8" fill="none" className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]">
                <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
