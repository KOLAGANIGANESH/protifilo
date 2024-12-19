import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Card from '../ui/Card';
import AnimatedSection from '../ui/AnimatedSection';
import { animations } from '../../utils/animations';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <AnimatedSection
      animation={animations.flipIn}
      className={`delay-${index * 200}`}
    >
      <Card className="group">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                <Github className="text-gray-800" size={24} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                <ExternalLink className="text-gray-800" size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-rose-100 text-indigo-600 rounded-full text-sm transform hover:scale-105 transition-transform"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </AnimatedSection>
  );
};

export default ProjectCard;