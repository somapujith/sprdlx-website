/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Custom Cursor Logic
    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
      }
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      requestAnimationFrame(animRing);
    };

    document.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(animRing);

    // Cleanup
    return () => {
      lenis.destroy();
      document.removeEventListener('mousemove', onMouseMove);
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
        </Routes>
      </div>
    </Router>
  );
}
