import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal } from '../shared/ProjectModal';

const ProjectCard = ({ project, onClick }: { project: any; onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col gap-6 cursor-none w-full"
    >
      {/* 3D Tilt Image Wrapper */}
      <div className="perspective-1000" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div 
          ref={cardRef}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-[#111]"
        >
          <img 
            src={project.images[0]} 
            alt={project.title} 
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out-expo scale-105 group-hover:scale-110"
          />
          <img 
            src={project.images[1]} 
            alt={project.title} 
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1s] ease-out-expo group-hover:opacity-100"
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          
          {/* Expanding Hover Blur Circle with Arrow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white scale-0 opacity-0 transition-all duration-700 ease-out-expo group-hover:scale-100 group-hover:opacity-100 border border-white/20 z-20">
              <ArrowUpRight strokeWidth={1.5} size={32} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150" />
            </div>
          </div>

          {/* Logo bottom left */}
          <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-10 bg-gradient-to-t from-black/80 to-transparent">
             <img 
              src={project.logo} 
              alt="Logo" 
              loading="lazy"
              className="max-h-8 max-w-[120px] brightness-0 invert"
            />
          </div>
        </motion.div>
      </div>

      {/* Details Box */}
      <div className="flex flex-col gap-5 mt-2">
        <h3 className="font-sans text-[clamp(2rem,3.5vw,4rem)] font-extrabold uppercase tracking-tighter leading-none group-hover:text-primary transition-colors duration-500">
          {project.title}
        </h3>
        
        <div className="flex items-center justify-between border-t border-white/10 pt-5 pb-2">
          <span className="text-sm font-medium text-white/60">{project.industry}</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">{project.size}</span>
        </div>
        
        {/* Scope tags */}
        <div className="flex flex-wrap gap-2">
          {project.scope.split(' | ').map((tag: string) => (
            <span key={tag} className="text-[10px] tracking-[0.1em] text-white/40 uppercase font-semibold border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? 150 : 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? -200 : 0]);

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
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
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
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
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
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
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
        'https://images.unsplash.com/photo-1555529733-0e670560f8e1?auto=format&fit=crop&q=80&w=800'
      ]
    }
  ];

  const leftProjects = projects.filter((_, i) => i % 2 === 0);
  const rightProjects = projects.filter((_, i) => i % 2 !== 0);

  return (
    <section id="projects" ref={containerRef} className="bg-black relative min-h-screen pt-[120px] pb-[160px] px-6 md:px-12 overflow-hidden">
      {/* High-end Editorial Typography Header */}
      <div className="flex flex-col mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="flex items-center gap-2.5 mb-6 text-[10px] tracking-[0.2em] text-primary font-bold lowercase">
            <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
            selected cases
          </div>
          <h2 className="text-[clamp(50px,8vw,110px)] font-sans font-extrabold tracking-tighter leading-[0.9]">
            Ventures We've<br/>
            <span className="font-serif italic font-medium text-white/40 tracking-normal pr-4">Brought to Life.</span>
          </h2>
        </motion.div>
      </div>

      {/* Asymmetric Parallax Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-24 relative z-10">
        
        {/* Left Column (Scrolls slower/down) */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-16 md:gap-32">
          {leftProjects.map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
          ))}
        </motion.div>

        {/* Right Column (Scrolls faster/up, offset downward to begin with) */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-16 md:gap-32 md:mt-[25vh]">
          {rightProjects.map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
          ))}
        </motion.div>

      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
