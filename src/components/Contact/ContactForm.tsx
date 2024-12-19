import React from 'react';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import { animations } from '../../utils/animations';

const ContactForm = () => {
  return (
    <AnimatedSection animation={animations.slideInRight}>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 group-hover:border-indigo-300"
            />
          </div>
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 group-hover:border-indigo-300"
            />
          </div>
        </div>
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 group-hover:border-indigo-300"
          ></textarea>
        </div>
        <Button variant="primary" className="w-full md:w-auto">
          Send Message
        </Button>
      </form>
    </AnimatedSection>
  );
};

export default ContactForm;