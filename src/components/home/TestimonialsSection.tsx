import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      company: 'Anthill Ventures',
      logo: '/logos/anthill.svg',
      scope: 'AI | BRANDING | CONTENT | WEBSITE',
      quote: '"SPRDLX completely transformed how we present our India-first thesis. Their custom AI tools now power our daily investment analysis — what used to take hours takes minutes. The brand refresh was the cherry on top."'
    },
    {
      company: 'Anaar',
      logo: '/logos/anaar.svg',
      scope: 'BRAND STRATEGY | PITCH DECKS',
      quote: '"They didn\'t just design a brand — they built a conviction. Our pitch deck went from forgettable to fundable. The strategy behind every slide showed deep understanding of both sustainability and consumer psychology."'
    },
    {
      company: 'Esthetic Insights',
      logo: '/logos/ei.svg',
      scope: 'BRANDING | PACKAGING | STRATEGY',
      quote: '"Our brand packaging and identity felt entirely new yet exactly right. They guided our visual aesthetic perfectly."'
    },
    {
      company: 'Sunday Everyday',
      logo: '/logos/sunday_everyday.svg',
      scope: 'BRANDING | DIGITAL PRODUCTS | STRATEGY',
      quote: '"From our mascot to the custom game to the world\'s first 3D + AI song — SPRDLX didn\'t just build our brand, they built an entire universe. Every touchpoint feels alive and distinctly us."'
    },
    {
      company: 'Pulp',
      logo: '/logos/smiley.svg',
      scope: 'BRANDING | DIGITAL PRODUCTS | STRATEGY',
      quote: '"The GTM strategy SPRDLX masterminded for our collaborative line was a sell-out success. Their ability to blend brand identity with market timing is unmatched. We went from unknown to undeniable."'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-white py-[100px] px-6 md:px-12 overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2.5 mb-4 text-[10px] tracking-[0.2em] text-primary font-bold lowercase">
            <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
            client reviews
          </div>
          <h2 className="text-[clamp(32px,3.5vw,52px)] font-extrabold tracking-[-0.03em] text-dark leading-[1.1]">
            What Our<br/>Builders Say
          </h2>
        </motion.div>

        <div className="flex gap-3">
          <button 
            onClick={handlePrev}
            className="w-11 h-11 border border-gray-300 flex items-center justify-center transition-all duration-200 hover:bg-primary hover:border-primary group cursor-none"
          >
            <ChevronLeft size={18} className="text-dark group-hover:text-white transition-colors" />
          </button>
          <button 
            onClick={handleNext}
            className="w-11 h-11 border border-gray-300 flex items-center justify-center transition-all duration-200 hover:bg-primary hover:border-primary group cursor-none"
          >
            <ChevronRight size={18} className="text-dark group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-6"
          animate={{ x: `calc(-${activeIndex * 50}% - ${activeIndex * 12}px)` }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {testimonials.map((testi, i) => (
            <div 
              key={i} 
              className="flex-none w-full md:w-[calc(50%-12px)] p-10 border border-gray-200 transition-colors duration-300 hover:border-primary/30 group"
            >
              <img 
                src={testi.logo} 
                alt={testi.company} 
                className="max-h-9 max-w-[140px] mb-5 object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <div className="text-[15px] font-bold text-dark mb-1">{testi.company}</div>
              <div className="text-[10px] tracking-[0.1em] text-primary font-semibold mb-5">{testi.scope}</div>
              <p className="text-sm text-text-muted leading-[1.8]">
                {testi.quote}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex gap-2 mt-8 justify-center">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full cursor-none transition-all duration-300 ease-out-expo ${activeIndex === i ? 'w-6 bg-primary' : 'w-2 bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
};
