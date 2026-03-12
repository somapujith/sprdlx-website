import React from 'react';

export const MarqueeSection: React.FC = () => {
  return (
    <div className="bg-black py-6 md:py-8 overflow-hidden relative border-y border-white/5 flex items-center">
      <div className="flex w-[200%] animate-marquee-left whitespace-nowrap">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex items-center gap-6 md:gap-10 px-3 md:px-4 text-[clamp(3rem,8vw,6rem)] font-sans font-extrabold tracking-tight leading-none"
          >
            <span
              className="font-['Franie'] font-bold tracking-normal"
              style={{
                WebkitTextStroke: '1.5px rgba(255,255,255,0.15)',
                color: 'transparent',
              }}
            >
              SPRDLX
            </span>
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="text-white/90">AI DESIGN STUDIO</span>
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span className="font-serif italic font-medium text-primary/80">
              CRAFTING TOMORROW'S ICONS
            </span>
            <span className="w-2 h-2 rounded-full bg-white/10 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
