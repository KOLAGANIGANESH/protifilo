import React from "react";
import { ArrowRight, Download } from "lucide-react";
import Button from "./ui/Button";
import AnimatedSection from "./ui/AnimatedSection";
import { animations } from "../utils/animations";
import ProfileImage from "../images/IMG.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-indigo-50 via-white to-rose-50 -z-10" />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <AnimatedSection animation={animations.slideInLeft}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
                Hi, I'm Ganesh Kolagani
              </h1>
            </AnimatedSection>

            <AnimatedSection
              animation={animations.fadeInUp}
              className="delay-300"
            >
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Full Stack Developer & DevOps Engineer
              </p>
            </AnimatedSection>

            <AnimatedSection
              animation={animations.fadeIn}
              className="delay-500"
            >
              <p className="text-gray-600 mb-8 max-w-2xl">
                Passionate about creating innovative solutions through
                technology. Specialized in full-stack development with expertise
                in modern web technologies and DevOps practices.
              </p>
            </AnimatedSection>

            <AnimatedSection
              animation={animations.slideInLeft}
              className="delay-700"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button variant="primary" className="group">
                  View Portfolio
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
                <Button
                  variant="outline"
                  className="group flex items-center"
                  href=".\src\images\Kolagani Ganesh_Resume.pdf" // Path relative to the public folder
                  download="Kolagani_Ganesh_Resume.pdf" // Forces download with this filename
                  aria-label="Download CV"
                >
                  Download CV
                  <Download
                    className="ml-2 group-hover:translate-y-0.5 transition-transform"
                    size={20}
                  />
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection
            animation={animations.slideInRight}
            className="flex-1 max-w-md"
          >
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-2xl blur opacity-20 animate-pulse" />
              <img
                src={ProfileImage}
                alt="Kolagani Ganesh"
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
