import React from 'react';

export const MarqueeSection: React.FC = () => {
  return (
    <div className="bg-black py-20 overflow-hidden relative border-y border-white/5 flex items-center">
      <div className="flex w-[200%] animate-marquee-left whitespace-nowrap">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-8 px-4 text-[clamp(4rem,10vw,8rem)] font-sans font-extrabold tracking-tight leading-none">
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}>
              SPRDLX
            </span>
            <span className="text-white">AI DESIGN STUDIO</span>
            <span className="font-serif italic font-medium text-primary">WE BUILD FUTURES</span>
          </div>
        ))}
      </div>
    </div>
  );
};
