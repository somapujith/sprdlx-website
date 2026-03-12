import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface TextScrubProps {
  text: string;
  className?: string;
}

const ScrubWord: React.FC<{
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}> = React.memo(({ word, progress, start, end }) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-20">{word}</span>
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
});

export const TextScrub: React.FC<TextScrubProps> = ({ text, className = "" }) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"]
  });

  const words = useMemo(() => text.split(" "), [text]);

  return (
    <p ref={container} className={`flex flex-wrap gap-x-[0.25em] gap-y-1 ${className}`}>
      {words.map((word, i) => (
        <ScrubWord
          key={i}
          word={word}
          progress={scrollYProgress}
          start={i / words.length}
          end={(i + 1) / words.length}
        />
      ))}
    </p>
  );
};
