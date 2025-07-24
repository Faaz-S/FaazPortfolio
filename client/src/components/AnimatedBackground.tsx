import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 12; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 60 + 20, // 20-80px
          x: Math.random() * 100, // 0-100%
          y: Math.random() * 100, // 0-100%
          delay: Math.random() * 8, // 0-8s delay
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => {
        const variant = bubble.id % 3 === 0 ? 'variant-1' : bubble.id % 3 === 1 ? 'variant-2' : '';
        return (
          <div
            key={bubble.id}
            className={`floating-bubble ${variant}`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
