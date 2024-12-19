import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Java Full Stack Development Hackathon',
      organization: 'Brainovision',
      description: 'Participated and demonstrated expertise in full-stack development',
      icon: Trophy,
    },
    {
      title: 'Python Workshop',
      organization: 'APSSDC',
      description: 'Completed 2-week intensive Python programming workshop',
      icon: Award,
    },
    {
      title: 'Placement Cell Coordinator',
      organization: 'College Leadership',
      description: 'Served as coordinator helping fellow students with placement preparation',
      icon: Star,
    },
    {
      title: 'E-CELL Events Participant',
      organization: 'College E-CELL',
      description: 'Active participation in entrepreneurship development activities',
      icon: Star,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Achievements
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <achievement.icon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;