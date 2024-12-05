import { useEffect, useRef } from 'react';
import { config } from '../utils/config';

export const BottomLogo = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const deltaX = (e.clientX - centerX) / 25;
      const deltaY = (e.clientY - centerY) / 25;
      
      imageRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto mt-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-green-400 to-purple-600 rounded-full opacity-75 blur-2xl animate-pulse"></div>
      <div className="absolute inset-0 bg-purple-500/50 rounded-full animate-ping"></div>
      <img
        ref={imageRef}
        src={config.images.bottomLogo}
        alt="Bottom Logo"
        className="relative w-full h-full object-contain transition-transform duration-300 ease-out animate-float"
      />
    </div>
  );
};