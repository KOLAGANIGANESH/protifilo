import React from 'react';
import { colors } from '../../utils/colors';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return `${colors.primary.default} ${colors.primary.hover} text-white`;
      case 'secondary':
        return `${colors.secondary.default} ${colors.secondary.hover} text-white`;
      case 'outline':
        return `border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white`;
      default:
        return '';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center px-6 py-3 rounded-lg
        transition-all duration-300 transform hover:-translate-y-0.5
        ${getVariantClasses()}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;