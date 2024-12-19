import React from 'react';
import { useScrollAnimation } from '../../utils/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'animate-fade-in-up',
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animation : 'opacity-0'} transition-all duration-700`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;