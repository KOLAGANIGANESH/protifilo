import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from '../ui/Card';
import AnimatedSection from '../ui/AnimatedSection';
import { animations } from '../../utils/animations';

interface Achievement {
  title: string;
  organization: string;
  description: string;
  icon: LucideIcon;
}

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  return (
    <AnimatedSection
      animation={animations.bounceIn}
      className={`delay-${index * 200}`}
    >
      <Card className="group hover:bg-gradient-to-br hover:from-indigo-50 hover:to-rose-50">
        <div className="flex items-start gap-4 p-6">
          <div className="p-2 bg-gradient-to-r from-indigo-100 to-rose-100 rounded-lg group-hover:scale-110 transition-transform">
            <achievement.icon className="text-indigo-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-600 transition-colors">
              {achievement.title}
            </h3>
            <p className="text-blue-600 text-sm mb-2">
              {achievement.organization}
            </p>
            <p className="text-gray-600">
              {achievement.description}
            </p>
          </div>
        </div>
      </Card>
    </AnimatedSection>
  );
};

export default AchievementCard;