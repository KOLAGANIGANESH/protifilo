import React from "react";
import { GraduationCap, Building2 } from "lucide-react";

const About = () => {
  const education = [
    {
      institution: "KKR & KSR Institute of Technology and Sciences",
      degree: "B.Tech in Information Technology",
      year: "2020-2024",
      grade: "CGPA: 7.93",
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate",
      year: "2018-2020",
      grade: "GPA: 6.47",
    },
    {
      institution: "St. Luke's School",
      degree: "SSC",
      year: "2018",
      grade: "GPA: 8.0",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-12 text-lg leading-relaxed">
            I am a passionate Information Technology graduate with a strong
            foundation in full-stack development and DevOps practices. My
            journey in technology has been driven by curiosity and a desire to
            create impactful solutions. I believe in continuous learning and
            staying updated with the latest technological advancements.
          </p>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{edu.institution}</h4>
                    <p className="text-gray-600">{edu.degree}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>{edu.year}</span>
                      <span className="font-medium text-blue-600">
                        {edu.grade}
                      </span>
                    </div>
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

export default About;
