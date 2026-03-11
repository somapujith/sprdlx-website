import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { NavOverlay } from '../components/layout/NavOverlay';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { TeamSection } from '../components/home/TeamSection';
import { FoundersSection } from '../components/home/FoundersSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { WhyADM } from '../components/home/WhyADM';
import { ProjectsSection } from '../components/home/ProjectsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

interface HomeProps {
  isLoading?: boolean;
}

export const Home: React.FC<HomeProps> = ({ isLoading = false }) => {
  return (
    <div className="min-h-screen bg-white text-dark">
      <Navbar visible={!isLoading} />
      <NavOverlay />
      
      <main>
        <HeroSection />
        
        {/* Subnav */}
        <div className="bg-dark flex flex-wrap justify-center border-t border-white/5">
          <a href="#about" className="flex items-center gap-2 px-9 py-5 text-[11px] tracking-[0.1em] text-white/40 font-semibold border-r border-white/5 transition-colors hover:text-white relative overflow-hidden group">
            <span className="absolute inset-0 bg-primary opacity-0 scale-y-0 origin-bottom transition-all duration-300 ease-out-expo group-hover:opacity-10 group-hover:scale-y-100" />
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            New Ventures
          </a>

          <a href="#services" className="flex items-center gap-2 px-9 py-5 text-[11px] tracking-[0.1em] text-white/40 font-semibold border-r border-white/5 transition-colors hover:text-white relative overflow-hidden group">
            <span className="absolute inset-0 bg-primary opacity-0 scale-y-0 origin-bottom transition-all duration-300 ease-out-expo group-hover:opacity-10 group-hover:scale-y-100" />
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Our Capabilities
          </a>
          <a href="#projects" className="flex items-center gap-2 px-9 py-5 text-[11px] tracking-[0.1em] text-white/40 font-semibold border-r border-white/5 transition-colors hover:text-white relative overflow-hidden group">
            <span className="absolute inset-0 bg-primary opacity-0 scale-y-0 origin-bottom transition-all duration-300 ease-out-expo group-hover:opacity-10 group-hover:scale-y-100" />
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Featured Work
          </a>
        </div>

        <AboutSection />
        <TeamSection />
        <FoundersSection />
        <ServicesSection />
        <WhyADM />
        <ProjectsSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
};
