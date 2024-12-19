import React from "react";
import { ExternalLink, Github } from "lucide-react";
import FlavoursOceanImage from "../images/image.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Flavour's Ocean Website",
      description:
        "A modern, user-friendly ice cream factory website showcasing menu items, flavors, online ordering, and a seamless user experience.",
      image: FlavoursOceanImage, // Corrected the image assignment
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/KOLAGANIGANESH",
      liveDemoLink: "http://www.flavoursocean.com",
    },
    {
      title: "AI/ML-Based Business Optimization",
      description:
        "Implemented machine learning algorithms to optimize business operations and enhance customer satisfaction through predictive analytics.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "TensorFlow", "SQL", "Data Analysis"],
      githubLink: "https://github.com/KOLAGANIGANESH",
      liveDemoLink: "#",
    },
    {
      title: "Amigo-Assist Web Development",
      description:
        "Interactive website featuring dynamic cost calculation based on user selections and preferences.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "HTML/CSS", "React", "API Integration"],
      githubLink: "https://github.com/KOLAGANIGANESHt",
      liveDemoLink: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Portfolio
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2" size={20} />
                    Code
                  </a>
                  <a
                    href={project.liveDemoLink}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
