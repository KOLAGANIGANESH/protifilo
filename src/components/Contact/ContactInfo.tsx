import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { animations } from '../../utils/animations';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9390190386',
      href: 'tel:+919390190386',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'kolaganiganesh79@gmail.com',
      href: 'mailto:kolaganiganesh79@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '8th Lane, Balaji Nagar, Guntur',
      href: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ganesh Kolagani',
      href: 'https://www.linkedin.com/in/ganesh-kolagani-b8a731220',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {contactInfo.map((item, index) => (
        <AnimatedSection
          key={index}
          animation={animations.slideInLeft}
          className={`delay-${index * 200}`}
        >
          <a
            href={item.href}
            className="flex items-center gap-4 p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg hover:from-indigo-50 hover:to-rose-50 transition-all duration-300 group"
            target={item.icon === Linkedin ? '_blank' : undefined}
            rel={item.icon === Linkedin ? 'noopener noreferrer' : undefined}
          >
            <div className="p-2 bg-gradient-to-r from-indigo-100 to-rose-100 rounded-lg group-hover:scale-110 transition-transform">
              <item.icon className="text-indigo-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {item.label}
              </h3>
              <p className="text-gray-600">{item.value}</p>
            </div>
          </a>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default ContactInfo;