import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const textRef = useRef<SVGTextElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        // Slide up animation
        gsap.to(containerRef.current, {
          y: '-100%',
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: () => {
            document.body.style.overflow = '';
            onComplete();
          },
        });
      },
    });

    // Animate stroke
    tl.fromTo(
      textRef.current,
      { strokeDasharray: 2000, strokeDashoffset: 2000 },
      { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut' }
    );

    // Fill color
    tl.to(
      textRef.current,
      { fill: '#F27D26', duration: 0.8, ease: 'power2.inOut' },
      '-=0.8' // Start slightly before outline finishes
    );

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]"
    >
      <svg viewBox="0 0 1000 300" className="w-full max-w-6xl px-4">
        <text
          ref={textRef}
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="font-display text-[200px] tracking-tighter uppercase"
          fill="transparent"
          stroke="#F27D26"
          strokeWidth="3"
        >
          SPRDLX
        </text>
      </svg>
    </div>
  );
};
