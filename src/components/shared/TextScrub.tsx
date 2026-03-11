import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextScrubProps {
  text: string;
  className?: string;
}

export const TextScrub: React.FC<TextScrubProps> = ({ text, className = "" }) => {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"]
  });

  const words = text.split(" ");
  
  return (
    <p ref={container} className={`flex flex-wrap gap-x-[0.25em] gap-y-1 ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <span key={i} className="relative">
            <span className="absolute opacity-20">{word}</span>
            <motion.span style={{ opacity }}>{word}</motion.span>
          </span>
        );
      })}
    </p>
  );
};
