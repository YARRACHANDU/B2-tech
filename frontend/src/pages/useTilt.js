// src/components/useTilt.js
import { useRef, useEffect } from 'react';

export function useTilt(active = true) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) return;
    const el = ref.current;
    function handleMouseMove(e) {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const px = (x / width)  * 2 - 1;
      const py = (y / height) * 2 - 1;
      el.style.transform = `perspective(800px) rotateX(${-py * 12}deg) rotateY(${px * 12}deg)`;
    }
    function handleMouseLeave() {
      el.style.transform = '';
    }
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [active]);

  return ref;
}
