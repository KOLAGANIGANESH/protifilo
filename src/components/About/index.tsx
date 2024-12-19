import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import EducationCard from './EducationCard';
import AnimatedSection from '../ui/AnimatedSection';
import { animations } from '../../utils/animations';

const About = () => {
  const education = [
    {
      institution: 'KKR & KSR Institute of Technology and Sciences',
      degree: 'B.Tech in Information Technology',
      year: '2019-2023',
      grade: 'CGPA: 7.93',
    },
    {
      institution: 'Sri Chaitanya Junior College',
      degree: 'Intermediate',
      year: '2017-2019',
      grade: 'GPA: 6.47',
    },
    {
      institution: "St. Luke's School",
      degree: 'SSC',
      year: '2017',
      grade: 'GPA: 8.0',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="My journey in technology and education"
        />
        
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation={animations.fadeInUp}>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              I am a passionate Information Technology graduate with a strong foundation
              in full-stack development and DevOps practices. My journey in technology
              has been driven by curiosity and a desire to create impactful solutions.
              I believe in continuous learning and staying updated with the latest
              technological advancements.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection animation={animations.slideInLeft}>
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
                Education
              </h3>
            </AnimatedSection>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <EducationCard key={index} education={edu} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;