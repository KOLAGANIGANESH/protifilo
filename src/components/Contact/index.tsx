import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's connect and discuss how we can work together"
        />
        <div className="max-w-4xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;