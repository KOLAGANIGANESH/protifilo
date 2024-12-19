import React from "react";
import { Phone, Mail, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9390190386",
      href: "tel:+919390190386",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kolaganiganesh79@gmail.com",
      href: "mailto:kolaganiganesh79@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Ganesh Kolagani",
      href: "https://github.com/KOLAGANIGANESH",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ganesh Kolagani",
      href: "https://www.linkedin.com/in/ganesh-kolagani-b8a731220",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in Touch
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                target={item.icon === Linkedin ? "_blank" : undefined}
                rel={item.icon === Linkedin ? "noopener noreferrer" : undefined}
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <item.icon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.label}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
