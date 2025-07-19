
"use client"
import { useEffect, useState } from 'react';

const RainAnimation = () => {
  const [raindrops, setRaindrops] = useState<{ left: string; top: string; animationDuration: string }[]>([]);

  useEffect(() => {
    const createRaindrop = () => {
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * -20}%`,
        animationDuration: `${0.5 + Math.random() * 0.5}s`,
      };
    };

    const interval = setInterval(() => {
      setRaindrops(prev => [...prev.slice(-50), createRaindrop()]);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 opacity-10 h-full pointer-events-none">
      {raindrops.map((drop, i) => (
        <div
          key={i}
          className="absolute bg-blue-200 w-px h-4"
          style={{
            left: drop.left,
            top: drop.top,
            animation: `fall ${drop.animationDuration} linear infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default RainAnimation;
