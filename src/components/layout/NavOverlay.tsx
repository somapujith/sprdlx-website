import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '../../store/uiStore';
import { useTranslation } from 'react-i18next';

export const NavOverlay: React.FC = () => {
  const { navOpen, setNavOpen } = useUIStore();
  const { t } = useTranslation();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && navOpen) setNavOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [navOpen, setNavOpen]);

  const navItems = [
    { label: t('nav.projects'), href: '#projects', tag: 'PORTFOLIO' },
    { label: t('nav.about'), href: '#about', tag: 'OUR STORY' },
    { label: 'Team', href: '#team', tag: 'OUR PEOPLE' },
  ];

  return (
    <AnimatePresence>
      {navOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-black flex flex-col will-change-transform"
          role="dialog"
          aria-label="Navigation menu"
        >
          <nav className="flex-1 flex overflow-hidden pt-[72px]">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 lg:p-12 gap-3">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setNavOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
                  className="relative overflow-hidden border border-white/5 flex flex-col justify-end p-6 sm:p-8 group transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.02] min-h-[140px] sm:min-h-[180px]"
                >
                  <div className="relative z-10 text-[10px] text-primary tracking-[0.15em] font-semibold mb-1.5 opacity-80">
                    {item.tag}
                  </div>
                  <div className="relative z-10 text-[20px] sm:text-[22px] font-bold text-white tracking-[-0.02em] border-l-2 border-transparent pl-0 transition-all duration-300 group-hover:border-primary group-hover:pl-3">
                    {item.label}
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="hidden lg:flex w-[220px] border-l border-white/10 p-12 flex-col gap-10 text-white/50 text-xs leading-[1.8]">
              <div>
                <div className="text-[10px] tracking-[0.15em] text-white/30 font-semibold mb-2">CONTACT</div>
                <a href="mailto:Hello@sprdlx.com" className="hover:text-primary transition-colors">Hello@sprdlx.com</a>
                <div className="mt-1 text-[11px] text-white/30">9:00 AM to 6:00 PM<br/>Monday through Friday</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] text-white/30 font-semibold mb-2">LOCATION</div>
                <span className="block text-white/40">India</span>
                <span className="block text-white/40">Global Remote</span>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
