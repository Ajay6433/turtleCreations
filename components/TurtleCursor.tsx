'use client';
import { useEffect, useRef, useState } from 'react';

const TurtleCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Move turtle
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      // Add a trail dot
      const id = Date.now();
      setTrail((prev) => [...prev, { x: e.clientX, y: e.clientY, id }]);

      // Remove it after 700ms
      setTimeout(() => {
        setTrail((prev) => prev.filter((dot) => dot.id !== id));
      }, 700);
    };

    document.body.style.cursor = 'none'; // Hide system cursor
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto'; // Restore cursor on unmount
    };
  }, []);

  return (
    <>
      {/* Turtle Cursor */}
      <div
        ref={cursorRef}
        className="fixed z-[9999] pointer-events-none text-3xl transition-transform duration-75"
        style={{
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
        }}
      >
        🐢
      </div>

      {/* Trail Dots */}
      {trail.map((dot) => (
        <div
          key={dot.id}
          className="fixed w-2 h-2 bg-green-400 rounded-full opacity-60 pointer-events-none transition-opacity duration-700"
          style={{
            top: dot.y,
            left: dot.x,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </>
  );
};

export default TurtleCursor;
