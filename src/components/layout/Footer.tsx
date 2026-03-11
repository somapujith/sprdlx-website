import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const navLinks = [
    { label: t('nav.home'), href: '#' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.projects'), href: '#projects' },
  ];

  return (
    <footer className="bg-black border-t border-white/5 py-10 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        {/* Brand + newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[260px]"
        >
          <div className="text-2xl font-display text-primary tracking-tighter mb-3">SPRDLX</div>
          <p className="text-[12px] text-white/40 leading-[1.7] mb-5">{t('footer.tagline')}</p>
          <div className="flex border border-white/10 group focus-within:border-primary transition-colors">
            <input
              type="email"
              placeholder={t('footer.email_placeholder')}
              className="flex-1 bg-transparent outline-none px-4 py-2.5 text-[12px] text-white placeholder:text-white/25"
            />
            <button className="bg-primary px-4 flex items-center justify-center hover:bg-[#c94d1a] transition-colors">
              <ArrowRight size={13} className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Nav + contact in a row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-12"
        >
          <div>
            <div className="text-[10px] tracking-[0.15em] text-white/30 font-bold mb-3">NAVIGATION</div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-[12px] text-white/50 hover:text-primary transition-colors w-fit">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.15em] text-white/30 font-bold mb-3">CONTACT</div>
            <a href="mailto:Hello@sprdlx.com" className="block text-[12px] text-white/50 hover:text-primary transition-colors mb-1.5">
              Hello@sprdlx.com
            </a>
            <a href="tel:+918008477440" className="block text-[12px] text-white/50 hover:text-primary transition-colors">
              +91 8008477440
            </a>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.15em] text-white/30 font-bold mb-3">FOLLOW</div>
            <div className="flex gap-2.5">
              <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary group rounded-full transition-all">
                <Linkedin size={13} className="text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary group rounded-full transition-all">
                <Twitter size={13} className="text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary group rounded-full transition-all">
                <Instagram size={13} className="text-white/50 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-5 text-[11px] text-white/25 gap-3">
        <span>© {new Date().getFullYear()} SPRDLX. All Rights Reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white/60 transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
