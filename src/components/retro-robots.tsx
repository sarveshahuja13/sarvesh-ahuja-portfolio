
'use client';
import React, { useEffect, useState } from 'react';

const Robot = ({ style }: { style: React.CSSProperties }) => (
  <div className="robot" style={style}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="16" height="10" fill="hsl(var(--primary))" />
        <rect x="7" y="11" width="10" height="2" fill="hsl(var(--accent))" />
        <rect x="6" y="6" width="2" height="2" fill="hsl(var(--foreground))" />
        <rect x="16" y="6" width="2" height="2" fill="hsl(var(--foreground))" />
        <rect x="9" y="4" width="6" height="2" fill="hsl(var(--secondary))" />
    </svg>
  </div>
);

export function RetroRobots() {
  const [robots, setRobots] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const generatedRobots = Array.from({ length: 15 }).map(() => {
      const size = Math.random() * 0.5 + 0.5; // Scale between 0.5x and 1.0x
      return {
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`, // Duration between 10s and 20s
        animationDelay: `${Math.random() * -20}s`, // Start at various points
        transform: `scale(${size})`,
        opacity: Math.random() * 0.3 + 0.1, // Opacity between 0.1 and 0.4
      };
    });
    setRobots(generatedRobots);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {robots.map((style, i) => (
        <Robot key={i} style={style} />
      ))}
    </div>
  );
}
