import { useEffect, useState } from 'react';

interface GeometricElement {
  id: number;
  type: 'circle' | 'square' | 'line';
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export default function AnimatedBackground() {
  const [elements, setElements] = useState<GeometricElement[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements: GeometricElement[] = [];
      for (let i = 0; i < 8; i++) {
        const types: ('circle' | 'square' | 'line')[] = ['circle', 'square', 'line'];
        newElements.push({
          id: i,
          type: types[i % 3],
          size: Math.random() * 40 + 20, // 20-60px
          x: Math.random() * 100, // 0-100%
          y: Math.random() * 100, // 0-100%
          delay: Math.random() * 10, // 0-10s delay
          duration: Math.random() * 20 + 15, // 15-35s duration
        });
      }
      setElements(newElements);
    };

    generateElements();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-60" />
      
      {/* Geometric elements */}
      {elements.map((element) => {
        const baseClasses = "absolute opacity-5 animate-float-slow";
        
        if (element.type === 'circle') {
          return (
            <div
              key={element.id}
              className={`${baseClasses} rounded-full border border-gray-400`}
              style={{
                width: `${element.size}px`,
                height: `${element.size}px`,
                left: `${element.x}%`,
                top: `${element.y}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}
            />
          );
        }
        
        if (element.type === 'square') {
          return (
            <div
              key={element.id}
              className={`${baseClasses} border border-gray-400 rotate-45`}
              style={{
                width: `${element.size}px`,
                height: `${element.size}px`,
                left: `${element.x}%`,
                top: `${element.y}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}
            />
          );
        }
        
        // Line element
        return (
          <div
            key={element.id}
            className={`${baseClasses} bg-gray-400`}
            style={{
              width: `${element.size * 2}px`,
              height: '1px',
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        );
      })}
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `
            linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}
