import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useUIStore } from '../../store/uiStore';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';

interface NavbarProps {
  transparent?: boolean;
  visible?: boolean;
}

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'cn', label: 'CN' },
  { code: 'th', label: 'TH' },
  { code: 'vn', label: 'VN' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ transparent = true, visible = true }) => {
  const { t, i18n } = useTranslation();
  const { navOpen, setNavOpen, language, setLanguage } = useUIStore();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: '#' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.projects'), href: '#projects' },
  ];

  const handleLangChange = (code: string) => {
    setLanguage(code as any);
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: '-100%' }}
      animate={{
        y: visible ? '0%' : '-100%',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.96)' : (transparent ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 1)'),
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      transition={{
        y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        backgroundColor: { duration: 0.3, ease: 'easeOut' },
        backdropFilter: { duration: 0.3, ease: 'easeOut' },
        boxShadow: { duration: 0.3, ease: 'easeOut' },
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[72px]"
    >
      <div className="flex items-center">
        <a href="#" className="text-2xl font-display text-primary tracking-tighter">
          SPRDLX
        </a>
      </div>

      <div className="hidden lg:flex items-center gap-9">
        {navLinks.map((link, i) => (
          <MagneticButton key={link.label}>
            <motion.a
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: 'easeOut' }}
              className="block relative text-[13px] font-medium text-white/75 hover:text-white tracking-[0.04em] pb-[3px] group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 origin-left transition-transform duration-300 ease-out-expo group-hover:scale-x-100" />
            </motion.a>
          </MagneticButton>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <div className="relative hidden md:block">
          <button 
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 text-xs font-semibold text-white/50 hover:text-white tracking-[0.1em] uppercase transition-colors"
          >
            {language} <ChevronDown size={14} />
          </button>
          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 bg-black border border-white/10 rounded overflow-hidden flex flex-col"
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLangChange(l.code)}
                    className={`px-4 py-2 text-xs font-semibold tracking-[0.1em] uppercase text-left hover:bg-white/5 transition-colors ${language === l.code ? 'text-primary' : 'text-white/50'}`}
                  >
                    {l.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>



        <button 
          className="lg:hidden flex flex-col gap-[5px] p-2 z-50 relative"
          onClick={() => setNavOpen(!navOpen)}
        >
          <motion.span 
            animate={{ rotate: navOpen ? 45 : 0, y: navOpen ? 6.5 : 0 }}
            className="block w-6 h-[1.5px] bg-white transition-transform"
          />
          <motion.span 
            animate={{ opacity: navOpen ? 0 : 1 }}
            className="block w-6 h-[1.5px] bg-white transition-opacity"
          />
          <motion.span 
            animate={{ rotate: navOpen ? -45 : 0, y: navOpen ? -6.5 : 0 }}
            className="block w-6 h-[1.5px] bg-white transition-transform"
          />
        </button>
      </div>
    </motion.nav>
  );
};
