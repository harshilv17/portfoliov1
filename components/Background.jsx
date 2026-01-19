'use client';

import { useEffect, useRef } from 'react';

export default function GridBackground() {
  return <div className="grid-background" />;
}

export function GlowEffects() {
  const glowLeftRef = useRef(null);
  const glowRightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (glowLeftRef.current) {
        glowLeftRef.current.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      }
      if (glowRightRef.current) {
        glowRightRef.current.style.transform = `translate(${-x * 30}px, ${y * 30}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div ref={glowLeftRef} className="glow glow-left" />
      <div ref={glowRightRef} className="glow glow-right" />
    </>
  );
}
