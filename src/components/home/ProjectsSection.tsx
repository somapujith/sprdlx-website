import React, { useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal } from '../shared/ProjectModal';

const projects = [
  {
    id: '0',
    title: 'Anthill',
    category: 'all',
    desc: "Sharpened Anthill's brand for their new India-first thesis. Built custom AI to supercharge their investment analysis.",
    location: 'India',
    industry: 'AI / Investments',
    scope: 'AI | Branding | Content | Website',
    size: 'Full Scope',
    logo: '/logos/anthill.svg',
    images: ['/projects/anthill.png']
  },
  {
    id: '1',
    title: 'Anaar',
    category: 'others',
    desc: 'Created a fresh take on everyday essentials, blending design and sustainability for modern consumers.',
    location: 'Global',
    industry: 'Consumer / Sustainability',
    scope: 'Brand Strategy | Pitch Decks',
    size: 'Brand Strategy',
    logo: '/logos/anaar.svg',
    images: ['/projects/anaar.jpg']
  },
  {
    id: '2',
    title: 'Sunday Everyday',
    category: 'all',
    desc: 'Built their entire brand universe, led by a charismatic mascot. Expanded their world with a custom game and a pioneering 3D + AI song.',
    location: 'Global',
    industry: 'Consumer / Lifestyle',
    scope: 'Branding | Digital Products | Strategy',
    size: 'Full Scope',
    logo: '/logos/sunday_everyday.svg',
    images: ['/projects/sunday_everyday.jpg']
  },
  {
    id: '3',
    title: 'Pulp',
    category: 'others',
    desc: "Built Pulp's breakout brand identity and communication strategy. Masterminded the Go-To-Market (GTM) strategy for their sell-out collaborative line.",
    location: 'Global',
    industry: 'Consumer / Retail',
    scope: 'Branding | Digital Products | Strategy',
    size: 'GTM Strategy',
    logo: '/logos/smiley.svg',
    images: ['/projects/pulp.jpg']
  }
];

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Cursor-following image position (MotionValues = no re-renders)
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 250, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 250, damping: 28 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }, [cursorX, cursorY]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="bg-black relative min-h-screen py-[120px] px-6 md:px-12 overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2.5 mb-6 text-[10px] tracking-[0.2em] text-primary font-bold lowercase">
            <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
            selected cases
          </div>
          <h2 className="text-[clamp(50px,8vw,110px)] font-sans font-extrabold tracking-tighter leading-[0.9]">
            Ventures We've<br />
            <span className="font-serif italic font-medium text-white/40 tracking-normal pr-4">Brought to Life.</span>
          </h2>
        </motion.div>
      </div>

      {/* Floating cursor-following image */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="hidden md:block fixed top-0 left-0 z-30 pointer-events-none will-change-transform"
            style={{
              x: springX,
              y: springY,
              translateX: '20px',
              translateY: '-50%',
            }}
          >
            <div className="w-[320px] h-[220px] overflow-hidden rounded-md shadow-2xl">
              <img
                src={projects[activeIndex].images[0]}
                alt={projects[activeIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project rows — typographic list */}
      <div className="relative z-10 border-t border-white/10">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setSelectedProject(project)}
            className="group border-b border-white/10 cursor-none"
          >
            <div className="flex items-center justify-between py-10 md:py-14 relative">
              {/* Left: index + title */}
              <div className="flex items-baseline gap-4 md:gap-8 overflow-hidden">
                <span className="text-[11px] md:text-xs font-mono tracking-widest text-primary/70 font-semibold tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className={`font-sans text-[clamp(2rem,6vw,5.5rem)] font-extrabold uppercase tracking-tighter leading-none transition-all duration-700 ease-out-expo ${
                    activeIndex === null || activeIndex === i
                      ? 'text-white'
                      : 'text-white/15'
                  }`}
                >
                  <span className="inline-block transition-transform duration-700 ease-out-expo group-hover:translate-x-4">
                    {project.title}
                  </span>
                </h3>
              </div>

              {/* Right: meta + arrow */}
              <div className="flex items-center gap-6 md:gap-10 shrink-0">
                <div className="hidden md:flex flex-col items-end gap-1">
                  <span
                    className={`text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors duration-500 ${
                      activeIndex === i ? 'text-white/60' : 'text-white/20'
                    }`}
                  >
                    {project.industry}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-500 ${
                      activeIndex === i ? 'text-primary' : 'text-primary/30'
                    }`}
                  >
                    {project.size}
                  </span>
                </div>

                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ease-out-expo ${
                    activeIndex === i
                      ? 'border-primary bg-primary text-black scale-100'
                      : 'border-white/10 text-white/30 scale-75'
                  }`}
                >
                  <ArrowUpRight
                    strokeWidth={2}
                    size={18}
                    className="transition-transform duration-500 ease-out-expo group-hover:rotate-45"
                  />
                </div>
              </div>
            </div>

            {/* Scope tags — slide in on hover */}
            <motion.div
              initial={false}
              animate={{
                height: activeIndex === i ? 'auto' : 0,
                opacity: activeIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-8 flex flex-wrap gap-2 md:pl-[60px]">
                {project.scope.split(' | ').map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.12em] text-white/50 uppercase font-semibold border border-white/10 rounded-full px-4 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
