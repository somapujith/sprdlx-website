import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { ProjectModal } from '../shared/ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

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

  return (
    <section id="projects" className="bg-black min-h-screen flex flex-col justify-center py-[80px] px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2.5 mb-4 text-[10px] tracking-[0.2em] text-primary font-bold lowercase">
            <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
            featured work
          </div>
          <h2 className="text-[clamp(32px,3.5vw,52px)] font-extrabold tracking-[-0.03em] text-white leading-[1.1]">
            Ventures We've<br/>Brought to Life
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex border border-white/20 relative"
        >
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2.5 text-xs font-semibold tracking-[0.05em] transition-colors duration-200 relative z-10 ${activeFilter === 'all' ? 'text-white' : 'text-white/50'}`}
          >
            Full Scope
            {activeFilter === 'all' && (
              <motion.div layoutId="filter-bg" className="absolute inset-0 bg-primary -z-10" />
            )}
          </button>
          <button 
            onClick={() => setActiveFilter('others')}
            className={`px-6 py-2.5 text-xs font-semibold tracking-[0.05em] transition-colors duration-200 relative z-10 ${activeFilter === 'others' ? 'text-white' : 'text-white/50'}`}
          >
            Strategy
            {activeFilter === 'others' && (
              <motion.div layoutId="filter-bg" className="absolute inset-0 bg-primary -z-10" />
            )}
          </button>
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              onClick={() => setSelectedProject(project)}
              className="relative overflow-hidden bg-[#111] cursor-none group transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              <div className="relative h-[280px] overflow-hidden bg-black">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 ease-out-expo group-hover:-translate-y-2"
                />
                <img 
                  src={project.images[1]} 
                  alt={project.title} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-600 ease-out-expo group-hover:opacity-100"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-300 z-10 group-hover:opacity-100">
                  <Play size={16} fill="white" className="text-white ml-1" />
                </div>
                <img 
                  src={project.logo} 
                  alt="Logo" 
                  loading="lazy"
                  className="absolute bottom-4 left-4 z-10 max-h-8 max-w-[120px] opacity-0 brightness-0 invert transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <div className="p-5">
                <div className="text-[15px] font-bold text-white mb-1.5">{project.title}</div>
                <div className="text-xs text-white/50 leading-[1.6] line-clamp-2">{project.desc}</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.scope.split(' | ').map((tag) => (
                    <span key={tag} className="text-[10px] tracking-[0.08em] text-primary font-semibold bg-primary/10 px-2 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
