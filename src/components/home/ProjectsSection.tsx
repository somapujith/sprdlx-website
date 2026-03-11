import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ProjectModal } from '../shared/ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Floating cursor logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

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
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800'
      ]
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
      images: [
        'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
      ]
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
      images: [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
      ]
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
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1555529733-0e670560f8e1?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800'
      ]
    }
  ];

  const filteredProjects = projects.filter(p => activeFilter === 'all' ? true : p.category === activeFilter);

  // Clean up hovered index on filter change
  useEffect(() => {
    setHoveredIndex(null);
  }, [activeFilter]);

  return (
    <section id="projects" className="bg-black min-h-screen flex flex-col justify-start py-[120px] px-6 md:px-12 relative overflow-hidden" onMouseMove={handleMouseMove}>
      
      {/* Floating Image Cursor Reveal (Desktop only) */}
      <motion.div
        className="pointer-events-none fixed z-40 hidden md:block overflow-hidden bg-surface"
        style={{
          x: imageX,
          y: imageY,
          translateX: '-50%',
          translateY: '-50%',
          width: 400,
          height: 480,
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      >
        <div className="w-full h-full relative">
          {filteredProjects.map((project, i) => (
            <img
              key={`float-img-${project.id}`}
              src={project.images[0]}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out-custom ${hoveredIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
            />
          ))}
          {/* Overlay text / "View Project" on image */}
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300">
             <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-[10px] tracking-widest uppercase font-bold transform -rotate-12">
               View
             </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="flex items-center gap-2.5 mb-4 text-[10px] tracking-[0.2em] text-primary font-bold lowercase">
            <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
            featured work
          </div>
          <h2 className="text-[clamp(40px,6vw,80px)] font-sans font-extrabold tracking-tighter leading-[0.95]">
            Ventures We've<br/>Brought to Life
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex border border-white/20 relative z-10"
        >
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2.5 text-xs font-semibold tracking-[0.05em] transition-colors duration-200 relative z-10 ${activeFilter === 'all' ? 'text-white' : 'text-white/50'}`}
          >
            Full Scope
            {activeFilter === 'all' && (
              <motion.div layoutId="projects-filter-bg" className="absolute inset-0 bg-primary -z-10" />
            )}
          </button>
          <button 
            onClick={() => setActiveFilter('others')}
            className={`px-6 py-2.5 text-xs font-semibold tracking-[0.05em] transition-colors duration-200 relative z-10 ${activeFilter === 'others' ? 'text-white' : 'text-white/50'}`}
          >
            Strategy
            {activeFilter === 'others' && (
              <motion.div layoutId="projects-filter-bg" className="absolute inset-0 bg-primary -z-10" />
            )}
          </button>
        </motion.div>
      </div>

      <div className="w-full flex-1 flex flex-col justify-center border-t border-white/10 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
              className={`group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-14 border-b border-white/10 cursor-none transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== i ? 'opacity-30' : 'opacity-100'}`}
            >
              {/* Left Side: Number & Giant Title */}
              <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto mb-6 md:mb-0">
                <span className="font-mono text-xs md:text-sm text-primary tracking-widest">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="font-sans text-[clamp(2.5rem,5.5vw,7rem)] font-extrabold uppercase tracking-tighter leading-none transition-transform duration-500 ease-out-expo md:group-hover:translate-x-6 origin-left">
                  {project.title}
                </h3>
              </div>

              {/* Right Side: Meta Data & Mobile Image */}
              <div className="flex flex-col md:items-end w-full md:w-auto relative">
                {/* Mobile Fallback Image */}
                <div className="md:hidden w-full h-[200px] mt-4 mb-6 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <span className="text-white/60 text-sm md:text-base font-medium transition-colors group-hover:text-white">
                    {project.industry}
                  </span>
                  <div className="flex gap-2 items-center text-left md:text-right text-[10px] tracking-[0.2em] font-bold uppercase text-primary">
                    {project.size}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
