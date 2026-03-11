import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveImage(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[90vh] bg-white grid grid-cols-1 lg:grid-cols-2 overflow-hidden z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-10 h-10 bg-black/5 flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-primary group cursor-none"
            >
              <X size={18} className="text-dark group-hover:text-white transition-colors" />
            </button>

            <div className="relative h-[45vh] lg:h-full bg-[#111] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={project.images[activeImage]}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-none ${activeImage === i ? 'w-5 bg-white' : 'w-1.5 bg-white/30'}`}
                  />
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 overflow-y-auto">
              <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-dark mb-6">
                {project.title}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-[#f8f8f8]">
                  <div className="text-[10px] tracking-[0.12em] text-primary font-bold mb-1">LOCATION</div>
                  <div className="text-[13px] text-dark font-semibold">{project.location}</div>
                </div>
                <div className="p-4 bg-[#f8f8f8]">
                  <div className="text-[10px] tracking-[0.12em] text-primary font-bold mb-1">INDUSTRY</div>
                  <div className="text-[13px] text-dark font-semibold">{project.industry}</div>
                </div>
                <div className="p-4 bg-[#f8f8f8]">
                  <div className="text-[10px] tracking-[0.12em] text-primary font-bold mb-1">SCOPE OF WORK</div>
                  <div className="text-[13px] text-dark font-semibold">{project.scope}</div>
                </div>
                <div className="p-4 bg-[#f8f8f8]">
                  <div className="text-[10px] tracking-[0.12em] text-primary font-bold mb-1">SIZE</div>
                  <div className="text-[13px] text-dark font-semibold">{project.size}</div>
                </div>
              </div>
              
              <p className="text-sm text-text-muted leading-[1.8]">
                {project.desc}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
