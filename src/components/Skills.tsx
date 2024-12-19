import React from 'react';
import { Code2, Layout, Database, Brain, Users, Rocket } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Frontend Development', icon: Layout, items: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { name: 'Backend Development', icon: Code2, items: ['Java', 'Node.js', 'Python'] },
    { name: 'Database', icon: Database, items: ['SQL', 'MongoDB'] },
  ];

  const softSkills = [
    { name: 'Quick Learning', icon: Brain, items: ['Adaptability', 'Problem Solving'] },
    { name: 'Team Collaboration', icon: Users, items: ['Communication', 'Leadership'] },
    { name: 'Professional Skills', icon: Rocket, items: ['Project Management', 'Time Management'] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <skill.icon className="text-blue-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-lg">{skill.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <skill.icon className="text-blue-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-lg">{skill.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;