import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      num: '01',
      title: 'BRAND & PRODUCT CONCEPTION',
      img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80',
      bullets: ['Consumer Brand Creation', 'AI-Native Product Design', 'Digital Experience (UX/UI)', 'Data-Driven Strategy']
    },
    {
      num: '02',
      title: 'APPLIED AI & RESEARCH',
      img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80',
      bullets: ['Proprietary Model Development', 'R&D Sprints', 'Data Infrastructure', 'Fundamental Algorithm Design']
    },
    {
      num: '03',
      title: 'VENTURE STUDIO & INCUBATION',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
      bullets: ['Co-Creation Partnerships', 'Internal Venture Launch', 'Go-to-Market Prototyping', 'Startup-as-a-Service']
    },
    {
      num: '04',
      title: 'THE BUILDER NETWORK',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      bullets: ["Access to 'The Lab'", 'Collaborative R&D Sprints', 'AI & Design Masterclasses', 'Community-Sourced Talent']
    }
  ];

  return (
    <section id="services" className="bg-white pt-[100px]">
      <div className="px-6 md:px-12 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2.5 mb-4 text-[10px] tracking-[0.2em] text-primary font-bold lowercase"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
          {t('services.label')}
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[clamp(32px,3.5vw,52px)] font-extrabold tracking-[-0.03em] text-dark max-w-[600px] leading-[1.1]"
        >
          {t('services.heading')}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[15px] text-text-muted leading-[1.8] max-w-[520px] mt-4"
        >
          {t('services.body')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="border-r border-gray-200">
          {services.map((service, i) => (
            <div 
              key={service.num}
              onClick={() => setActiveService(i)}
              className={`flex items-center gap-5 p-7 px-12 cursor-none border-b border-gray-200 border-l-[3px] transition-all duration-300 ${activeService === i ? 'border-l-primary bg-[#fafafa]' : 'border-l-transparent bg-white'}`}
            >
              <div className={`text-[11px] font-semibold tracking-[0.08em] transition-colors ${activeService === i ? 'text-primary' : 'text-text-muted'}`}>
                {service.num}
              </div>
              <div className="text-lg font-bold text-dark tracking-[-0.01em]">
                {service.title}
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={services[activeService].img} 
                alt={services[activeService].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-12 pt-24 pb-8">
                {services[activeService].bullets.map((bullet, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.05), ease: "easeOut" }}
                    className="flex items-start gap-2.5 mb-3 text-[13px] text-white leading-[1.5]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {bullet}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
