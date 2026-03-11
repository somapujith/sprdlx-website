import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#projects' },
    { label: 'Team', href: '#team' },
  ];

  const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-black border-t border-white/5">
      {/* Big CTA block */}
      <div className="px-8 md:px-16 pt-20 pb-16 border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.2em] text-primary font-semibold mb-6">START A PROJECT</p>
          <h2 className="font-sans text-[clamp(2.4rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-tighter text-white mb-10 max-w-4xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif' }}>
            Let's build something<br />
            <span className="text-white/20">worth remembering.</span>
          </h2>
          <a
            href="mailto:Hello@sprdlx.com"
            className="inline-flex items-center gap-3 group"
          >
            <span className="text-[clamp(1rem,2vw,1.25rem)] text-white/50 hover:text-white transition-colors duration-300 border-b border-white/20 group-hover:border-primary pb-1 transition-all">
              Hello@sprdlx.com
            </span>
            <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <ArrowUpRight size={16} className="text-white/50 group-hover:text-white transition-colors" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Info grid */}
      <div className="px-8 md:px-16 py-12 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/5">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-2 md:col-span-1"
        >
          <div className="text-xl font-display text-primary tracking-tighter mb-3">SPRDLX</div>
          <p className="text-[12px] text-white/35 leading-[1.8] max-w-[200px]">
            AI-powered design studio crafting brands that lead.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <p className="text-[10px] tracking-[0.15em] text-white/25 font-bold mb-4">NAVIGATE</p>
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-white/45 hover:text-white transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-[10px] tracking-[0.15em] text-white/25 font-bold mb-4">CONTACT</p>
          <div className="flex flex-col gap-2.5">
            <a href="mailto:Hello@sprdlx.com" className="text-[13px] text-white/45 hover:text-white transition-colors w-fit">
              Hello@sprdlx.com
            </a>
            <a href="tel:+918008477440" className="text-[13px] text-white/45 hover:text-white transition-colors w-fit">
              +91 8008477440
            </a>
          </div>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-[10px] tracking-[0.15em] text-white/25 font-bold mb-4">FOLLOW</p>
          <div className="flex flex-col gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2.5 text-[13px] text-white/45 hover:text-white transition-colors group w-fit"
              >
                <Icon size={13} className="text-white/30 group-hover:text-primary transition-colors" />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-white/20">
        <span>© {new Date().getFullYear()} SPRDLX. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/50 transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};
