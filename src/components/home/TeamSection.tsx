import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const TEAM: TeamMember[] = [
  {
    name: 'Place Holder 1',
    role: 'Backend Developer',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=750',
  },
  {
    name: 'Place Holder 2',
    role: 'Creative Developer',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600&h=750',
  },
];

const TeamCard: React.FC<{ member: TeamMember; index: number }> = React.memo(({ member, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden cursor-none group"
        style={{ aspectRatio: '3 / 4' }}
      >
        <img
          src={member.img}
          alt={member.name}
          draggable={false}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover select-none transition-all duration-700 ease-out ${
            hovered ? 'grayscale-0 scale-[1.06]' : 'grayscale scale-100'
          }`}
        />

        {/* Hover tint */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: 'linear-gradient(135deg, rgba(232,93,38,0.4) 0%, rgba(180,20,10,0.2) 100%)',
            mixBlendMode: 'multiply',
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%)',
          }}
        />

        {/* Name overlay on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <div className={`text-[15px] md:text-[17px] font-bold text-white tracking-[-0.01em] transition-all duration-500 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-60'}`}>
            {member.name}
          </div>
          <div className={`text-[10px] md:text-[11px] tracking-[0.1em] uppercase text-primary font-semibold mt-1 transition-all duration-500 delay-75 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
            {member.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="bg-black py-20 sm:py-[120px] md:py-[160px] px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 mb-16 md:mb-20">
        {/* Left: label + heading */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2.5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
            <span className="text-[10px] tracking-[0.25em] text-primary font-bold uppercase">
              Our Team
            </span>
          </motion.div>
          <h2 className="text-[clamp(36px,5vw,80px)] font-sans font-extrabold tracking-tighter leading-[0.92]">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                The Builders
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block font-serif italic font-medium text-white/40 tracking-normal"
              >
                Behind SPRDLX
              </motion.span>
            </div>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[14px] md:text-[16px] text-white/50 leading-[1.8] max-w-[500px] mt-6"
          >
            A collective of designers, engineers, and strategists obsessed with building things that matter.
          </motion.p>
        </div>

        {/* Right: empty for now, could be used for a call to action or left empty to let the grid breathe */}
        <div className="hidden lg:flex lg:col-span-4 lg:col-start-9 lg:flex-col lg:justify-end">
          {/* Intentionally left blank to balance the composition, allowing the grid to pop */}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {TEAM.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
};
