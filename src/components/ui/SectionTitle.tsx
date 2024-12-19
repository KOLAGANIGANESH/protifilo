import React from 'react';
import { fadeInUp } from '../../utils/animations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className={`text-center mb-12 ${fadeInUp}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;