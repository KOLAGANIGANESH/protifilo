import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from '../ui/Card';
import AnimatedSection from '../ui/AnimatedSection';
import { animations } from '../../utils/animations';

interface SkillCardProps {
  skill: {
    name: string;
    icon: LucideIcon;
    items: string[];
  };
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <AnimatedSection
      animation={animations.rotateIn}
      className={`delay-${index * 200}`}
    >
      <Card className="group p-6 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-rose-50 transition-colors duration-500">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-gradient-to-r from-indigo-100 to-rose-100 rounded-lg group-hover:scale-110 transition-transform">
            <skill.icon className="text-indigo-600" size={24} />
          </div>
          <h4 className="font-semibold text-lg group-hover:text-indigo-600 transition-colors">
            {skill.name}
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-sm transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-rose-100 hover:text-indigo-600"
            >
              {item}
            </span>
          ))}
        </div>
      </Card>
    </AnimatedSection>
  );
};

export default SkillCard;