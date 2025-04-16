'use client';
import { useEffect, useRef, useState } from 'react';

const TurtleCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      const id = Date.now();
      setTrail((prev) => [...prev, { x: e.clientX, y: e.clientY, id }]);

      setTimeout(() => {
        setTrail((prev) => prev.filter((dot) => dot.id !== id));
      }, 700);

      // Check element under cursor to update pointer state
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el && (el as HTMLElement).tagName === 'A' || (el as HTMLElement).onclick || el?.classList.contains('cursor-pointer')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed z-[9999] pointer-events-none transition-transform duration-75"
        style={{
          width: '32px',
          height: '32px',
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          backgroundImage: `url(${isPointer ? '/pointer.png' : '/cursor.png'})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />

    </>
  );
};

export default TurtleCursor;
