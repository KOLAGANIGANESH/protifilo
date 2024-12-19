import React from 'react';
import { GraduationCap } from 'lucide-react';
import Card from '../ui/Card';
import AnimatedSection from '../ui/AnimatedSection';
import { animations } from '../../utils/animations';

interface Education {
  institution: string;
  degree: string;
  year: string;
  grade: string;
}

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  return (
    <AnimatedSection
      animation={animations.slideInRight}
      className={`delay-${index * 200}`}
    >
      <Card className="group hover:bg-gradient-to-br hover:from-indigo-50 hover:to-rose-50">
        <div className="flex items-start gap-4 p-4">
          <div className="p-2 bg-gradient-to-r from-indigo-100 to-rose-100 rounded-lg group-hover:scale-110 transition-transform">
            <GraduationCap className="text-indigo-600" size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg group-hover:text-indigo-600 transition-colors">
              {education.institution}
            </h4>
            <p className="text-gray-600">{education.degree}</p>
            <div className="flex items-center gap-4 mt-2 text-sm">
              <span className="text-gray-500">{education.year}</span>
              <span className="font-medium bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
                {education.grade}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </AnimatedSection>
  );
};