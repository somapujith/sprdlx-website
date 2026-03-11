import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const services = [
    {
      num: '01',
      title: 'BRAND & PRODUCT CONCEPTION',
      subtitle: 'Design',
      img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80',
      bullets: ['Consumer Brand Creation', 'AI-Native Product Design', 'Digital Experience (UX/UI)', 'Data-Driven Strategy']
    },
    {
      num: '02',
      title: 'APPLIED AI & RESEARCH',
      subtitle: 'Technology',
      img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80',
      bullets: ['Proprietary Model Development', 'R&D Sprints', 'Data Infrastructure', 'Fundamental Algorithm Design']
    },
    {
      num: '03',
      title: 'VENTURE STUDIO & INCUBATION',
      subtitle: 'Strategy',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
      bullets: ['Co-Creation Partnerships', 'Internal Venture Launch', 'Go-to-Market Prototyping', 'Startup-as-a-Service']
    },
    {
      num: '04',
      title: 'THE BUILDER NETWORK',
      subtitle: 'Community',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      bullets: ["Access to 'The Lab'", 'Collaborative R&D Sprints', 'AI & Design Masterclasses', 'Community-Sourced Talent']
    }
  ];

  return (
    <section id="services" className="bg-black text-white min-h-screen py-[120px] px-6 md:px-12 flex flex-col justify-center">
      <div className="flex flex-col mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2.5 mb-6 text-[10px] tracking-[0.2em] text-primary font-bold lowercase">
            <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
            {t('services.label', 'our capabilities')}
          </div>
          <h2 className="text-[clamp(40px,6vw,80px)] font-sans font-extrabold tracking-tighter leading-[0.95] max-w-[800px]">
            {t('services.heading', 'What we do.')}
          </h2>
          <p className="text-[15px] text-white/50 leading-[1.8] max-w-[520px] mt-6">
            {t('services.body', 'We merge bleeding-edge AI with human-centered design to construct products, brands, and systems that solve complex problems.')}
          </p>
        </motion.div>
      </div>

      <div className="w-full border-t border-white/10">
        {services.map((service, i) => (
          <div 
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            className="group border-b border-white/10 relative cursor-none"
          >
            {/* Header Row */}
            <div className={\lex items-center justify-between py-8 md:py-10 transition-colors duration-500 \\}>
              <div className="flex items-center gap-6 md:gap-12">
                <span className="font-mono text-xs md:text-sm tracking-widest text-primary font-semibold">{service.num}</span>
                <h3 className={\ont-sans text-[clamp(1.5rem,3.2vw,3.5rem)] md:text-[clamp(2rem,4vw,4.5rem)] font-bold tracking-[-0.02em] uppercase transition-transform duration-500 ease-out-expo origin-left \\}>
                  {service.title}
                </h3>
              </div>
              <span className="hidden md:block text-[10px] md:text-[11px] font-sans tracking-[0.2em] uppercase font-bold text-white/50">
                {service.subtitle}
              </span>
            </div>

            {/* Expandable Image & Info */}
            <motion.div 
              initial={false}
              animate={{ height: hoveredIndex === i ? 'auto' : '0px', opacity: hoveredIndex === i ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-12 pt-2 flex flex-col md:flex-row gap-8 lg:gap-16 items-start md:pl-[120px]">
                <div className="w-full md:w-[45%] xl:w-[35%] overflow-hidden relative">
                  <div className="aspect-[4/3] bg-[#111] overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out-expo scale-110 group-hover:scale-100"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[50%] lg:w-[40%] pt-2 md:pt-4">
                  <div className="md:hidden text-[10px] tracking-[0.2em] uppercase font-bold text-primary mb-4">
                    {service.subtitle}
                  </div>
                  <div className="flex flex-col gap-3 md:gap-4">
                    {service.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        <span className="text-[14px] md:text-[15px] font-medium text-white/70 leading-[1.6]">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
