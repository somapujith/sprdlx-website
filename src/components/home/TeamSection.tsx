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

const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Card image area */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden cursor-none"
        style={{ aspectRatio: '3 / 4' }}
      >
        {/* Image — grayscale default, color on hover */}
        <img
          src={member.img}
          alt={member.name}
          draggable={false}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover select-none transition-all duration-700 ease-out"
          style={{
            filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
            transform: hovered ? 'scale(1.06)' : 'scale(1.0)',
          }}
        />

        {/* Red tint overlay — fades in on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: 'linear-gradient(135deg, rgba(180,20,10,0.55) 0%, rgba(120,10,5,0.35) 100%)',
            mixBlendMode: 'multiply',
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Bottom vignette for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>

      {/* Name + role */}
      <div className="mt-5 px-0.5">
        <div className="text-[18px] font-bold text-white tracking-[-0.02em] leading-tight">
          {member.name}
        </div>
        <div className="text-[12px] font-semibold mt-1 tracking-[0.06em] uppercase text-primary">
          {member.role}
        </div>
      </div>
    </motion.div>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="bg-black min-h-screen flex flex-col justify-center py-[80px] px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2.5 mb-4 text-[10px] tracking-[0.2em] text-primary font-bold lowercase"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-spin-slow" />
            our team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(32px,3.5vw,52px)] font-extrabold tracking-[-0.03em] text-white leading-[1.1]"
          >
            The Builders<br />Behind SPRDLX
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[13px] text-white/40 leading-[1.8] max-w-[320px]"
        >
          A collective of designers, engineers, and strategists obsessed with building things that matter.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {TEAM.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
};
