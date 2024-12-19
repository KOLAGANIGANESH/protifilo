import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: "Flavour's Ocean Website",
      description: "A modern, user-friendly restaurant website showcasing menu items, online ordering, and seamless user experience.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    },
    {
      title: "AI/ML-Based Business Optimization",
      description: "Implemented machine learning algorithms to optimize business operations and enhance customer satisfaction through predictive analytics.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
      tags: ['Python', 'TensorFlow', 'SQL', 'Data Analysis'],
    },
    {
      title: "Amigo-Assist Web Development",
      description: "Interactive website featuring dynamic cost calculation based on user selections and preferences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ['JavaScript', 'HTML/CSS', 'React', 'API Integration'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Portfolio"
          subtitle="Explore my recent projects and technical achievements"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;