import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '../../store/uiStore';
import { useTranslation } from 'react-i18next';

export const NavOverlay: React.FC = () => {
  const { navOpen, setNavOpen } = useUIStore();
  const { t } = useTranslation();

  const navItems = [
    { label: t('nav.projects'), href: '#projects', tag: 'PORTFOLIO', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80', hoverImg: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80' },

    { label: t('nav.about'), href: '#about', tag: 'OUR STORY', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80', hoverImg: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80' },
    { label: t('nav.services'), href: '#services', tag: 'WHAT WE DO', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80', hoverImg: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80' },
  ];

  return (
    <AnimatePresence>
      {navOpen && (
        <motion.div
          initial={{ clipPath: 'circle(0% at calc(100% - 72px) 36px)' }}
          animate={{ clipPath: 'circle(150% at calc(100% - 72px) 36px)' }}
          exit={{ clipPath: 'circle(0% at calc(100% - 72px) 36px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-black flex flex-col"
        >
          <div className="flex-1 flex overflow-hidden pt-[72px]">
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 p-6 lg:p-12 gap-0">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setNavOpen(false)}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
                  className="relative overflow-hidden border border-white/5 flex flex-col justify-end p-6 group transition-colors duration-300 hover:border-primary/30"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img src={item.img} alt="" className="w-full h-full object-cover opacity-25 transition-all duration-500 ease-out-expo group-hover:opacity-45 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 overflow-hidden">
                    <img src={item.hoverImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-400 group-hover:opacity-50" />
                  </div>
                  <div className="relative z-10 text-[10px] text-primary tracking-[0.15em] font-semibold mb-1.5 opacity-80">
                    {item.tag}
                  </div>
                  <div className="relative z-10 text-[22px] font-bold text-white tracking-[-0.02em] border-l-2 border-transparent pl-0 transition-all duration-300 group-hover:border-primary group-hover:pl-3">
                    {item.label}
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="hidden lg:flex w-[220px] border-l border-white/10 p-12 flex-col gap-10 text-white/50 text-xs leading-[1.8]">
              <div>
                <div className="text-[10px] tracking-[0.15em] text-white/30 font-semibold mb-2">CONTACT</div>
                <div>hello@sprdlx.co</div>
                <div className="mt-1 text-[11px] text-white/30">9:00 AM to 6:00 PM<br/>Monday through Friday</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] text-white/30 font-semibold mb-2">LOCATION</div>
                <a href="#" className="block hover:text-primary transition-colors">Singapore</a>
                <a href="#" className="block hover:text-primary transition-colors">Global Remote</a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
