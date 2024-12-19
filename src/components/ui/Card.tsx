import React from 'react';
import { fadeIn } from '../../utils/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        bg-white rounded-xl overflow-hidden border border-gray-200
        ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''}
        transition-all duration-300 ${fadeIn}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;