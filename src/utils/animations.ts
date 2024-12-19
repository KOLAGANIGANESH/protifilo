import { useEffect, useRef, useState } from 'react';

// Animation utility classes
export const animations = {
  fadeInUp: "animate-fade-in-up",
  fadeIn: "animate-fade-in",
  slideIn: "animate-slide-in",
  slideInRight: "animate-slide-in-right",
  slideInLeft: "animate-slide-in-left",
  scaleIn: "animate-scale-in",
  bounceIn: "animate-bounce-in",
  rotateIn: "animate-rotate-in",
  flipIn: "animate-flip-in",
};

// Custom hook for scroll-triggered animations
export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref: elementRef, isVisible };
};

// Animation delay utility
export const getAnimationDelay = (index: number, baseDelay: number = 100) => {
  return `animation-delay-${index * baseDelay}`;
};