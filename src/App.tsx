/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      duration: 1.2,
    });

    // Custom Cursor Logic
    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      }
    };

    let rafId: number;
    const animRing = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      rafId = requestAnimationFrame(animRing);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animRing);

    // Cleanup
    return () => {
      lenis.destroy();
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Router>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
      
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className={isLoading ? 'h-screen overflow-hidden' : ''}>
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
